import { useEffect, useState } from 'react';
import { NewsCard, ProdCard } from './Cards';

export default function Row({ title, col, discountRow, newsRow }) {
	let productsCard;
	const [products, setProducts] = useState([]);
	const getData = async () => {
		const res = await fetch('./src/assets/mock_data.json');
		const data = await res.json();
		console.log('get data');
		setProducts(await data);
	};

	useEffect(() => {
		getData();
	}, []);

	let date = new Date();
	let flag = 0;
	if (discountRow) {
		productsCard = products.map((product) => {
			if (product.discount != 0 && flag < 4) {
				flag++;
				return <ProdCard key={product.id} props={product} />;
			}
		});
	} else if (newsRow) {
		productsCard = products.map((product) => {
			if (flag <= 3) {
				let dateDiff = Math.abs(date - new Date(product.date.replace(/-/g, '/')));
				if (dateDiff / 1000 / 60 / 60 / 24 <= 7) {
					flag++;

					return <NewsCard key={product.id} props={product} />;
				}
			}
		});
	} else {
		productsCard = products.map((product) => {
			flag++;
			if (flag < 9) {
				return <ProdCard key={product.id} props={product} />;
			}
		});
	}

	return (
		<section>
			<h2 className="title">{title}</h2>
			<div className={`col col-${col}`}>{productsCard}</div>
		</section>
	);
}
