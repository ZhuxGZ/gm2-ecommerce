export default function Navbar() {
	return (
		<nav>
			<div className="user">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 25"
					fill="none"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M8 7.5C8 6.43913 8.42143 5.42172 9.17157 4.67157C9.92172 3.92143 10.9391 3.5 12 3.5C13.0609 3.5 14.0783 3.92143 14.8284 4.67157C15.5786 5.42172 16 6.43913 16 7.5C16 8.56087 15.5786 9.57828 14.8284 10.3284C14.0783 11.0786 13.0609 11.5 12 11.5C10.9391 11.5 9.92172 11.0786 9.17157 10.3284C8.42143 9.57828 8 8.56087 8 7.5ZM8 13.5C6.67392 13.5 5.40215 14.0268 4.46447 14.9645C3.52678 15.9021 3 17.1739 3 18.5C3 19.2956 3.31607 20.0587 3.87868 20.6213C4.44129 21.1839 5.20435 21.5 6 21.5H18C18.7956 21.5 19.5587 21.1839 20.1213 20.6213C20.6839 20.0587 21 19.2956 21 18.5C21 17.1739 20.4732 15.9021 19.5355 14.9645C18.5979 14.0268 17.3261 13.5 16 13.5H8Z"
						fill="white"
					/>
				</svg>
			</div>
			<div className="cart">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="30"
					height="30"
					viewBox="0 0 24 25"
					fill="none"
				>
					<path
						d="M17 18.5C15.89 18.5 15 19.39 15 20.5C15 21.0304 15.2107 21.5391 15.5858 21.9142C15.9609 22.2893 16.4696 22.5 17 22.5C17.5304 22.5 18.0391 22.2893 18.4142 21.9142C18.7893 21.5391 19 21.0304 19 20.5C19 19.9696 18.7893 19.4609 18.4142 19.0858C18.0391 18.7107 17.5304 18.5 17 18.5ZM1 2.5V4.5H3L6.6 12.09L5.24 14.54C5.09 14.82 5 15.15 5 15.5C5 16.0304 5.21071 16.5391 5.58579 16.9142C5.96086 17.2893 6.46957 17.5 7 17.5H19V15.5H7.42C7.3537 15.5 7.29011 15.4737 7.24322 15.4268C7.19634 15.3799 7.17 15.3163 7.17 15.25C7.17 15.2 7.18 15.16 7.2 15.13L8.1 13.5H15.55C16.3 13.5 16.96 13.08 17.3 12.47L20.88 6C20.95 5.84 21 5.67 21 5.5C21 5.23478 20.8946 4.98043 20.7071 4.79289C20.5196 4.60536 20.2652 4.5 20 4.5H5.21L4.27 2.5M7 18.5C5.89 18.5 5 19.39 5 20.5C5 21.0304 5.21071 21.5391 5.58579 21.9142C5.96086 22.2893 6.46957 22.5 7 22.5C7.53043 22.5 8.03914 22.2893 8.41421 21.9142C8.78929 21.5391 9 21.0304 9 20.5C9 19.9696 8.78929 19.4609 8.41421 19.0858C8.03914 18.7107 7.53043 18.5 7 18.5Z"
						fill="white"
					/>
				</svg>
			</div>
		</nav>
	);
}