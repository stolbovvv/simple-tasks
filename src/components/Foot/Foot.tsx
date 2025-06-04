import './Foot.css';

interface FootProps {
	className?: string;
}

export const Foot: React.FC<FootProps> = ({ className }) => {
	return (
		<footer className={[className, 'foot'].filter(Boolean).join(' ')}>
			<div className="foot__info">
				<p className="foot__info-year">2025</p>
				<a className="foot__info-link" href="https://github.com/stolbovvv" target="_blank" rel="noreferrer">
					<span className="foot__info-link-text">Stolbov</span>
				</a>
			</div>
			<div className="foot__tags">
				<span className="foot__tags-item">TypeScript</span>
				<span className="foot__tags-item">React</span>
			</div>
		</footer>
	);
};
