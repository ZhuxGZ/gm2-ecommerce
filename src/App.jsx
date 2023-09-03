import Row from './components/containers/Row';
import Layout from './components/layouts/layout';

function App() {
	return (
		<Layout>
			<Row col="4" title="Productos Destacados" />
			<Row col="4" title="Productos en Oferta" discountRow />
			<Row col="2" title="Novedades" newsRow />
		</Layout>
	);
}

export default App;
