import Row from './components/containers/Row';
import Layout from './components/layouts/layout';
import { NewsCard } from './components/containers/Cards';

function App() {
	return (
		<Layout>
			<Row cols="4" title="Productos Destacados">
				<NewsCard />
			</Row>
		</Layout>
	);
}

export default App;
