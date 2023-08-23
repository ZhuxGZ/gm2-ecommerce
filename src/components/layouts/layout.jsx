import Logo from '../containers/logo';
import Navbar from '../containers/Navbar';

export default function Layout({ children }) {
	return (
		<>
			<header>
				<Logo />
				<Navbar />
			</header>
			<main>{children}</main>
		</>
	);
}
