export default function Row({ title, col, children }) {
	return (
		<section>
			<h2 className="title">{title}</h2>
			<div className={`col col-${col}`}>{children}</div>
		</section>
	);
}
