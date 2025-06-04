import { useState } from 'react';
import { Head } from './components/Head/Head';
import { Form } from './components/Form/Form';
import { Task } from './components/Task/Task';
import { Foot } from './components/Foot/Foot';
import './App.css';

interface TaskData {
	id: number;
	content: string;
	completed: boolean;
}

export const App = () => {
	const [tasks, setTasks] = useState<TaskData[]>([
		{ id: 3, content: 'Получить ⭐ на GitHub ', completed: false },
		{ id: 2, content: 'Опубликовать приложение', completed: false },
		{ id: 1, content: 'Создать приложение', completed: true },
	]);

	const createTask = (content: string) => {
		setTasks((prevTasks) => {
			return [{ id: Date.now(), content, completed: false }, ...prevTasks];
		});
	};

	const deleteTask = (id: number) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
	};

	const toggleTaskCompleted = (id: number) => {
		setTasks((prevTasks) => {
			return prevTasks.map((task) => {
				if (task.id !== id) return task;
				return {
					id: task.id,
					content: task.content,
					completed: !task.completed,
				};
			});
		});
	};

	return (
		<div className="app">
			<div className="app__wrap">
				<Head
					className="app__head"
					count={tasks.filter(({ completed }) => completed).length}
					total={tasks.length}
				/>
				<Form className="app__form" onCreate={createTask} />
				<ul className="app__list">
					{tasks.map(({ id, content, completed }) => (
						<Task
							as="li"
							key={id}
							className="app__list-item"
							content={content}
							completed={completed}
							onDelete={() => deleteTask(id)}
							onToggleCompleted={() => toggleTaskCompleted(id)}
						/>
					))}
				</ul>
				<Foot className="app__foot" />
			</div>
		</div>
	);
};
