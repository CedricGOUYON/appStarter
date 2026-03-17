import Callout from "../../../components/callout/Callout";
import { CodeBlock } from "../../../components/codeBlock/CodeBlock";
import SortieAttendue from "../../../components/sortieAttendue/SortieAttendue";
import TableauOutils from "../../../components/tableauOutils/TableauOutils";

export default function T_03() {
	return (
		<article className="fiche-content">
			{/* ═══════════════════════════════════════════════════════════
			    Section 1 — Objectif & résultat attendu
			    ═══════════════════════════════════════════════════════════ */}
			<section id="objectif">
				<h2>Section 1 — Objectif &amp; résultat attendu</h2>
				<p>
					Cette fiche configure le backend Express avec TypeScript et les
					variables d'environnement. Tu créeras le serveur avec une route de
					santé pour vérifier que tout fonctionne correctement.
				</p>

				<p>À la fin de cette fiche :</p>
				<ul>
					<li>
						Le backend démarre sur <code>http://localhost:3310</code> avec{" "}
						<code>tsx watch</code> pour le hot reload.
					</li>
					<li>
						La route <code>/api/health</code> répond avec un statut de santé du
						serveur.
					</li>
					<li>
						CORS est configuré pour accepter les requêtes depuis le frontend sur{" "}
						<code>http://localhost:5173</code>.
					</li>
					<li>Biome valide le code sans erreur.</li>
				</ul>

				<Callout type="info">
					<p>
						<strong>Prérequis :</strong> T-01 et T-02 complétés — monorepo
						initialisé, npm install effectué, Docker démarré.
						<br />
						<strong>Terminal :</strong> Git Bash (MINGW64) depuis la racine du
						projet.
						<br />
						<strong>Temps estimé :</strong> 20 à 30 minutes.
						<br />
						<strong>Module suivant :</strong> T-04 — Base de données
						(PostgreSQL, migrations, schema).
					</p>
				</Callout>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 2 — Structure finale du module
			    ═══════════════════════════════════════════════════════════ */}
			<section id="structure">
				<h2>Section 2 — Structure finale du module</h2>
				<p>
					Voici l'arborescence complète du dossier <code>server/</code> à la fin
					de cette fiche. Les fichiers <code>.ts</code> sont créés avec{" "}
					<code>touch</code> puis remplis dans VS Code.
				</p>
				<CodeBlock language="text">
					{`server/
├── src/
│   ├── routes/
│   │   └── health.router.ts              # créé
│   └── index.ts                          # créé
├── database/
│   └── script/
│       └── schema.sql
├── .env
├── package.json                          # mis à jour
└── tsconfig.json                         # mis à jour`}
				</CodeBlock>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 3 — Étapes
			    ═══════════════════════════════════════════════════════════ */}
			<section id="etapes">
				<h2>Section 3 — Étapes</h2>

				<h3>3.01 — server &gt; Vérifier les dépendances</h3>
				<p>
					Les dépendances du serveur ont déjà été déclarées dans{" "}
					<code>server/package.json</code> lors de T-01. Vérifier qu'elles sont
					installées depuis la racine :
				</p>
				<CodeBlock language="bash">{`npm list -w server | head -20`}</CodeBlock>
				<SortieAttendue>
					{`server@ /home/user/appStarter/server
├── bcrypt@latest
├── cookie-parser@latest
├── cors@latest
├── dotenv@latest
├── express@latest
├── jsonwebtoken@latest
├── multer@latest
├── pg@latest
└── cloudinary@latest`}
				</SortieAttendue>
				<Callout type="info">
					<p>
						Si une dépendance manque, la commande <code>npm install</code> à la
						racine l'installera. Ne relancer que si des lignes rouges
						apparaissent dans VS Code.
					</p>
				</Callout>

				<h3>3.02 — server &gt; Créer les dossiers et fichiers avec touch</h3>
				<p>
					Créer la structure des dossiers et les fichiers vides. Les fichiers{" "}
					<code>.ts</code> sont créés avec <code>touch</code> et remplis dans VS
					Code après.
				</p>
				<CodeBlock language="bash">
					{`mkdir -p server/src/routes
touch server/src/index.ts
touch server/src/routes/health.router.ts`}
				</CodeBlock>

				<h3>3.03 — server &gt; Mettre à jour package.json</h3>
				<p>
					Le <code>package.json</code> du serveur doit passer en modules ES et
					avoir les scripts nécessaires. Exécute ces commandes depuis la racine
					:
				</p>
				<CodeBlock language="bash">
					{`npm pkg set -w server type="module"
npm pkg set -w server private=true
npm pkg set -w server scripts.dev="tsx watch src/index.ts"
npm pkg set -w server scripts.start="node dist/index.js"
npm pkg set -w server scripts.build="tsc"
npm pkg delete -w server scripts.test
npm pkg delete -w server description
npm pkg delete -w server main
npm pkg delete -w server keywords
npm pkg delete -w server author
npm pkg delete -w server license`}
				</CodeBlock>

				<Callout type="info">
					<p>
						Ces commandes passent le serveur en ES modules (
						<code>"type": "module"</code>), ajoutent les scripts{" "}
						<code>dev</code>, <code>start</code> et <code>build</code>, et
						nettoient les champs inutiles du <code>package.json</code>.
					</p>
				</Callout>

				<h3>3.04 — server &gt; Mettre à jour tsconfig.json</h3>
				<p>
					Le serveur nécessite sa propre configuration TypeScript, optimisée
					pour Node.js avec support des ES modules.
				</p>
				<p>
					Ouvrir le fichier <code>server/tsconfig.json</code> et coller le
					contenu suivant :
				</p>
				<CodeBlock language="json" fileName="server/tsconfig.json">
					{`{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "types": ["node"]
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}`}
				</CodeBlock>

				<h3>
					3.05 — server &gt; src &gt; routes &gt; Remplir health.router.ts
				</h3>
				<p>
					La route de santé est un endpoint simple qui vérifie que le serveur
					est actif. Elle est utile pour les vérifications de disponibilité en
					production et pour tester la connexion frontend-backend en
					développement.
				</p>
				<p>
					Ouvrir le fichier <code>server/src/routes/health.router.ts</code> et
					coller le contenu suivant :
				</p>
				<CodeBlock
					language="typescript"
					fileName="server/src/routes/health.router.ts"
				>
					{`import { Router } from "express";
import type { Request, Response } from "express";

const healthRouter = Router();

healthRouter.get("/", (_req: Request, res: Response) => {
	res.json({
		status: "ok",
		message: "Server is running",
		timestamp: new Date().toISOString(),
	});
});

export default healthRouter;`}
				</CodeBlock>

				<Callout type="info">
					<p>
						Le underscore <code>_req</code> indique au linter que le paramètre
						est intentionnellement inutilisé, il supprime les avertissements
						TypeScript. C'est une bonne pratique.
					</p>
				</Callout>

				<h3>3.06 — server &gt; src &gt; Remplir index.ts</h3>
				<p>
					C'est le point d'entrée du serveur. Il charge les variables
					d'environnement, configure Express, CORS, et monte les routes. À
					chaque modification, <code>tsx watch</code> redémarre automatiquement
					le serveur.
				</p>
				<p>
					Ouvrir le fichier <code>server/src/index.ts</code> et coller le
					contenu suivant :
				</p>
				<CodeBlock language="typescript" fileName="server/src/index.ts">
					{`import cors from "cors";
import "dotenv/config";
import express from "express";
import healthRouter from "./routes/health.router.js";

const app = express();
const PORT = process.env.PORT || 3310;
const NODE_ENV = process.env.NODE_ENV || "development";
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

// ── Middlewares ───────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: CLIENT_URL,
		credentials: true,
	}),
);

// ── Routes ────────────────────────────────────────────
app.use("/api/health", healthRouter);

// ── Démarrage ─────────────────────────────────────────
app.listen(PORT, () => {
	console.log("\\n=========================================");
	console.log("🔵 SERVER BACKEND");
	console.log("=========================================");
	console.log(\`🔵 NODE_ENV : \${NODE_ENV}\`);
	console.log(\`🟢 Serveur démarré sur : http://localhost:\${PORT}\`);
	console.log("=========================================\\n");
});

export default app;`}
				</CodeBlock>

				<Callout type="warning">
					<p>
						L'import <code>dotenv/config</code> doit être en première ligne. Il
						charge automatiquement <code>server/.env</code> au démarrage, avant
						que les autres modules ne lisent les variables d'environnement.
					</p>
				</Callout>

				<h3>3.07 — racine &gt; Mettre à jour tsconfig.json</h3>
				<p>
					Maintenant que <code>server/tsconfig.json</code> existe, ajouter la
					référence au serveur dans le tsconfig racine.
				</p>
				<p>
					Ouvrir le fichier <code>tsconfig.json</code> à la racine et remplacer
					tout le contenu par :
				</p>
				<CodeBlock language="json" fileName="tsconfig.json">
					{`{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "types": ["node"]
  },
  "include": ["setup/**/*", "server/src/**/*.ts"]
}`}
				</CodeBlock>

				<Callout type="info">
					<p>
						La référence <code>web/</code> sera ajoutée quand le frontend
						nécessitera le tsconfig racine. Pour l'instant, on inclut uniquement
						les scripts <code>setup/</code> et le code <code>server/</code>.
					</p>
				</Callout>

				<h3>3.08 — racine &gt; Vérifier avec Biome</h3>
				<p>
					Avant de lancer le serveur, s'assurer que le code est correct selon
					Biome :
				</p>
				<CodeBlock language="bash">{`npm run lint`}</CodeBlock>
				<SortieAttendue>
					{`Checked 31 file(s) in 27ms
Found 0 error(s), 0 warning(s)`}
				</SortieAttendue>

				<Callout type="warning">
					<p>
						Si Biome signale des erreurs, les corriger avec{" "}
						<code>npm run fix</code> avant de continuer.
					</p>
				</Callout>

				<h3>3.09 — racine &gt; Lancer le backend</h3>
				<p>
					Depuis la racine du projet, démarrer le serveur avec{" "}
					<code>npm run dev:server</code> :
				</p>
				<CodeBlock language="bash">{`npm run dev:server`}</CodeBlock>
				<SortieAttendue>
					{`=========================================
🔵 SERVER BACKEND
=========================================
🔵 NODE_ENV : development
🟢 Serveur démarré sur : http://localhost:3310
=========================================`}
				</SortieAttendue>

				<Callout type="warning">
					<p>
						Si le port 3310 est déjà utilisé, modifier <code>PORT</code> dans{" "}
						<code>server/.env</code> et relancer. Le terminal affichera le
						nouveau port.
					</p>
				</Callout>

				<h3>3.10 — racine &gt; Tester la route /api/health</h3>
				<p>
					Depuis un autre terminal (ou directement dans le navigateur), tester
					que la route répond correctement :
				</p>
				<CodeBlock language="bash">
					{`curl http://localhost:3310/api/health`}
				</CodeBlock>
				<SortieAttendue>
					{`{"status":"ok","message":"Server is running","timestamp":"2025-03-17T10:42:35.127Z"}`}
				</SortieAttendue>

				<Callout type="info">
					<p>
						Ou plus simplement : ouvrir{" "}
						<strong>http://localhost:3310/api/health</strong> dans le
						navigateur. Le JSON s'affichera directement.
					</p>
				</Callout>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 4 — Test de validation
			    ═══════════════════════════════════════════════════════════ */}
			<section id="validation">
				<h2>Section 4 — Test de validation</h2>

				<p>
					<strong>Vérification visuelle dans le terminal :</strong>
				</p>
				<ul>
					<li>
						Le terminal affiche{" "}
						<strong>"🟢 Serveur démarré sur : http://localhost:3310"</strong>.
					</li>
					<li>
						Aucune erreur TypeScript ou JavaScript dans le terminal après le
						démarrage.
					</li>
				</ul>

				<p>
					<strong>Vérification dans le navigateur :</strong>
				</p>
				<ul>
					<li>
						Ouvrir <strong>http://localhost:3310/api/health</strong>, un JSON
						valide s'affiche : <code>{`{ "status": "ok", ... }`}</code>
					</li>
					<li>
						Rafraîchir la page plusieurs fois — le timestamp change à chaque
						requête.
					</li>
				</ul>

				<p>
					<strong>Test hot reload :</strong>
				</p>
				<ul>
					<li>
						Modifier le message dans{" "}
						<code>server/src/routes/health.router.ts</code>, par exemple
						remplacer "Server is running" par "Server is alive".
					</li>
					<li>
						Le serveur doit redémarrer automatiquement — le terminal affichera à
						nouveau le message de démarrage.
					</li>
					<li>
						Rafraîchir le navigateur, le message mis à jour s'affiche sans
						relancer manuellement.
					</li>
				</ul>

				<p>
					<strong>Vérification dans VS Code :</strong>
				</p>
				<ul>
					<li>
						Ouvrir <code>server/src/index.ts</code>, aucune ligne rouge
						TypeScript.
					</li>
					<li>
						Tous les imports sont résolus correctement (pas de mot souligné en
						rouge).
					</li>
				</ul>

				<Callout type="info">
					<p>
						Si tu as déjà complété T-02, lancer <code>npm run dev</code> depuis
						la racine pour démarrer frontend ET backend en parallèle. Les deux
						serveurs tournent dans le même terminal grâce à{" "}
						<code>concurrently</code>.
					</p>
				</Callout>

				<Callout type="error">
					<p>
						Si tu vois <strong>"EADDRINUSE: address already in use"</strong>,
						c'est que le port 3310 est déjà occupé. Modifier{" "}
						<code>PORT=3310</code> par <code>PORT=3311</code> dans{" "}
						<code>server/.env</code> et relancer.
					</p>
				</Callout>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 5 — Cheat sheet
			    ═══════════════════════════════════════════════════════════ */}
			<section id="cheatsheet">
				<h2>Section 5 — Cheat sheet</h2>

				<CodeBlock language="bash">
					{`# Lancer uniquement le backend
npm run dev:server

# Lancer frontend + backend ensemble (après T-02)
npm run dev

# Tester la route health depuis le terminal
curl http://localhost:3310/api/health

# Vérifier le code avec Biome
npm run lint

# Corriger les erreurs lint et formater
npm run fix

# Builder le backend pour la production
npm run build -w server`}
				</CodeBlock>

				<h3>Outils configurés</h3>
				<TableauOutils
					outils={[
						{
							nom: "Express",
							version: "5.x",
							installation: "npm install express -w server",
						},
						{
							nom: "dotenv",
							version: "latest",
							installation: "npm install dotenv -w server",
						},
						{
							nom: "cors",
							version: "latest",
							installation: "npm install cors -w server",
						},
						{
							nom: "tsx",
							version: "latest",
							installation: "npm install -D tsx -w server",
						},
						{
							nom: "TypeScript",
							version: "latest",
							installation: "npm install -D typescript -w server",
						},
					]}
				/>

				<h3>Points clés à retenir</h3>
				<ul>
					<li>
						<strong>tsx watch</strong> — Redémarre le serveur automatiquement à
						chaque modification, pas besoin de relancer manuellement. C'est
						l'équivalent du hot reload de Vite côté frontend.
					</li>
					<li>
						<strong>dotenv/config</strong> — Doit être importé en première ligne
						de <code>index.ts</code>. Il charge <code>server/.env</code>{" "}
						automatiquement au démarrage, avant que les autres modules ne lisent
						les variables.
					</li>
					<li>
						<strong>CORS</strong> — Configuré pour autoriser uniquement les
						requêtes depuis <code>CLIENT_URL</code> (défini dans{" "}
						<code>.env</code>). En développement, c'est{" "}
						<code>http://localhost:5173</code> (Vite), en production ce sera
						l'URL du frontend déployé.
					</li>
					<li>
						<strong>Module structure</strong> — Chaque route est un fichier
						<code>.ts</code> dans <code>server/src/routes/</code> et importée
						dans <code>index.ts</code>. Ce pattern s'appelle "modular routing"
						et facilite la maintenance.
					</li>
					<li>
						<strong>PORT vs PGPORT</strong> — <code>PORT</code> est pour
						Express, <code>PGPORT</code> est pour PostgreSQL. Ne pas les
						confondre.
					</li>
					<li>
						<code>.env</code> — À jour depuis T-01. Ne pas commiter sur GitHub,
						il est dans <code>.gitignore</code>.
					</li>
				</ul>

				<p>
					<strong>Module suivant :</strong> T-04 — Base de données (PostgreSQL,
					migrations, schema SQL).
				</p>
			</section>
		</article>
	);
}
