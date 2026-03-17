import { constants } from "../../../../setup/constants";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<span>{constants.APP_NAME}</span>
			<span>© {year}</span>
		</footer>
	);
}

export default Footer;
