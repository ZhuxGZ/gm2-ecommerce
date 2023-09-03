import Logo from '../containers/svg/Logo';
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
