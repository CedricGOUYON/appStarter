import { Link } from "react-router";
import "./HomePage.css";

interface Chapter {
	id: string;
	title: string;
	description: string;
	status: "completed" | "current" | "upcoming";
	icon: string;
}

const chapters: Chapter[] = [
	{
		id: "t-01",
		title: "Création d'un monorepo",
		description: "Initialisation de la structure monorepo avec npm workspaces",
		status: "completed",
		icon: "📦",
	},
	{
		id: "t-02",
		title: "Structure frontend",
		description: "Configuration React avec Router, Layout et pages",
		status: "current",
		icon: "⚛️",
	},
	{
		id: "t-03",
		title: "Structure backend",
		description: "Serveur Express avec routes et contrôleurs",
		status: "upcoming",
		icon: "🚀",
	},
	{
		id: "t-04",
		title: "Base de données",
		description: "Configuration PostgreSQL et migrations",
		status: "upcoming",
		icon: "🗄️",
	},
	{
		id: "t-05",
		title: "Inscription",
		description: "Système d'enregistrement utilisateur avec validation",
		status: "upcoming",
		icon: "📝",
	},
	{
		id: "t-06",
		title: "Connexion",
		description: "Authentification avec JWT et sessions",
		status: "upcoming",
		icon: "🔐",
	},
	{
		id: "t-07",
		title: "Logout et session",
		description: "Gestion de la déconnexion et des sessions",
		status: "upcoming",
		icon: "🚪",
	},
	{
		id: "t-08",
		title: "Routes protégées",
		description: "Middleware de protection et redirection",
		status: "upcoming",
		icon: "🛡️",
	},
	{
		id: "t-09",
		title: "Dashboard",
		description: "Page d'accueil utilisateur connecté",
		status: "upcoming",
		icon: "📊",
	},
	{
		id: "t-10",
		title: "Profil et édition",
		description: "Page de profil avec formulaire d'édition",
		status: "upcoming",
		icon: "👤",
	},
	{
		id: "t-11",
		title: "Upload avatar",
		description: "Téléchargement et stockage d'images",
		status: "upcoming",
		icon: "🖼️",
	},
	{
		id: "t-12",
		title: "Read (CRUD)",
		description: "Lecture des données avec pagination",
		status: "upcoming",
		icon: "👁️",
	},
	{
		id: "t-13",
		title: "Create (CRUD)",
		description: "Création de nouvelles ressources",
		status: "upcoming",
		icon: "✨",
	},
	{
		id: "t-14",
		title: "Update (CRUD)",
		description: "Modification des ressources existantes",
		status: "upcoming",
		icon: "✏️",
	},
	{
		id: "t-15",
		title: "Delete (CRUD)",
		description: "Suppression sécurisée des ressources",
		status: "upcoming",
		icon: "🗑️",
	},
	{
		id: "t-16",
		title: "Emails transactionnels",
		description: "Envoi d'emails avec Nodemailer",
		status: "upcoming",
		icon: "📧",
	},
	{
		id: "t-17",
		title: "Stripe Checkout",
		description: "Intégration du paiement Stripe",
		status: "upcoming",
		icon: "💳",
	},
	{
		id: "t-18",
		title: "GitHub OAuth",
		description: "Authentification via GitHub",
		status: "upcoming",
		icon: "🐙",
	},
	{
		id: "t-19",
		title: "Déploiement Backend",
		description: "Déployer sur Render",
		status: "upcoming",
		icon: "☁️",
	},
	{
		id: "t-20",
		title: "Déploiement BD",
		description: "PostgreSQL sur Render",
		status: "upcoming",
		icon: "☁️",
	},
	{
		id: "t-21",
		title: "Déploiement Frontend",
		description: "Frontend sur Render",
		status: "upcoming",
		icon: "☁️",
	},
	{
		id: "t-22",
		title: "Système de rôles",
		description: "RBAC - Control d'accès basé sur les rôles",
		status: "upcoming",
		icon: "👥",
	},
	{
		id: "t-23",
		title: "Organisations et Teams",
		description: "Gestion d'organisations multi-utilisateurs",
		status: "upcoming",
		icon: "🏢",
	},
	{
		id: "t-24",
		title: "Permissions granulaires",
		description: "Système de permissions fine",
		status: "upcoming",
		icon: "🔑",
	},
	{
		id: "t-25",
		title: "Plans et limites",
		description: "Gestion des plans d'abonnement",
		status: "upcoming",
		icon: "📈",
	},
	{
		id: "t-26",
		title: "Stripe Billing",
		description: "Facturation récurrente avec Stripe",
		status: "upcoming",
		icon: "📋",
	},
	{
		id: "t-27",
		title: "Webhook Stripe",
		description: "Gestion des événements Stripe",
		status: "upcoming",
		icon: "🔗",
	},
	{
		id: "t-28",
		title: "Onboarding",
		description: "Tutoriel de premiers pas",
		status: "upcoming",
		icon: "🎯",
	},
	{
		id: "t-29",
		title: "Notifications in-app",
		description: "Système de notifications temps réel",
		status: "upcoming",
		icon: "🔔",
	},
	{
		id: "t-30",
		title: "Audit log",
		description: "Historique des actions utilisateur",
		status: "upcoming",
		icon: "📝",
	},
	{
		id: "t-31",
		title: "Admin panel",
		description: "Interface d'administration",
		status: "upcoming",
		icon: "⚙️",
	},
	{
		id: "t-32",
		title: "Analytics",
		description: "Suivi et statistiques",
		status: "upcoming",
		icon: "📊",
	},
	{
		id: "t-33",
		title: "Rate limiting",
		description: "Protection contre les abus",
		status: "upcoming",
		icon: "⏱️",
	},
	{
		id: "t-34",
		title: "Structure CMS",
		description: "Configuration du système de contenu",
		status: "upcoming",
		icon: "📰",
	},
	{
		id: "t-35",
		title: "Éditeur rich text",
		description: "Éditeur WYSIWYG pour contenu",
		status: "upcoming",
		icon: "✍️",
	},
	{
		id: "t-36",
		title: "Articles et Blog",
		description: "Gestion du blog et articles",
		status: "upcoming",
		icon: "📚",
	},
	{
		id: "t-37",
		title: "Pages statiques",
		description: "Gestion des pages statiques",
		status: "upcoming",
		icon: "📄",
	},
	{
		id: "t-38",
		title: "Médias et uploads",
		description: "Gestion des images et fichiers",
		status: "upcoming",
		icon: "🎬",
	},
	{
		id: "t-39",
		title: "Catégories et Tags",
		description: "Organisation du contenu",
		status: "upcoming",
		icon: "🏷️",
	},
	{
		id: "t-40",
		title: "SEO et Slugs",
		description: "Optimisation pour les moteurs de recherche",
		status: "upcoming",
		icon: "🔍",
	},
	{
		id: "t-41",
		title: "Multi-langue",
		description: "Support de plusieurs langues",
		status: "upcoming",
		icon: "🌍",
	},
	{
		id: "t-42",
		title: "Prévisualisation",
		description: "Aperçu avant publication",
		status: "upcoming",
		icon: "👁️",
	},
];

