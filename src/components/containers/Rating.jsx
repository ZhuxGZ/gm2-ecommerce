import { Star } from "./svg/star";

const Rating = ({ stars }) => {
	const starDisplay = () => {
		let star = [];
		for (let i = 0; i < 5; i++) {
			if (i + 1 <= stars) {
				star.push(<Star isActive />);
			} else {
				star.push(<Star />);
			}
		}
		return star;
	};

	return <div>{starDisplay()}</div>;
};

export default Rating;
