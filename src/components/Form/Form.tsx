import { useState } from 'react';
import './Form.css';

interface FormProps {
	className?: string;
	onCreate: (name: string) => void;
}

const FORM_INPUT_NAME = 'content';

export const Form: React.FC<FormProps> = ({ className, onCreate }) => {
	const [content, setContent] = useState<string>('');
	const [isError, setIsError] = useState<boolean>(false);

	const createTask = (e: React.FormEvent) => {
		e.preventDefault();

		if (content.length < 5) {
			setIsError(true);
		} else {
			onCreate(content);
		}
	};

	const handleChance = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		if (isError) setIsError(false);
		setContent(target.value);
	};

	return (
		<form className={[className, 'form'].filter(Boolean).join(' ')} onSubmit={createTask}>
			<div className="form__filed">
				<input
					className="form__filed-input"
					type="text"
					name={FORM_INPUT_NAME}
					value={content}
					onChange={handleChance}
					placeholder="Введите задачу"
				/>
				<button className="form__filed-button" type="submit" disabled={isError}>
					<span className="form__filed-button-text">Создать</span>
				</button>
			</div>
			{isError && <span className="form__error">Минимальная длинна названия 5 символов!</span>}
		</form>
	);
};
