import logo from '@/assets/logo.svg';
import './Head.css';

interface HeadProps {
	className?: string;
	count: number;
	total: number;
}

export const Head: React.FC<HeadProps> = ({ className, count, total }) => {
	return (
		<header className={[className, 'head'].filter(Boolean).join(' ')}>
			<div className="head__logo">
				<img className="head__logo-icon" src={logo} alt="logotype" />
				<span className="head__logo-name">Simple Tasks</span>
			</div>
			<div className="head__info">
				<span className="head__info-label">Задачи:</span>
				<span className="head__info-value">
					<span className="head__info-value-count">{count}</span>
					<span className="head__info-value-slash">/</span>
					<span className="head__info-value-total">{total}</span>
				</span>
			</div>
		</header>
	);
};
