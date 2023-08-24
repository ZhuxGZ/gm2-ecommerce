export default function Row({ title, size, children }) {
	return (
		<section>
			<h2 className="title">{title}</h2>
			<div className={`row ${size}`}>{children}</div>
		</section>
	);
}
