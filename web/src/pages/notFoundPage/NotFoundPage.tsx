import "./NotFoundPage.css";
import { useNavigate } from "react-router";

function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<div className="not-found-page">
			<h1>404</h1>
			<p>Page introuvable.</p>
			<button type="button" onClick={() => navigate("/")}>
				Retour à l'accueil
			</button>
		</div>
	);
}

export default NotFoundPage;
