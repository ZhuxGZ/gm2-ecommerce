import Row from './components/containers/Row';
import Layout from './components/layouts/layout';
import { NewsCard, ProdCard } from './components/containers/Cards';

function App() {
	return (
		<Layout>
			<Row col="4" title="Productos Destacados">
				<ProdCard isDiscount />
				<ProdCard />
				<ProdCard />
				<ProdCard />
			</Row>
		</Layout>
	);
}

export default App;
