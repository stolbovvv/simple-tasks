import check from '@/assets/check.svg';
import trash from '@/assets/trash.svg';
import './Task.css';

interface TaskProps {
	className?: string;
	as?: keyof React.JSX.IntrinsicElements;
	content: string;
	completed: boolean;
	onDelete: () => void;
	onToggleCompleted: () => void;
}

export const Task: React.FC<TaskProps> = ({
	className,
	as: Tag = 'div',
	content,
	completed,
	onDelete,
	onToggleCompleted,
}) => {
	return (
		<Tag className={[className, 'task'].filter(Boolean).join(' ')}>
			<button className="task__check" onClick={onToggleCompleted}>
				{completed && <img className="task__check-icon" src={check} alt="check" />}
			</button>
			<span className="task__name" data-completed={completed}>
				{content}
			</span>
			<button className="task__delete" onClick={onDelete}>
				<img className="task__delete-icon" src={trash} alt="delete" />
			</button>
		</Tag>
	);
};
