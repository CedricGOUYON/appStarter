import Callout from "../../../components/callout/Callout";
import { CodeBlock } from "../../../components/codeBlock/CodeBlock";
import SortieAttendue from "../../../components/sortieAttendue/SortieAttendue";
import TableauOutils from "../../../components/tableauOutils/TableauOutils";

export default function T_02() {
	return (
		<article className="fiche-content">
			{/* ═══════════════════════════════════════════════════════════
			    Section 1 — Objectif & résultat attendu
			    ═══════════════════════════════════════════════════════════ */}
			<section id="objectif">
				<h2>Section 1 — Objectif &amp; résultat attendu</h2>
				<p>
					Cette fiche configure le frontend React avec un Router, un Layout
					partagé (Header + Footer), une HomePage et une page 404. Elle s'appuie
					sur la structure créée en T-01 : les dépendances{" "}
					<code>react-router@7</code>, <code>react-toastify</code> et{" "}
					<code>@emailjs/browser</code> sont déjà déclarées dans{" "}
					<code>web/package.json</code> et installées.
				</p>

				<p>À la fin de cette fiche :</p>
				<ul>
					<li>
						Le frontend démarre sur <code>http://localhost:5173</code> avec une
						page d'accueil fonctionnelle affichant les modules de formation.
					</li>
					<li>
						Le routing est configuré via <code>createBrowserRouter</code>, avec
						un Layout commun (Header + Footer) et une page 404.
					</li>
					<li>
						Les fichiers générés par le template Vite non nécessaires (
						<code>App.css</code>, <code>index.css</code>, <code>assets/</code>,
						<code>public/favicon.svg</code>, <code>public/icons.svg</code>) sont
						supprimés.
					</li>
					<li>Biome valide le code sans erreur.</li>
				</ul>
				<Callout type="info">
					<p>
						<strong>Prérequis :</strong> T-01 complété — monorepo initialisé,{" "}
						<code>npm install</code> effectué à la racine, Docker démarré.
						<br />
						<strong>Terminal :</strong> Git Bash (MINGW64) depuis la racine du
						projet.
						<br />
						<strong>Temps estimé :</strong> 15 à 20 minutes.
						<br />
						<strong>Module suivant :</strong> T-03 — Backend (Express, routes,
						connexion PostgreSQL).
					</p>
				</Callout>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 2 — Structure finale du module
			    ═══════════════════════════════════════════════════════════ */}
			<section id="structure">
				<h2>Section 2 — Structure finale du module</h2>
				<p>
					Voici l'arborescence complète du dossier <code>web/</code> à la fin de
					cette fiche. Les fichiers <code>.ts</code> et <code>.tsx</code> sont
					créés avec <code>touch</code> puis remplis dans VS Code.
				</p>
				<CodeBlock language="text">
					{`web/
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   └── Header.tsx                  # créé
│   │   ├── footer/
│   │   │   └── Footer.tsx                  # créé
│   │   └── layout/
│   │       └── Layout.tsx                  # créé
│   ├── pages/
│   │   ├── homePage/
│   │   │   ├── HomePage.tsx                # créé
│   │   │   └── HomePage.css                # créé
│   │   └── notFoundPage/
│   │       └── NotFoundPage.tsx            # créé
|	|       └── NotFoundPage.css            # créé
│   ├── App.tsx                             # remplacé
│   ├── main.tsx                            # remplacé
│   ├── router.tsx                          # créé
│   ├── global.css                          # créé
│   └── vite-env.d.ts                       # créé
├── public/                                 # nettoyé
├── index.html                              # remplacé
├── vite.config.ts                          # remplacé
├── tsconfig.json                           # remplacé
└── tsconfig.node.json                      # remplacé`}
				</CodeBlock>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 3 — Étapes
			    ═══════════════════════════════════════════════════════════ */}
			<section id="etapes">
				<h2>Section 3 — Étapes</h2>

				<h3>3.01 — web &gt; Vérifier les dépendances</h3>
				<p>
					Depuis la racine du projet, vérifier que <code>react-router@7</code>{" "}
					est bien présent dans <code>web/package.json</code> :
				</p>
				<CodeBlock language="bash">
					{`cat web/package.json | grep react-router`}
				</CodeBlock>
				<SortieAttendue>{`"react-router": "^7"`}</SortieAttendue>
				<Callout type="warning">
					<p>Si la version est inférieure à 7, mettre à jour :</p>
					<CodeBlock language="bash">
						{`npm install react-router@7 -w web`}
					</CodeBlock>
				</Callout>

				<h3>3.02 — web &gt; Créer la structure de dossiers</h3>
				<p>
					Créer tous les dossiers nécessaires en une seule commande depuis la
					racine :
				</p>
				<CodeBlock language="bash">
					{`mkdir -p web/src/components/header web/src/components/footer web/src/components/layout web/src/pages/homePage web/src/pages/notFoundPage`}
				</CodeBlock>

				<h3>3.03 — web &gt; Créer les fichiers vides avec touch</h3>
				<p>
					Créer tous les fichiers <code>.tsx</code> et <code>.css</code> avec{" "}
					<code>touch</code>. Le contenu sera collé dans VS Code aux étapes
					suivantes.
				</p>
				<Callout type="info">
					<p>
						Les fichiers <code>.ts</code> et <code>.tsx</code> ne sont jamais
						créés via <code>node -e</code>, les emojis et les regex sont
						corrompus en terminal. <code>touch</code> crée le fichier vide, le
						contenu est ensuite collé dans VS Code.
					</p>
				</Callout>
				<CodeBlock language="bash">
					{`touch web/src/components/header/Header.tsx
touch web/src/components/footer/Footer.tsx
touch web/src/components/layout/Layout.tsx
touch web/src/pages/homePage/HomePage.tsx
touch web/src/pages/homePage/HomePage.css
touch web/src/pages/notFoundPage/NotFoundPage.tsx
touch web/src/pages/notFoundPage/NotFoundPage.css
touch web/src/router.tsx
touch web/src/global.css`}
				</CodeBlock>

				<h3>3.04 — web &gt; Remplacer vite.config.ts</h3>
				<p>
					Le <code>vite.config.ts</code> généré par le template est remplacé
					pour charger les variables d'environnement depuis la racine du
					monorepo (un niveau au-dessus de <code>web/</code>) et configurer le
					proxy vers le serveur Express, ainsi que l'alias <code>@</code> pour
					les imports.
				</p>
				<p>
					Ouvrir le fichier <code>web/vite.config.ts</code> et remplacer tout le
					contenu par :
				</p>
				<CodeBlock language="typescript" fileName="web/vite.config.ts">
					{`import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, path.resolve(__dirname, "../"), "");
	const apiPort = env.SERVER_PORT || "3310";
	const webPort = Number(env.WEB_PORT) || 5173;

	return {
		plugins: [react()],
		server: {
			port: webPort,
			proxy: {
				"/api": {
					target: \`http://localhost:\${apiPort}\`,
					changeOrigin: true,
				},
			},
		},
		resolve: {
			alias: { "@": path.resolve(__dirname, "./src") },
		},
	};
});`}
				</CodeBlock>

				<h3>3.05 — web &gt; Remplacer tsconfig.json</h3>
				<p>
					Ouvrir le fichier <code>web/tsconfig.json</code> et remplacer tout le
					contenu par :
				</p>
				<CodeBlock language="json" fileName="web/tsconfig.json">
					{`{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["src"]
}`}
				</CodeBlock>

				<h3>3.06 — web &gt; Remplacer tsconfig.node.json</h3>
				<p>
					Ouvrir le fichier <code>web/tsconfig.node.json</code> et remplacer
					tout le contenu par :
				</p>
				<CodeBlock language="json" fileName="web/tsconfig.node.json">
					{`{
  "compilerOptions": {
    "target": "ES2023",
    "lib": ["ES2022"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "types": ["vite/client"],
    "skipLibCheck": true,
    "noEmit": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}`}
				</CodeBlock>

				<h3>3.07 — web &gt; Remplacer index.html</h3>
				<p>
					Le <code>index.html</code> généré par Vite contient des références au
					logo Vite. Le remplacer par une version propre avec le titre du projet
					:
				</p>
				<p>
					Ouvrir le fichier <code>web/index.html</code> et remplacer tout le
					contenu par :
				</p>
				<CodeBlock language="html" fileName="web/index.html">
					{`<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>appStarter</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`}
				</CodeBlock>

				<h3>3.08 — web &gt; Créer vite-env.d.ts</h3>

				<CodeBlock language="bash">{`touch web/src/vite-env.d.ts`}</CodeBlock>

				<p>
					Ouvrir le fichier <code>web/src/vite-env.d.ts</code> et ajouter le
					contenu suivant :
				</p>
				<CodeBlock language="typescript" fileName="web/src/vite-env.d.ts">
					{`/// <reference types="vite/client" />

declare module "*.png" {
	const value: string;
	export default value;
}
declare module "*.jpg" {
	const value: string;
	export default value;
}
declare module "*.svg" {
	const value: string;
	export default value;
}`}
				</CodeBlock>

				<h3>3.09 — web &gt; Remplir le composant Header.tsx</h3>
				<p>
					Ouvrir le fichier <code>web/src/components/header/Header.tsx</code> et
					coller le contenu suivant :
				</p>
				<CodeBlock
					language="typescript"
					fileName="web/src/components/header/Header.tsx"
				>
					{`import { Link } from "react-router";
import { constants } from "../../../../setup/constants";

function Header() {
	return (
		<header className="header">
			<Link to={constants.ROUTE_HOME} className="header-logo">
				{constants.APP_NAME}
			</Link>
			<nav className="header-nav">
				<Link to={constants.ROUTE_HOME} className="header-nav-link">
					Accueil
				</Link>
			</nav>
		</header>
	);
}

export default Header;`}
				</CodeBlock>

				<h3>3.10 — web &gt; Remplir le composant Footer.tsx</h3>
				<p>
					Ouvrir le fichier <code>web/src/components/footer/Footer.tsx</code> et
					coller le contenu suivant :
				</p>
				<CodeBlock
					language="typescript"
					fileName="web/src/components/footer/Footer.tsx"
				>
					{`import { constants } from "../../../../setup/constants";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="footer">
			<span>{constants.APP_NAME}</span>
			<span>© {year}</span>
		</footer>
	);
}

export default Footer;`}
				</CodeBlock>

				<h3>3.11 — web &gt; Remplir le composant Layout.tsx</h3>
				<p>
					Le Layout est le composant parent commun à toutes les pages. Il
					contient le Header, le Footer et un <code>{"<Outlet />"}</code> qui
					rend la page active selon la route.
				</p>
				<p>
					Ouvrir le fichier <code>web/src/components/layout/Layout.tsx</code> et
					coller le contenu suivant :
				</p>
				<CodeBlock
					language="typescript"
					fileName="web/src/components/layout/Layout.tsx"
				>
					{`import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function Layout() {
	return (
		<div className="app-wrapper">
			<Header />
			<main className="main-content">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default Layout;`}
				</CodeBlock>

				<h3>3.12 — web &gt; Remplir la page HomePage.tsx</h3>
				<p>
					Ouvrir le fichier <code>web/src/pages/homePage/HomePage.tsx</code> et
					coller le contenu suivant. Cette page affiche les 42 modules de
					formation avec la stack technique :
				</p>
				<CodeBlock
					language="typescript"
					fileName="web/src/pages/homePage/HomePage.tsx"
				>
					{`import { Link } from "react-router";
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
								width: \`\${(completedCount / totalCount) * 100}%\`,
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
							className={\`chapter-card chapter-\${chapter.status}\`}
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

export default HomePage;`}
				</CodeBlock>

				<h3>3.13 — web &gt; Remplir le style HomePage.css</h3>
				<p>
					Ouvrir le fichier <code>web/src/pages/homePage/HomePage.css</code> et
					coller le contenu suivant :
				</p>
				<CodeBlock
					language="css"
					fileName="web/src/pages/homePage/HomePage.css"
				>
					{`.home-page {
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	padding: 2rem 1rem;
}

/* Hero Section */
.hero {
	background: linear-gradient(135deg, #006666 0%, #004d4d 100%);
	color: white;
	padding: 4rem 2rem;
	border-radius: 12px;
	margin-bottom: 4rem;
	text-align: center;
}

.hero-title {
	font-size: 3.5rem;
	font-weight: 900;
	margin: 0 0 0.5rem 0;
	letter-spacing: -1px;
}

.hero-subtitle {
	font-size: 1.25rem;
	opacity: 0.9;
	margin: 0 0 2rem 0;
	font-weight: 300;
}

.progress-indicator {
	width: 100%;
	max-width: 300px;
	height: 6px;
	background: rgba(255, 255, 255, 0.2);
	border-radius: 3px;
	margin: 1.5rem auto;
	overflow: hidden;
}

.progress-bar {
	height: 100%;
	background: #4dd9ff;
	border-radius: 3px;
	transition: width 0.3s ease;
}

.progress-text {
	font-size: 0.95rem;
	opacity: 0.8;
	margin: 0;
}

/* Stack Section */
.stack-section {
	margin-bottom: 5rem;
}

.stack-section h2 {
	font-size: 2.5rem;
	margin: 0 0 2rem 0;
	color: #1a1a1a;
}

.stack-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1.5rem;
	margin-bottom: 2rem;
}

.stack-card {
	background: white;
	border: 2px solid #e5f0f0;
	border-radius: 8px;
	padding: 1.5rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	transition: all 0.3s ease;
	cursor: pointer;
}

.stack-card:hover {
	border-color: #006666;
	box-shadow: 0 8px 24px rgba(0, 102, 102, 0.12);
	transform: translateY(-2px);
}

.stack-icon {
	font-size: 2.5rem;
	flex-shrink: 0;
}

.stack-info h3 {
	margin: 0 0 0.25rem 0;
	font-size: 1rem;
	color: #1a1a1a;
}

.stack-info p {
	margin: 0;
	font-size: 0.85rem;
	color: #666;
}

/* Chapters Section */
.chapters-section {
	margin-bottom: 5rem;
}

.chapters-section h2 {
	font-size: 2.5rem;
	margin: 0 0 2rem 0;
	color: #1a1a1a;
}

.chapters-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
	gap: 2rem;
}

.chapter-card {
	background: white;
	border: 2px solid #e5f0f0;
	border-radius: 12px;
	padding: 1.5rem;
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;
}

.chapter-card::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 4px;
	background: #e5f0f0;
}

.chapter-card.chapter-completed {
	border-color: #4caf50;
	background: #f1f8f5;
}

.chapter-card.chapter-completed::before {
	background: #4caf50;
}

.chapter-card.chapter-current {
	border-color: #006666;
	background: #f0f9f9;
	box-shadow: 0 8px 24px rgba(0, 102, 102, 0.1);
}

.chapter-card.chapter-current::before {
	background: #006666;
	animation: pulse 2s infinite;
}

.chapter-card.chapter-upcoming {
	border-color: #ccc;
	opacity: 0.8;
}

@keyframes pulse {
	0%,
	100% {
		opacity: 1;
	}
	50% {
		opacity: 0.5;
	}
}

.chapter-card:hover:not(.chapter-upcoming) {
	transform: translateY(-4px);
	box-shadow: 0 12px 32px rgba(0, 102, 102, 0.15);
}

.chapter-icon {
	font-size: 2.5rem;
	margin-bottom: 0.5rem;
}

.chapter-content h3 {
	margin: 0 0 0.5rem 0;
	font-size: 1.25rem;
	color: #1a1a1a;
}

.chapter-content p {
	margin: 0 0 1rem 0;
	font-size: 0.95rem;
	color: #666;
	line-height: 1.5;
}

.chapter-status {
	display: flex;
	gap: 0.5rem;
}

.badge {
	display: inline-block;
	padding: 0.4rem 0.8rem;
	border-radius: 6px;
	font-size: 0.85rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.badge.completed {
	background: #e8f5e9;
	color: #2e7d32;
}

.badge.current {
	background: #e0f7fa;
	color: #00838f;
}

.badge.upcoming {
	background: #f5f5f5;
	color: #666;
}

/* CTA Section */
.cta-section {
	background: #f4f7f7;
	padding: 3rem 2rem;
	border-radius: 12px;
	text-align: center;
}

.cta-section h2 {
	font-size: 2.2rem;
	margin: 0 0 0.5rem 0;
	color: #1a1a1a;
}

.cta-section > p {
	font-size: 1.1rem;
	color: #666;
	margin: 0 0 2rem 0;
}

.cta-buttons {
	display: flex;
	gap: 1rem;
	justify-content: center;
	flex-wrap: wrap;
}

.btn {
	padding: 0.9rem 2rem;
	border-radius: 8px;
	font-size: 1rem;
	font-weight: 600;
	text-decoration: none;
	transition: all 0.3s ease;
	border: none;
	cursor: pointer;
	display: inline-block;
}

.btn-primary {
	background: linear-gradient(135deg, #006666 0%, #004d4d 100%);
	color: white;
}

.btn-primary:hover {
	box-shadow: 0 8px 20px rgba(0, 102, 102, 0.3);
	transform: translateY(-2px);
}

.btn-secondary {
	background: white;
	color: #006666;
	border: 2px solid #006666;
}

.btn-secondary:hover {
	background: #f9fffe;
	transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 768px) {
	.home-page {
		padding: 1rem;
	}

	.hero {
		padding: 2rem 1.5rem;
		margin-bottom: 3rem;
	}

	.hero-title {
		font-size: 2.5rem;
	}

	.hero-subtitle {
		font-size: 1rem;
	}

	.stack-section h2,
	.chapters-section h2,
	.cta-section h2 {
		font-size: 2rem;
	}

	.chapters-grid {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	.stack-grid {
		grid-template-columns: repeat(2, 1fr);
	}

	.cta-buttons {
		flex-direction: column;
	}

	.btn {
		width: 100%;
	}
}

@media (max-width: 480px) {
	.hero-title {
		font-size: 2rem;
	}

	.stack-grid {
		grid-template-columns: 1fr;
	}

	.chapter-icon {
		font-size: 2rem;
	}

	.chapter-content h3 {
		font-size: 1.1rem;
	}
}
`}
				</CodeBlock>

				<h3>3.14 — web &gt; Remplir la page NotFoundPage.tsx</h3>
				<p>
					Ouvrir le fichier{" "}
					<code>web/src/pages/notFoundPage/NotFoundPage.tsx</code> et coller le
					contenu suivant :
				</p>
				<CodeBlock
					language="typescript"
					fileName="web/src/pages/notFoundPage/NotFoundPage.tsx"
				>
					{`import "./NotFoundPage.css";
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

export default NotFoundPage;`}
				</CodeBlock>
				<h3>3.15 — web &gt; Remplir le style NotFoundPage.css</h3>
				<p>
					Ouvrir le fichier{" "}
					<code>web/src/pages/notFoundPage/NotFoundPage.css</code> et coller le
					contenu suivant :
				</p>
				<CodeBlock
					language="css"
					fileName="web/src/pages/notFoundPage/NotFoundPage.css"
				>
					{`.not-found-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 60vh;
	text-align: center;
	gap: 2rem;
	padding: 2rem;
	position: relative;
	overflow: hidden;
}

/* Background decoration */
.not-found-page::before {
	content: "";
	position: absolute;
	top: -50%;
	right: -10%;
	width: 500px;
	height: 500px;
	background: radial-gradient(
		circle,
		rgba(0, 102, 102, 0.1) 0%,
		transparent 70%
	);
	border-radius: 50%;
	pointer-events: none;
	z-index: 0;
}

.not-found-page::after {
	content: "";
	position: absolute;
	bottom: -30%;
	left: -10%;
	width: 400px;
	height: 400px;
	background: radial-gradient(
		circle,
		rgba(0, 102, 102, 0.08) 0%,
		transparent 70%
	);
	border-radius: 50%;
	pointer-events: none;
	z-index: 0;
}

/* Content wrapper */
.not-found-page > * {
	position: relative;
	z-index: 1;
}

/* 404 Title */
.not-found-page h1 {
	font-size: 8rem;
	font-weight: 900;
	margin: 0;
	background: linear-gradient(135deg, #006666 0%, #004d4d 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	letter-spacing: -3px;
	animation: slideDown 0.6s ease-out;
}

/* Description text */
.not-found-page p {
	font-size: 1.5rem;
	color: #666;
	margin: 0;
	font-weight: 300;
	animation: fadeIn 0.8s ease-out 0.2s both;
}

/* Button styling */
.not-found-page button {
	padding: 1rem 2.5rem;
	border-radius: 8px;
	font-size: 1.1rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 1px;
	background: linear-gradient(135deg, #006666 0%, #004d4d 100%);
	color: white;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;
	box-shadow: 0 8px 24px rgba(0, 102, 102, 0.2);
	animation: slideUp 0.6s ease-out 0.4s both;
	position: relative;
	overflow: hidden;
}

.not-found-page button::before {
	content: "";
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.2);
	transition: left 0.3s ease;
}

.not-found-page button:hover {
	transform: translateY(-3px);
	box-shadow: 0 12px 32px rgba(0, 102, 102, 0.3);
}

.not-found-page button:hover::before {
	left: 100%;
}

.not-found-page button:active {
	transform: translateY(-1px);
}

/* Animations */
@keyframes slideDown {
	from {
		opacity: 0;
		transform: translateY(-30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes slideUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* Responsive design */
@media (max-width: 768px) {
	.not-found-page {
		min-height: 70vh;
		gap: 1.5rem;
		padding: 1.5rem;
	}

	.not-found-page h1 {
		font-size: 5rem;
		letter-spacing: -2px;
	}

	.not-found-page p {
		font-size: 1.2rem;
	}

	.not-found-page button {
		padding: 0.9rem 2rem;
		font-size: 1rem;
	}

	.not-found-page::before {
		width: 300px;
		height: 300px;
		top: -30%;
		right: -20%;
	}

	.not-found-page::after {
		width: 250px;
		height: 250px;
		bottom: -20%;
		left: -15%;
	}
}

@media (max-width: 480px) {
	.not-found-page {
		min-height: 80vh;
		gap: 1rem;
		padding: 1rem;
	}

	.not-found-page h1 {
		font-size: 3.5rem;
		letter-spacing: -1px;
	}

	.not-found-page p {
		font-size: 1rem;
	}

	.not-found-page button {
		padding: 0.8rem 1.8rem;
		font-size: 0.95rem;
		width: 100%;
	}

	.not-found-page::before {
		width: 200px;
		height: 200px;
		top: -20%;
		right: -30%;
	}

	.not-found-page::after {
		width: 150px;
		height: 150px;
		bottom: -10%;
		left: -20%;
	}
}

/* Dark mode support (optionnel) */
@media (prefers-color-scheme: dark) {
	.not-found-page p {
		color: #999;
	}

	.not-found-page::before,
	.not-found-page::after {
		background: radial-gradient(
			circle,
			rgba(77, 217, 255, 0.05) 0%,
			transparent 70%
		);
	}
}
`}
				</CodeBlock>

				<h3>3.16 — web &gt; Remplir router.tsx</h3>
				<p>
					Ouvrir le fichier <code>web/src/router.tsx</code> et coller le contenu
					suivant :
				</p>
				<CodeBlock language="typescript" fileName="web/src/router.tsx">
					{`import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [{ index: true, element: <HomePage /> }],
	},
	{ path: "*", element: <NotFoundPage /> },
]);

export default router;`}
				</CodeBlock>

				<h3>3.17 — web &gt; Remplacer App.tsx</h3>
				<p>
					Ouvrir le fichier <code>web/src/App.tsx</code> et remplacer tout le
					contenu par :
				</p>
				<CodeBlock language="typescript" fileName="web/src/App.tsx">
					{`import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { constants } from "../../setup/constants";
import router from "./router";

function App() {
	useEffect(() => {
		document.title = constants.APP_NAME;
	}, []);

	return <RouterProvider router={router} />;
}

export default App;`}
				</CodeBlock>

				<h3>3.18 — web &gt; Remplacer main.tsx</h3>
				<p>
					Ouvrir le fichier <code>web/src/main.tsx</code> et remplacer tout le
					contenu par :
				</p>
				<CodeBlock language="typescript" fileName="web/src/main.tsx">
					{`import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);`}
				</CodeBlock>

				<h3>3.19 — web &gt; Remplir global.css</h3>
				<p>
					Ouvrir le fichier <code>web/src/global.css</code> et coller le contenu
					suivant :
				</p>
				<CodeBlock language="css" fileName="web/src/global.css">
					{`:root {
	--primary-color: #006666;
	--primary-dark: #004d4d;
	--bg-color: #f4f7f7;
	--text-color: #1a1a1a;
	--white: #ffffff;
	--max-width: 1200px;
	--spacing-sm: 1rem;
	--spacing-md: 2rem;
}

html,
body,
#root {
	height: 100%;
	width: 100%;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: system-ui, sans-serif;
	background: var(--bg-color);
	color: var(--text-color);
}

.app-wrapper {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.header {
	background: linear-gradient(
		135deg,
		var(--primary-color) 0%,
		var(--primary-dark) 100%
	);
	color: var(--white);
	padding: var(--spacing-sm) var(--spacing-md);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.header-logo {
	color: var(--white);
	text-decoration: none;
	font-weight: bold;
}

.header-nav {
	display: flex;
	gap: var(--spacing-sm);
}

.header-nav-link {
	color: var(--white);
	text-decoration: none;
}

.header-nav-link:hover {
	border-bottom: 2px solid var(--white);
}

.main-content {
	flex: 1;
	padding: var(--spacing-md);
	max-width: var(--max-width);
	margin: 0 auto;
	width: 100%;
}

.footer {
	background: var(--primary-dark);
	color: var(--white);
	padding: var(--spacing-sm);
	text-align: center;
	display: flex;
	justify-content: center;
	gap: var(--spacing-sm);
}

.not-found-page {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 50vh;
	text-align: center;
	gap: var(--spacing-sm);
}`}
				</CodeBlock>
				<Callout type="info">
					<p>
						Les règles <code>html, body, #root</code> garantissent que l'élément
						root occupe toute la hauteur du viewport, ce qui est essentiel pour
						que le layout flexbox fonctionne correctement.
					</p>
				</Callout>

				<h3>3.20 — web &gt; Nettoyer les fichiers du template Vite</h3>
				<p>
					Le template Vite génère des fichiers inutiles. Les supprimer depuis la
					racine du projet :
				</p>
				<CodeBlock language="bash">
					{`rm -rf web/src/App.css web/src/index.css
rm -rf web/src/assets/hero.png web/src/assets/react.svg web/src/assets/vite.svg web/public/vite.svg web/public/favicon.svg web/public/icons.svg`}
				</CodeBlock>

				<h3>3.21 — racine &gt; Vérifier avec Biome et lancer le frontend</h3>
				<p>
					Depuis la racine, corriger les éventuels problèmes de format et
					vérifier qu'aucune erreur ne subsiste :
				</p>
				<CodeBlock language="bash">{`npm run fix && npm run lint`}</CodeBlock>
				<SortieAttendue>
					{`Checked 30 file(s) in 70ms
Found 0 error(s), 0 warning(s)`}
				</SortieAttendue>
				<Callout type="warning">
					<p>
						Si Biome signale des erreurs, les corriger avant de continuer. La
						plupart sont des erreurs de format résolues automatiquement par{" "}
						<code>npm run fix</code>.
					</p>
				</Callout>
				<p>Lancer le frontend :</p>
				<CodeBlock language="bash">{`npm run dev:web`}</CodeBlock>
				<SortieAttendue>
					{`  VITE v6.x.x  ready in Xms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help`}
				</SortieAttendue>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 4 — Test de validation
			    ═══════════════════════════════════════════════════════════ */}
			<section id="validation">
				<h2>Section 4 — Test de validation</h2>

				<p>
					<strong>Vérification visuelle dans le navigateur :</strong>
				</p>
				<ul>
					<li>
						Ouvrir <code>http://localhost:5173</code> — la page affiche le
						Header, un hero section avec progression, la stack technique, les 42
						modules de formation organisés en cartes, et un appel à l'action.
					</li>
					<li>
						Naviguer vers <code>http://localhost:5173/inexistant</code>, la page
						404 s'affiche avec le bouton retour.
					</li>
					<li>
						Le titre de l'onglet du navigateur correspond à{" "}
						<code>constants.APP_NAME</code> (ex. <code>appStarter</code>).
					</li>
					<li>
						Les cartes des modules sont responsives et s'adaptent à la taille de
						l'écran.
					</li>
				</ul>

				<p>
					<strong>Vérification dans VS Code :</strong>
				</p>
				<ul>
					<li>
						Vérifier que <code>web/src/App.css</code>,{" "}
						<code>web/src/index.css</code>, <code>web/src/assets/</code>,{" "}
						<code>web/public/vite.svg</code>,{" "}
						<code>web/public/favicon.svg</code>, et{" "}
						<code>web/public/icons.svg</code> n'existent plus.
					</li>
					<li>
						Ouvrir <code>web/src/App.tsx</code>, aucune ligne rouge TypeScript.
					</li>
					<li>
						Ouvrir <code>web/src/components/header/Header.tsx</code>, tous les
						imports sont résolus correctement.
					</li>
				</ul>

				<p>
					<strong>Test structure du projet :</strong>
				</p>
				<CodeBlock language="bash">
					{`find web/src -name "*.tsx" | sort`}
				</CodeBlock>
				<SortieAttendue>
					{`web/src/App.tsx
web/src/components/footer/Footer.tsx
web/src/components/header/Header.tsx
web/src/components/layout/Layout.tsx
web/src/pages/homePage/HomePage.tsx
web/src/pages/notFoundPage/NotFoundPage.tsx
web/src/router.tsx`}
				</SortieAttendue>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 5 — Cheat sheet
			    ═══════════════════════════════════════════════════════════ */}
			<section id="cheatsheet">
				<h2>Section 5 — Cheat sheet</h2>

				<CodeBlock language="bash">
					{`# Lancer uniquement le frontend
npm run dev:web

# Vérifier le code avec Biome
npm run lint

# Corriger les erreurs lint et formater
npm run fix

# Ajouter une nouvelle page
mkdir -p web/src/pages/maPage
touch web/src/pages/maPage/MaPage.tsx
# Puis ajouter la route dans web/src/router.tsx`}
				</CodeBlock>

				<h3>Outils configurés</h3>
				<TableauOutils
					outils={[
						{
							nom: "react-router@7",
							version: "7+",
							installation: "npm install react-router@7",
						},
						{
							nom: "react-toastify",
							version: "latest",
							installation: "npm install react-toastify",
						},
						{
							nom: "@emailjs/browser",
							version: "latest",
							installation: "npm install @emailjs/browser",
						},
					]}
				/>

				<h3>Points clés à retenir</h3>
				<ul>
					<li>
						<strong>React Router 7</strong> — Utilisé directement depuis le
						package
						<code>react-router</code>, pas <code>react-router-dom</code>.
					</li>
					<li>
						<strong>
							Alias <code>@</code>
						</strong>
						, configuré dans <code>vite.config.ts</code> et{" "}
						<code>tsconfig.json</code>.
					</li>
					<li>
						<strong>
							Layout et <code>{"<Outlet />"}</code>
						</strong>
						, toutes les pages enfants sont rendues dans le{" "}
						<code>{"<Outlet />"}</code> du Layout.
					</li>
					<li>
						<strong>HomePage complète</strong>, affiche 42 modules avec statuts
						(complété/en cours/à venir) et la stack technique.
					</li>
					<li>
						<strong>CSS Variables</strong>, utilisées dans{" "}
						<code>global.css</code> pour la cohérence des couleurs et
						espacements.
					</li>
				</ul>

				<p>
					<strong>Module suivant :</strong> T-03 — Backend : Express, routes
					API, connexion PostgreSQL.
				</p>
			</section>
		</article>
	);
}