const stackItems = [
	{ name: "React 18", category: "Frontend", icon: "⚛️" },
	{ name: "TypeScript", category: "Language", icon: "🔷" },
	{ name: "Vite", category: "Build", icon: "⚡" },
	{ name: "React Router 7", category: "Frontend", icon: "🧭" },
	{ name: "Express", category: "Backend", icon: "🚀" },
	{ name: "PostgreSQL", category: "Database", icon: "🐘" },
	{ name: "Stripe", category: "Payments", icon: "💳" },
	{ name: "Nodemailer", category: "Email", icon: "📧" },
	{ name: "JWT", category: "Auth", icon: "🔐" },
	{ name: "Biome", category: "Linting", icon: "📐" },
];

function HomePage() {
	const completedCount = chapters.filter(
		(c) => c.status === "completed",
	).length;
	const totalCount = chapters.length;

	return (
		<div className="home-page">
			{/* Hero Section */}
			<section className="hero">
				<div className="hero-content">
					<h1 className="hero-title">appStarter</h1>
					<p className="hero-subtitle">
						Guide complet pour construire une SaaS moderne
					</p>
					<div className="progress-indicator">
						<div
							className="progress-bar"
							style={{
								width: `${(completedCount / totalCount) * 100}%`,
							}}
						></div>
					</div>
					<p className="progress-text">
						{completedCount} / {totalCount} modules complétés
					</p>
				</div>
			</section>

			{/* Stack Section */}
			<section className="stack-section">
				<h2>Stack Technique</h2>
				<div className="stack-grid">
					{stackItems.map((item) => (
						<div key={item.name} className="stack-card">
							<div className="stack-icon">{item.icon}</div>
							<div className="stack-info">
								<h3>{item.name}</h3>
								<p>{item.category}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Chapters Section */}
			<section className="chapters-section">
				<h2>Modules de Formation</h2>
				<div className="chapters-grid">
					{chapters.map((chapter) => (
						<div
							key={chapter.id}
							className={`chapter-card chapter-${chapter.status}`}
						>
							<div className="chapter-icon">{chapter.icon}</div>
							<div className="chapter-content">
								<h3>{chapter.title}</h3>
								<p>{chapter.description}</p>
								<div className="chapter-status">
									{chapter.status === "completed" && (
										<span className="badge completed">✓ Complété</span>
									)}
									{chapter.status === "current" && (
										<span className="badge current">→ En cours</span>
									)}
									{chapter.status === "upcoming" && (
										<span className="badge upcoming">○ À venir</span>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="cta-section">
				<h2>Prêt à démarrer ?</h2>
				<p>Suivez les modules dans l'ordre pour construire votre SaaS</p>
				<div className="cta-buttons">
					<Link to="/" className="btn btn-primary">
						Commencer
					</Link>
					<Link to="/" className="btn btn-secondary">
						Documentation
					</Link>
				</div>
			</section>
		</div>
	);
}

export default HomePage;
