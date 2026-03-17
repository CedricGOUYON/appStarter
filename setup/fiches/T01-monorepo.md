import Callout from "../../../components/callout/Callout";
import { CodeBlock } from "../../../components/codeBlock/CodeBlock";
import SortieAttendue from "../../../components/sortieAttendue/SortieAttendue";
import TableauOutils from "../../../components/tableauOutils/TableauOutils";

export default function T_01() {
	return (
		<article className="fiche-content">
			{/* ═══════════════════════════════════════════════════════════
			    Section 1 — Objectif & résultat attendu
			    ═══════════════════════════════════════════════════════════ */}
			<section id="objectif">
				<h2>Section 1 — Objectif &amp; résultat attendu</h2>
				<p>
					Cette fiche crée de zéro la structure complète du monorepo{" "}
					<strong>appStarter</strong>. Un monorepo est un seul dossier de projet
					qui contient à la fois le frontend (<code>web/</code>), le backend (
					<code>server/</code>), l'application mobile (<code>mobile/</code>) et
					les outils de configuration (<code>setup/</code>). Tout vit au même
					endroit, dans un seul dépôt GitHub.
				</p>

				<p>À la fin de cette fiche :</p>
				<ul>
					<li>
						La structure <code>web/</code>, <code>server/</code>,{" "}
						<code>mobile/</code> et <code>setup/</code> est en place et
						cohérente.
					</li>
					<li>
						Toutes les dépendances npm sont installées, aucun{" "}
						<code>npm install</code> supplémentaire n'est nécessaire avant T-02.
					</li>
					<li>
						Les fichiers de configuration (Docker, Biome, TypeScript, variables
						d'environnement) sont présents et prêts.
					</li>
				</ul>
				<Callout type="info">
					<p>
						<strong>Prérequis :</strong> Node.js 20+, npm 10+, VS Code, Docker
						Desktop (utilisé uniquement pour le test de validation en fin de
						fiche).
						<br />
						<strong>Terminal :</strong> Git Bash (MINGW64) sur Windows
						<br />
						<strong>Temps estimé :</strong> 20 à 30 minutes.
						<br />
						<strong>Module suivant :</strong> T-02 — Frontend (HomePage, Router,
						Layout).
					</p>
				</Callout>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 2 — Structure finale du module
			    ═══════════════════════════════════════════════════════════ */}
			<section id="structure">
				<h2>Section 2 — Structure finale du module</h2>
				<p>
					Voici l'arborescence complète qui sera créée à la fin de cette fiche.
					Les fichiers JSON et <code>.env</code> sont créés via{" "}
					<code>node -e</code> dans le terminal. Les fichiers <code>.ts</code>{" "}
					sont créés avec <code>touch</code> puis remplis dans VS Code.
				</p>
				<CodeBlock language="text">
					{`appStarter/
├── web/                                    # créé — React + Vite + TypeScript
│   ├── src/
│   │   └── main.tsx                        # créé par le template Vite
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── .env                                # créé
├── mobile/                                 # créé — structure vide (Expo plus tard)
│   ├── app/
│   ├── components/
│   ├── constants/
│   └── package.json
├── server/                                 # créé — Express + TypeScript
│   ├── src/
│   │   └── index.ts                        # créé
│   ├── database/
│   │   └── script/
│   │       └── schema.sql                  # créé
│   ├── package.json
│   ├── tsconfig.json
│   └── .env                                # créé
├── setup/
│   ├── constants.ts                        # créé
│   ├── update-package-name.ts              # créé
│   └── exports_writings/
│       ├── export_writings_all.ts          # créé
│       ├── export_writings_noCommit.ts     # créé
│       └── export_writings_gitDiff.ts      # créé
├── .vscode/
│   └── settings.json                       # créé
├── docker-compose.yml                      # créé
├── .env                                    # créé
├── .gitignore                              # créé
├── tsconfig.json                           # créé
├── package.json                            # créé
└── biome.json                              # créé`}
				</CodeBlock>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 3 — Étapes
			    ═══════════════════════════════════════════════════════════ */}
			<section id="etapes">
				<h2>Section 3 — Étapes</h2>
				<Callout type="warning">
					<p>
						<strong>⚠️ Avant de commencer :</strong> À partir de l'étape 3.02,
						des dépendances seront ajoutées aux <code>package.json</code> sans
						être installées immédiatement. Cela créera des fichiers rouges dans
						VS Code comme <code>tsconfig.json</code> racine,{" "}
						<code>setup/*.ts</code>,etc.
					</p>
					<p>
						<strong>C'est normal et attendu !</strong> À l'étape 3.19, un seul
						<code>npm install</code> à la racine installera TOUTES les
						dépendances et TOUS les problèmes disparaîtront d'un coup. Ne pas
						s'inquiéter des erreurs rouges avant cette étape.
					</p>
				</Callout>
				<h3>3.01 — racine &gt; Ouvrir Git Bash et créer le dossier projet</h3>

				<Callout type="warning">
					<p>
						Le nom du dossier racine devient automatiquement le nom de la base
						de données PostgreSQL et le nom de l'application dans{" "}
						<code>setup/constants.ts</code>, il peut ensuite être référencé
						partout dans le projet via <code>constants.APP_NAME</code>. Choisir
						un nom sans espaces ni caractères spéciaux, ici{" "}
						<code>appStarter</code>.
					</p>
				</Callout>
				<p>
					Ouvrir Git Bash. Se placer dans le dossier où tous les projets sont
					stockés, par exemple <code>{"~/desktop/LOCAL"}</code>. Puis créer le
					dossier <code>appStarter</code>, entrer dedans et l'ouvrir dans VS
					Code :
				</p>
				<CodeBlock language="bash">
					{`cd ~/desktop/LOCAL
mkdir appStarter && cd appStarter
code .`}
				</CodeBlock>
				<p>
					Une fois VS Code ouvert, ouvrir le terminal intégré avec{" "}
					<strong>Ctrl+T</strong>. Toutes les commandes suivantes sont à lancer
					depuis ce terminal intégré. <br />
					<br />
					Initialiser npm dans ce dossier, cela crée un fichier{" "}
					<code>package.json</code> racine :
				</p>
				<CodeBlock language="bash">{`npm init -y`}</CodeBlock>
				<SortieAttendue>
					{`Wrote to ~/desktop/LOCAL/appStarter/package.json`}
				</SortieAttendue>
				<h3>3.02 — racine &gt; Préparer Concurrently et Biome</h3>
				<p>
					<strong>Concurrently</strong> permet de lancer le frontend et le
					backend avec une seule commande <code>npm run dev</code> depuis la
					racine.
				</p>
				<p>
					<strong>Biome</strong> remplace ESLint et Prettier en un seul outil.
					Il est installé à la racine uniquement, cela couvre <code>web/</code>{" "}
					et <code>server/</code> sans installation séparée dans chaque package.
				</p>
				<p>
					Ajouter ces dépendances au <code>package.json</code> racine (sans les
					installer maintenant) :
				</p>
				<CodeBlock language="bash">
					{`npm pkg set devDependencies.concurrently="latest"
npm pkg set devDependencies.@biomejs/biome="latest"
npm pkg set devDependencies.@types/node="latest"`}
				</CodeBlock>

				<h3>3.03 — racine &gt; Créer tsconfig.json racine</h3>
				<p>
					Les scripts dans <code>setup/</code> sont en TypeScript et ont besoin
					d'un <code>tsconfig.json</code> racine.
				</p>
				<p>
					Créer le <code>tsconfig.json</code> racine avec <code>node -e</code>
				</p>
				<CodeBlock language="bash">
					{`node -e "require('fs').writeFileSync('tsconfig.json', JSON.stringify({
  compilerOptions: {
    target: 'ES2020',
    module: 'ESNext',
    moduleResolution: 'bundler',
    strict: true,
    esModuleInterop: true,
    types: ['node']
  },
  include: ['setup/**/*']
}, null, 2))"`}
				</CodeBlock>
				<h3>3.04 — racine &gt; Configurer les scripts npm et les workspaces</h3>
				<p>
					Avant de configurer les workspaces, créer les dossiers{" "}
					<code>web/</code> et <code>mobile/</code> :
				</p>
				<CodeBlock language="bash">
					{`mkdir -p web mobile
cd web && npm init -y && cd ..
cd mobile && npm init -y && cd ..`}
				</CodeBlock>
				<p>
					Déclarer les <strong>workspaces npm</strong>, c'est la fondation du
					monorepo. Sans ça, il est impossible de créer un package{" "}
					<code>shared/</code> de types communs entre <code>web/</code>,{" "}
					<code>server/</code> et <code>mobile/</code> plus tard.
				</p>
				<p>
					<code>npm pkg set</code> permet de modifier le{" "}
					<code>package.json</code> depuis le terminal, mais ne supporte pas les
					tableaux. On utilise donc <code>node -e</code>
					pour lire le fichier, y ajouter le champ <code>workspaces</code>{" "}
					listant <code>web/</code>, <code>server/</code> et{" "}
					<code>mobile/</code>, et le réécrire :
				</p>
				<CodeBlock language="bash">
					{`node -e "const fs=require('fs');const pkg=JSON.parse(fs.readFileSync('package.json','utf8'));pkg.workspaces=['web','server','mobile'];fs.writeFileSync('package.json',JSON.stringify(pkg,null,2));"`}
				</CodeBlock>
				<Callout type="info">
					<p>
						Vérifier que la modification a bien été appliquée en ouvrant{" "}
						<code>package.json</code> : le champ <code>"workspaces"</code> doit{" "}
						contenir <code>["web", "server", "mobile"]</code>.
					</p>
				</Callout>
				<p>
					Ajouter les scripts dans le <code>package.json</code> racine. Les
					scripts <code>dev</code> lancent les serveurs, les scripts{" "}
					<code>lint</code>, <code>fix</code> et <code>format</code> gèrent la
					qualité du code avec Biome :
				</p>
				<CodeBlock language="bash">
					{`npm pkg set scripts.dev='concurrently "npm run dev -w web" "npm run dev -w server"'
npm pkg set scripts.dev:web="npm run dev -w web"
npm pkg set scripts.dev:server="npm run dev -w server"
npm pkg set scripts.lint="biome lint ."
npm pkg set scripts.fix="biome lint --write . && biome format --write ."
npm pkg set scripts.format="biome format --write ."`}
				</CodeBlock>
				<Callout type="info">
					<p>
						<code>npm run dev</code> depuis la racine lance les deux processus
						en parallèle via les workspaces npm natifs. <code>npm run fix</code>{" "}
						corrige les erreurs lint et formate en une seule commande, utile
						avant un commit. <code>npm run lint</code> et{" "}
						<code>npm run format</code> s'utilisent séparément pour signaler ou
						formater uniquement.
					</p>
				</Callout>
				<p>
					Configurer VS Code pour appliquer Biome automatiquement à chaque
					sauvegarde. Créer le dossier <code>.vscode/</code> et son fichier de
					config :
				</p>
				<CodeBlock language="bash">
					{`mkdir -p .vscode
node -e "require('fs').writeFileSync('.vscode/settings.json', JSON.stringify({
  'editor.formatOnSave': true,
  'editor.defaultFormatter': 'biomejs.biome',
  'editor.codeActionsOnSave': {
    'source.organizeImports.biome': 'explicit'
  }
}, null, 2))"`}
				</CodeBlock>
				<Callout type="info">
					<p>
						À partir de là, chaque <strong>Ctrl+S</strong> formate le fichier et
						réorganise les imports automatiquement, sans avoir à lancer{" "}
						<code>npm run format</code> manuellement.
					</p>
				</Callout>
				<Callout type="warning">
					<p>
						<code>.vscode/</code> sera ajouté au <code>.gitignore</code> à
						l'étape 3.06, ce dossier contient une config personnelle VS Code qui
						ne doit pas être envoyée sur GitHub.
					</p>
				</Callout>
				<h3>3.05 — racine &gt; Nettoyer et finaliser package.json</h3>
				<p>
					Les scripts dans <code>setup/</code> utilisent la syntaxe{" "}
					<code>import</code> ES modules. Sur le terminal, utiliser{" "}
					<code>npm pkg</code> pour modifier le <code>package.json</code> sans
					ouvrir de fichier manuellement :
				</p>
				<CodeBlock language="bash">
					{`npm pkg set type="module"
npm pkg delete main
npm pkg delete description
npm pkg delete keywords
npm pkg delete author
npm pkg delete license
npm pkg delete scripts.test`}
				</CodeBlock>
				<Callout type="warning">
					<p>
						Vérifier dans le <code>package.json</code> qu'il n'y a pas deux fois{" "}
						<code>"type"</code> dans le fichier, npm ajoute parfois{" "}
						<code>"type": "commonjs"</code> automatiquement. Si c'est le cas, la
						commande <code>npm pkg set type="module"</code> l'a déjà remplacé.
					</p>
				</Callout>
				<h3>3.06 — racine &gt; Créer .gitignore, .env et docker-compose.yml</h3>
				<ul>
					<li>
						<code>.gitignore</code>, dit à Git quels fichiers ne jamais envoyer
						sur GitHub.
					</li>
					<li>
						<code>.env</code>, contient les identifiants de la base de données
						Docker en local. <br />
						<strong>Important :</strong> <code>POSTGRES_DB</code> (utilisé par
						Docker) et <code>PGDATABASE</code> (utilisé par le serveur) doivent
						pointer vers la même base, ici <code>PENDING_GENERATION</code> sera
						remplacé à l'étape 3.18.
					</li>
					<li>
						<code>docker-compose.yml</code>, décrit le conteneur PostgreSQL que
						Docker va démarrer en local.
					</li>
				</ul>
				<CodeBlock language="bash">
					{`node -e "require('fs').writeFileSync('.gitignore', 'node_modules/\\n.env\\ndist/\\n.DS_Store\\n*.tsbuildinfo\\n.vscode/\\n')"

node -e "require('fs').writeFileSync('.env', 'NODE_ENV=development\\nPOSTGRES_USER=postgres\\nPOSTGRES_PASSWORD=postgres\\nPOSTGRES_DB=PENDING_GENERATION\\nPGDATABASE=PENDING_GENERATION\\n')"`}
				</CodeBlock>
				<Callout type="warning">
					<p>
						<code>POSTGRES_DB</code> est lu par Docker pour créer la base.{" "}
						<code>PGDATABASE</code> est lu par le serveur Express pour s'y
						connecter. Les deux doivent avoir la même valeur, c'est pourquoi ils
						sont tous les deux présents ici et tous les deux remplacés par{" "}
						<code>update-package-name.ts</code> à l'étape 3.18.
					</p>
				</Callout>
				<p>
					Le fichier <code>docker-compose.yml</code> contient des guillemets
					doubles qui ne peuvent pas être échappés proprement dans{" "}
					<code>node -e</code> sur le terminal. Le créer directement dans VS
					Code et coller le contenu suivant :
				</p>
				<CodeBlock language="bash">{`touch docker-compose.yml`}</CodeBlock>
				<p>
					Ouvrir le fichier <code>docker-compose.yml</code> et coller le contenu
					suivant :
				</p>
				<CodeBlock language="yaml" fileName="docker-compose.yml">
					{`services:
  postgres:
    image: postgres:16
    environment:
      POSTGRES_USER: \${POSTGRES_USER}
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
      POSTGRES_DB: \${POSTGRES_DB}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
volumes:
  postgres_data:`}
				</CodeBlock>
				<Callout type="warning">
					<p>
						La valeur <code>PENDING_GENERATION</code> dans <code>.env</code>{" "}
						sera remplacée automatiquement à l'étape 3.18 par{" "}
						<code>update-package-name.ts</code>. Ne pas la modifier
						manuellement.
					</p>
				</Callout>
				<h3>3.07 — setup &gt; Créer les dossiers et fichiers setup</h3>
				<p>
					Créer les dossiers et fichiers vides depuis le terminal, les fichiers{" "}
					<code>.ts</code> sont créés avec <code>touch</code> et non via{" "}
					<code>node -e</code>. Le contenu sera collé dans VS Code aux étapes
					suivantes.
				</p>
				<Callout type="info">
					<p>
						Les fichiers <code>.ts</code> ne peuvent pas être créés directement
						via le terminal, les emojis et les regex sont corrompus.{" "}
						<code>touch</code> crée le fichier vide, le contenu est ensuite a
						coller dans le fichier .
					</p>
				</Callout>
				<CodeBlock language="bash">
					{`mkdir -p setup/exports_writings
mkdir -p setup/ressources
touch setup/constants.ts
touch setup/update-package-name.ts
touch setup/ressources/ressources.md
touch setup/exports_writings/export_writings_all.ts
touch setup/exports_writings/export_writings_noCommit.ts
touch setup/exports_writings/export_writings_gitDiff.ts`}
				</CodeBlock>
				<h3>3.08 — setup &gt; Créer constants.ts</h3>
				<p>
					Ouvrir le fichier <code>setup/constants.ts</code> et coller le contenu
					suivant :
				</p>
				<CodeBlock language="typescript" fileName="setup/constants.ts">
					{`export const constants = {
  ROOT_FOLDER_NAME: "PENDING_GENERATION",
  APP_NAME: "PENDING_GENERATION",
  DEFAULT_USER_NAME: "utilisateur",
  DEFAULT_AVATAR: "/images/avatar_profil.png",
  ROUTE_HOME: "/",
  ROUTE_LOGIN: "/login",
  ROUTE_AUTH: "/auth",
  ROUTE_DASHBOARD: "/dashboard",
  ROUTE_CONTACT: "/contact",
  TEXT_WELCOME: "Bienvenue",
  TEXT_LOGOUT: "Se déconnecter",
  TEXT_LOGIN: "Se connecter",
  TEXT_SEARCH_PLACEHOLDER: "Rechercher...",
  DEFAULT_LANGUAGE: "fr",
  DEFAULT_THEME: "light",
  DEFAULT_TIMEOUT: 10000,
  DEFAULT_PAGE_SIZE: 10,
  API_BASE_URL: "http://localhost:3310/api",
  API_AUTH_ENDPOINT: "/auth",
};`}
				</CodeBlock>
				<Callout type="info">
					<p>
						<code>setup/constants.ts</code> est la{" "}
						<strong>seule exception</strong> à la règle cross-package : ce
						fichier est importé à la fois par <code>web/</code> et{" "}
						<code>server/</code>. Tous les autres imports restent strictement
						internes à chaque package.
					</p>
				</Callout>
				<h3>3.09 — setup &gt; Créer update-package-name.ts</h3>
				<p>
					Ce script lit le nom du dossier racine et remplace automatiquement
					toutes les occurrences de <code>PENDING_GENERATION</code> dans les
					fichiers de configuration y compris <code>POSTGRES_DB</code> et{" "}
					<code>PGDATABASE</code> dans le <code>.env</code> racine.
				</p>
				<p>
					Ouvrir le fichier <code>setup/update-package-name.ts</code> et coller
					le contenu suivant :
				</p>
				<CodeBlock
					language="typescript"
					fileName="setup/update-package-name.ts"
				>
					{`import fs from "node:fs";
import path from "node:path";

const rootFolderName = path.basename(path.resolve());
console.log(
	\`\\n=========================\\n🔵 AUTO-CONFIG PROJECT\\n=========================\\n\`,
);
console.log(\`🔵 Dossier racine détecté : \${rootFolderName}\`);

const constantsPath = path.resolve("setup/constants.ts");
if (fs.existsSync(constantsPath)) {
	let content = fs.readFileSync(constantsPath, "utf8");
	if (content.includes("PENDING_GENERATION")) {
		content = content.replace(/PENDING_GENERATION/g, rootFolderName);
		fs.writeFileSync(constantsPath, content);
		console.log(\`🟢 constants.ts mis à jour : \${rootFolderName}\`);
	} else {
		console.log(\`🔵 constants.ts — aucun remplacement nécessaire\`);
	}
} else {
	console.log("🔴 Erreur : constants.ts introuvable");
}

function updateEnv(envPath: string): void {
	if (!fs.existsSync(envPath)) return;
	const relativePath = path
		.relative(process.cwd(), envPath)
		.replace(/\\\\/g, "/");
	const original = fs.readFileSync(envPath, "utf8");
	const lines = original.split("\\n");
	let hasChanges = false;
	const updatedLines = lines.map((line) => {
		if (!line.includes("PENDING_GENERATION")) return line;
		const [key] = line.split("=");
		const newLine = line.replace(/PENDING_GENERATION/g, rootFolderName);
		console.log(\`   \${key} : PENDING_GENERATION → \${rootFolderName}\`);
		hasChanges = true;
		return newLine;
	});
	if (hasChanges) {
		const updated = updatedLines.join("\\n");
		fs.writeFileSync(envPath, updated);
		console.log(\`🟢 \${relativePath} mis à jour\`);
	} else {
		console.log(\`🔵 \${relativePath} — aucun remplacement nécessaire\`);
	}
}

updateEnv(path.resolve("server/.env"));
updateEnv(path.resolve("web/.env"));
updateEnv(path.resolve(".env"));
console.log(
	\`\\n=========================\\n🟢 CONFIGURATION TERMINÉE\\n=========================\\n\`,
);`}
				</CodeBlock>
				<h3>
					3.10 — setup &gt; exports_writings &gt; Créer export_writings_all.ts
				</h3>
				<p>
					Ce script exporte tout le contenu du projet en un seul fichier
					Markdown. Utile pour donner le contexte complet du projet à une IA en
					une seule opération.
				</p>
				<p>
					Ouvrir le fichier{" "}
					<code>{"setup/exports_writings/export_writings_all.ts"}</code> et
					coller le contenu suivant :
				</p>
				<CodeBlock
					language="typescript"
					fileName="setup/exports_writings/export_writings_all.ts"
				>
					{`// npx tsx setup/exports_writings/export_writings_all.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputFileName = "export_writings_all.md";
const outputPath = path.join(__dirname, outputFileName);

const excludedPaths = ["node_modules","build","dist","web/dist","server/dist","logs",".vscode",".idea",".vite","web/.vite",".git","setup","exports_writings"];
const excludedFiles = [".DS_Store","npm-debug.log",outputFileName];
const excludedExtensions = [".tsbuildinfo",".log",".png",".jpg",".jpeg",".gif",".ico",".pdf",".zip"];

function detectLanguage(file: string): string {
	const ext = path.extname(file).slice(1).toLowerCase();
	const map: Record<string, string> = {js:"javascript",ts:"typescript",sh:"bash",css:"css",html:"html",py:"python",json:"json",yml:"yaml",tsx:"tsx",md:"markdown"};
	return map[ext] || "";
}

function isExcluded(filePath: string): boolean {
	const n = filePath.replace(/\\\\/g, "/");
	return excludedPaths.some((f) => n.includes(\`/\${f}/\`) || n.split("/").includes(f))
		|| excludedFiles.some((f) => path.basename(n) === f)
		|| excludedExtensions.some((e) => n.endsWith(e));
}

function isBinary(buffer: Buffer): boolean {
	let nonAscii = 0;
	const len = Math.min(buffer.length, 1000);
	for (let i = 0; i < len; i++) { if (buffer[i] > 127) nonAscii++; }
	return buffer.length > 0 && nonAscii / len > 0.3;
}

function getAllFiles(dir: string): string[] {
	try {
		return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e: fs.Dirent) => {
			const p = path.join(dir, e.name);
			if (e.isDirectory()) { return isExcluded(p) ? [] : getAllFiles(p); }
			return p;
		});
	} catch { return []; }
}

try {
	console.log(\`\\n=========================\\n🔵 EXPORT GLOBAL\\n=========================\\n\`);
	const root = process.cwd();
	const files = getAllFiles(root).filter((f) => fs.existsSync(f) && !isExcluded(f) && path.basename(f) !== outputFileName && path.basename(f) !== path.basename(__filename)).sort();
	console.log(\`🔵 \${files.length} fichiers trouvés.\`);
	let output = "# CONTENU DU PROJET\\n";
	for (const file of files) {
		const rel = path.relative(root, file);
		const raw = fs.readFileSync(file);
		if (isBinary(raw)) { output += \`\\n### \\\`\${rel}\\\`\\n🟡 **Fichier ignoré (binaire)**\\n\`; continue; }
		output += \`\\n### \\\`\${rel}\\\`\\n\\\`\\\`\\\`\${detectLanguage(file)}\\n\${raw.toString("utf8")}\\n\\\`\\\`\\\`\\n\`;
	}
	fs.writeFileSync(outputPath, output, "utf8");
	console.log(\`🟢 EXPORT RÉUSSI : \${outputFileName}\`);
} catch (error) {
	console.error(\`\\n🔴 ERREUR :\`, (error as Error).message);
}`}
				</CodeBlock>
				<h3>
					3.11 — setup &gt; exports_writings &gt; Créer
					export_writings_gitDiff.ts
				</h3>
				<p>
					Ce script exporte le <code>git diff</code> brut, les lignes exactes
					ajoutées et supprimées depuis le dernier commit.
				</p>
				<p>
					Ouvrir le fichier{" "}
					<code>{"setup/exports_writings/export_writings_gitDiff.ts"}</code> et
					coller le contenu suivant :
				</p>
				<CodeBlock
					language="typescript"
					fileName="setup/exports_writings/export_writings_gitDiff.ts"
				>
					{`// npx tsx setup/exports_writings/export_writings_gitDiff.ts
import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputFileName = "export_writings_gitDiff.md";
const outputPath = path.join(__dirname, outputFileName);

console.log(\`\\n=========================\\n🔵 GIT DIFF EXPORT\\n=========================\\n\`);

exec("git diff", (err: Error | null, stdout: string) => {
	if (err) { console.error(\`🔴 ERREUR :\`, err.message); return; }
	if (!stdout) stdout = "Aucune différence détectée (git diff vide).";
	const markdown = \`# Git Diff - \${new Date().toLocaleString()}\\n\\n\\\`\\\`\\\`diff\\n\${stdout}\\n\\\`\\\`\\\`\\n\`;
	fs.writeFile(outputPath, markdown, "utf8", (e: NodeJS.ErrnoException | null) => {
		if (e) console.error(\`🔴 ERREUR écriture :\`, e.message);
		else console.log(\`🟢 EXPORT RÉUSSI : \${outputFileName}\`);
	});
});`}
				</CodeBlock>
				<h3>
					3.12 — setup &gt; exports_writings &gt; Créer
					export_writings_noCommit.ts
				</h3>
				<p>
					Ce script exporte uniquement les fichiers modifiés ou non suivis par
					Git.
				</p>
				<p>
					Ouvrir le fichier{" "}
					<code>{"setup/exports_writings/export_writings_noCommit.ts"}</code> et
					coller le contenu suivant :
				</p>
				<CodeBlock
					language="typescript"
					fileName="setup/exports_writings/export_writings_noCommit.ts"
				>
					{`// npx tsx setup/exports_writings/export_writings_noCommit.ts
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const selfName = path.basename(__filename);
const outputFileName = "export_writings_noCommit.md";
const outputPath = path.join(__dirname, outputFileName);

function detectLanguage(file: string): string {
	const ext = path.extname(file).slice(1);
	const map: Record<string, string> = {js:"javascript",ts:"typescript",sh:"bash",css:"css",html:"html",json:"json",md:"markdown",tsx:"tsx"};
	return map[ext] || "";
}

try {
	console.log(\`\\n=========================\\n🔵 EXPORT NO-COMMIT\\n=========================\\n\`);
	const modified = execSync("git diff --name-only", { encoding: "utf8" }).split("\\n").filter((f) => f && fs.existsSync(f) && f !== outputFileName && f !== selfName);
	const untracked = execSync("git ls-files --others --exclude-standard", { encoding: "utf8" }).split("\\n").filter((f) => f && fs.existsSync(f) && f !== outputFileName && f !== selfName);

	let output = "## FICHIERS À MODIFIER\\n";
	if (modified.length > 0) {
		for (const f of modified) { output += \`\\n### \\\`\${f}\\\`\\n\\\`\\\`\\\`\${detectLanguage(f)}\\n\${fs.readFileSync(f, "utf8")}\\n\\\`\\\`\\\`\\n\`; }
	} else { output += "\\n_Aucun fichier modifié._\\n"; }

	output += "\\n## NOUVEAUX FICHIERS\\n";
	if (untracked.length > 0) {
		for (const f of untracked) { output += \`\\n### \\\`\${f}\\\`\\n\\\`\\\`\\\`\${detectLanguage(f)}\\n\${fs.readFileSync(f, "utf8")}\\n\\\`\\\`\\\`\\n\`; }
	} else { output += "\\n_Aucun fichier non suivi._\\n"; }

	fs.writeFileSync(outputPath, output, "utf8");
	console.log(\`🟢 EXPORT RÉUSSI : \${outputFileName}\`);
} catch (error) {
	console.error(\`\\n🔴 ERREUR :\`, (error as Error).message);
}`}
				</CodeBlock>
				<Callout type="info">
					<p>
						Ces trois scripts s'utilisent depuis la racine du projet avec{" "}
						<code>npx tsx</code> :<br />
						<code>npx tsx setup/exports_writings/export_writings_all.ts</code> —
						export complet
						<br />
						<code>
							npx tsx setup/exports_writings/export_writings_noCommit.ts
						</code>{" "}
						— fichiers non commités
						<br />
						<code>
							npx tsx setup/exports_writings/export_writings_gitDiff.ts
						</code>{" "}
						— diff brut
					</p>
				</Callout>

				<h3>3.13 — setup &gt; ressources &gt; Créer ressources.md</h3>
				<p>
					Ce dossier contient les fichiers annexes au projet qui ne font pas
					directement partie du code source.
				</p>
				<p>
					Ouvrir le fichier <code>{"setup/ressources/ressources.md"}</code> et
					coller le contenu suivant :
				</p>
				<CodeBlock
					language="markdown"
					fileName="setup/ressources/ressources.md"
				>
					{`Ce dossier contient les fichiers annexes au projet qui ne font pas directement partie du code source.

- Documents PDF / Word - Textes à intégrer dans le site, conditions générales, contrats, guides, notices
- Screenshots / Maquettes - Aperçus de design ou d’interface, références visuelles pour le développement
- Documents de travail - Cahier des charges, spécifications techniques ou fonctionnelles, idées, notes de projet, to-do lists
- Tableaux Excel / CSV - Liste de produits, services, utilisateurs, etc.
- Brouillons - Fichiers non finalisés ou archivés pour consultation ultérieure

Légende des couleurs utilisées dans le code :

🔵 INFO / LOAD
Processus en cours, lecture ou initialisation.
Scan de fichiers, tentative de connexion, démarrage.

🟢 SUCCESS
Action terminée avec succès ou état valide.
Compilation réussie, base de données prête, serveur en ligne.

🔴 ERROR
Échec critique, exception ou fichier manquant.
Erreurs de syntaxe, rejet de connexion, crash système.`}
				</CodeBlock>

				<h3>3.14 — web &gt; Créer le frontend avec Vite</h3>
				<Callout type="info">
					<p>
						Cette commande déclenche <strong>deux questions</strong>{" "}
						interactives dans le terminal. Lancez-la <strong>seule</strong> : le
						terminal attendra vos réponses avant de poursuivre.
					</p>
				</Callout>
				<CodeBlock language="bash">
					{`npm create vite@latest web -- --template react-ts`}
				</CodeBlock>
				<p>
					<strong>Question 1 :</strong>
				</p>
				<p>
					Target directory "web" is not empty. Please choose how to proceed:
				</p>
				<p>
					→ Utiliser la flèche bas pour naviguer jusqu'à{" "}
					<strong>Ignore files and continue</strong>.
				</p>
				<p>
					<strong>Question 2 :</strong>
				</p>
				<p>Install with npm and start now?</p>
				<p>
					→ Sélectionner <strong>No</strong> avec la touche fléchée.
				</p>
				<Callout type="error">
					<p>
						Ne pas sélectionner <strong>Yes</strong> : Vite installe les
						dépendances ET lance le serveur immédiatement, le terminal se
						bloque. Si cela arrive : appuyer sur <strong>Ctrl+C</strong>, puis{" "}
						<code>rm -rf web</code> et recommencer.
					</p>
				</Callout>
				<SortieAttendue>
					{`◇  Scaffolding project in C:\\Users\\Cédric\\desktop\\LOCAL\\appStarter\\web...

└  Done. Now run:
  cd web
  npm install
  npm run dev`}
				</SortieAttendue>
				<h3>3.15 — web &gt; Supprimer ESLint et préparer les dépendances</h3>
				<p>
					Le template Vite installe ESLint par défaut. On le supprime
					immédiatement car Biome est déjà configuré à la racine et couvre{" "}
					<code>web/</code>, avoir deux linters crée des conflits de règles et
					double la configuration à maintenir.
				</p>
				<CodeBlock language="bash">{`cd web`}</CodeBlock>
				<p>
					Supprimer les dépendances ESLint du <code>package.json</code> de{" "}
					<code>web/</code> :
				</p>
				<CodeBlock language="bash">
					{`npm pkg delete devDependencies.eslint
npm pkg delete devDependencies.@eslint/js
npm pkg delete devDependencies.eslint-plugin-react-hooks
npm pkg delete devDependencies.eslint-plugin-react-refresh
npm pkg delete devDependencies.globals
npm pkg delete devDependencies.typescript-eslint
npm pkg delete scripts.lint`}
				</CodeBlock>
				<p>Supprimer le fichier de configuration ESLint généré par Vite :</p>
				<CodeBlock language="bash">{`rm -f eslint.config.js`}</CodeBlock>
				<p>
					Ajouter les dépendances applicatives au <code>package.json</code> de{" "}
					<code>web/</code> (sans les installer maintenant) :
				</p>
				<CodeBlock language="bash">
					{`npm pkg set dependencies.react-router="^7"
npm pkg set dependencies.react-toastify="latest"
npm pkg set dependencies.@emailjs/browser="latest"
npm pkg set devDependencies.@types/node="latest"`}
				</CodeBlock>

				<p>
					Créer le fichier <code>.env</code> du frontend avec{" "}
					<code>node -e</code> :
				</p>
				<CodeBlock language="bash">
					{`node -e "require('fs').writeFileSync('.env', 'VITE_API_URL=http://localhost:3310/api\\nVITE_EMAILJS_SERVICE_ID=PENDING_EMAILJS\\nVITE_EMAILJS_TEMPLATE_ID=PENDING_EMAILJS\\nVITE_EMAILJS_PUBLIC_KEY=PENDING_EMAILJS\\nPGDATABASE=PENDING_GENERATION\\n')"`}
				</CodeBlock>
				<p>Revenir à la racine du projet :</p>
				<CodeBlock language="bash">{`cd ..`}</CodeBlock>
				<Callout type="info">
					<p>
						À ce stade, on est de retour à la racine du monorepo. Les dossiers{" "}
						<code>web/</code> et <code>mobile/</code> existent avec leurs{" "}
						<code>package.json</code> respectifs, les dépendances sont déclarées
						mais pas encore installées.
					</p>
				</Callout>
				<h3>3.16 — mobile &gt; Créer la structure vide</h3>
				<p>
					Les dossiers <code>mobile/</code> et son <code>package.json</code> ont
					déjà été créés à l'étape 3.04. Créer uniquement les sous-dossiers
					d'application :
				</p>
				<CodeBlock language="bash">
					{`mkdir -p mobile/app mobile/components mobile/constants`}
				</CodeBlock>
				<h3>3.17 — server &gt; Créer le backend et préparer les dépendances</h3>
				<p>
					Créer le dossier <code>server/</code> et initialiser npm dedans :
				</p>
				<CodeBlock language="bash">
					{`mkdir server && cd server && npm init -y`}
				</CodeBlock>
				<Callout type="info">
					<p>
						Vérifier que <code>server/package.json</code> a bien été créé avant
						de continuer.
					</p>
				</Callout>
				<p>
					Ajouter les dépendances du serveur au <code>package.json</code>
					(sans les installer maintenant) :
				</p>
				<CodeBlock language="bash">
					{`# Framework HTTP
npm pkg set dependencies.express="^5"
npm pkg set devDependencies.typescript="latest"
npm pkg set devDependencies.tsx="latest"
npm pkg set devDependencies.@types/node="latest"
npm pkg set devDependencies.@types/express="latest"

# Base de données PostgreSQL
npm pkg set dependencies.pg="latest"
npm pkg set devDependencies.@types/pg="latest"

# Auth, sécurité et utilitaires
npm pkg set dependencies.dotenv="latest"
npm pkg set dependencies.cors="latest"
npm pkg set dependencies.bcrypt="latest"
npm pkg set dependencies.cookie-parser="latest"
npm pkg set dependencies.jsonwebtoken="latest"
npm pkg set devDependencies.@types/cors="latest"
npm pkg set devDependencies.@types/bcrypt="latest"
npm pkg set devDependencies.@types/cookie-parser="latest"
npm pkg set devDependencies.@types/jsonwebtoken="latest"

# Upload fichiers et stockage cloud
npm pkg set dependencies.multer="latest"
npm pkg set dependencies.cloudinary="latest"
npm pkg set devDependencies.@types/multer="latest"`}
				</CodeBlock>
				<Callout type="warning">
					<p>
						<code>cloudinary</code> SDK v2+ inclut ses types, ne pas installer{" "}
						<code>@types/cloudinary</code>.
					</p>
				</Callout>
				<h3>
					3.18 — server &gt; Créer tsconfig.json, src/index.ts, schema.sql et
					.env
				</h3>
				<p>
					Créer le <code>tsconfig.json</code> du serveur avec{" "}
					<code>node -e</code> :
				</p>
				<CodeBlock language="bash">
					{`node -e "require('fs').writeFileSync('tsconfig.json', JSON.stringify({
  compilerOptions: {
    target: 'ES2020',
    module: 'commonjs',
    strict: true,
    esModuleInterop: true,
    outDir: './dist',
    rootDir: './src'
  }
}, null, 2))"`}
				</CodeBlock>
				<p>
					Créer les dossiers et fichiers vides, puis le <code>.env</code> :
				</p>
				<CodeBlock language="bash">
					{`mkdir -p src database/script
touch src/index.ts database/script/schema.sql

node -e "require('fs').writeFileSync('.env', 'PORT=3310\\nNODE_ENV=development\\nJWT_SECRET=changeme\\nPGHOST=localhost\\nPGPORT=5432\\nPGUSER=postgres\\nPGPASSWORD=postgres\\nPGDATABASE=PENDING_GENERATION\\nEMAILJS_SERVICE_ID=PENDING_EMAILJS\\nEMAILJS_TEMPLATE_ID_REGISTER=PENDING_EMAILJS\\nEMAILJS_PRIVATE_KEY=PENDING_EMAILJS\\nEMAILJS_PUBLIC_KEY=PENDING_EMAILJS\\nCLOUDINARY_CLOUD_NAME=PENDING_CLOUDINARY\\nCLOUDINARY_API_KEY=PENDING_CLOUDINARY\\nCLOUDINARY_API_SECRET=PENDING_CLOUDINARY\\n')"

cd ..`}
				</CodeBlock>
				<Callout type="info">
					<p>
						Les valeurs <code>PENDING_*</code> sont des marqueurs visuels à
						remplacer lors de la configuration des services.{" "}
						<code>JWT_SECRET=changeme</code> doit être remplacé par une longue
						chaîne aléatoire avant tout déploiement en production.
					</p>
				</Callout>
				<h3>3.19 — racine &gt; Lancer update-package-name.ts</h3>
				<p>
					Ce script remplace tous les <code>PENDING_GENERATION</code> par le
					vrai nom du dossier racine (<code>appStarter</code>), dans{" "}
					<code>constants.ts</code>, <code>server/.env</code>,{" "}
					<code>web/.env</code> et <code>.env</code> racine (y compris{" "}
					<code>POSTGRES_DB</code> et <code>PGDATABASE</code>). À lancer depuis
					la racine du projet.
				</p>
				<CodeBlock language="bash">
					{`npx tsx setup/update-package-name.ts`}
				</CodeBlock>
				<SortieAttendue>
					{`=========================
🔵 AUTO-CONFIG PROJECT
=========================

🔵 Dossier racine détecté : appStarter
🟢 constants.ts mis à jour : appStarter
   PGDATABASE : PENDING_GENERATION → appStarter
🟢 server/.env mis à jour
   PGDATABASE : PENDING_GENERATION → appStarter
🟢 web/.env mis à jour
   POSTGRES_DB : PENDING_GENERATION → appStarter
   PGDATABASE : PENDING_GENERATION → appStarter
🟢 .env mis à jour

=========================
🟢 CONFIGURATION TERMINÉE
=========================`}
				</SortieAttendue>
				<Callout type="info">
					<p>
						Si le script est relancé après un premier passage, il affiche{" "}
						<code>aucun remplacement nécessaire</code> pour chaque fichier,
						c'est normal, les valeurs ont déjà été remplacées. Le script est
						sans danger à relancer.
					</p>
				</Callout>
				<Callout type="error">
					<p>
						Si le terminal affiche{" "}
						<code>🔴 Erreur : constants.ts introuvable</code>, vérifier que la
						commande est lancée depuis la racine du monorepo. Taper{" "}
						<code>pwd</code> pour vérifier le dossier courant.
					</p>
				</Callout>
				<h3>3.20 — racine &gt; Relancer npm install pour finaliser</h3>
				<p>
					Maintenant que tous les dossiers (<code>web/</code>,{" "}
					<code>server/</code>,<code>mobile/</code>) ont leurs{" "}
					<code>package.json</code> respectifs et que les workspaces sont
					déclarés à la racine, relancer <code>npm install</code>
					pour hoister toutes les dépendances correctement :
				</p>
				<CodeBlock language="bash">{`npm install`}</CodeBlock>
				<SortieAttendue>
					{`added 200 packages, and audited 204 packages in 23s

43 packages are looking for funding
run \`npm fund\` for details

found 0 vulnerabilities`}
				</SortieAttendue>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 4 — Test de validation
			    ═══════════════════════════════════════════════════════════ */}
			<section id="validation">
				<h2>Section 4 — Test de validation</h2>

				<p>
					<strong>
						Parcours utilisateur, vérification visuelle dans VS Code :
					</strong>
				</p>
				<ul>
					<li>
						Vérifier que la structure dans l'explorateur VS Code correspond à
						l'arborescence de la Section 2.
					</li>
					<li>
						Ouvrir <code>setup/constants.ts</code>, vérifier que{" "}
						<code>PENDING_GENERATION</code> a été remplacé par{" "}
						<code>appStarter</code> partout.
					</li>
					<li>
						Ouvrir <code>server/.env</code>, vérifier que{" "}
						<code>PGDATABASE=appStarter</code> est présent.
					</li>
					<li>
						Ouvrir <code>web/.env</code>, vérifier que{" "}
						<code>PGDATABASE=appStarter</code> est présent.
					</li>
					<li>
						Ouvrir <code>.env</code> racine, vérifier que{" "}
						<code>POSTGRES_DB=appStarter</code> <strong>et</strong>{" "}
						<code>PGDATABASE=appStarter</code> sont tous les deux présents avec
						la même valeur.
					</li>
					<li>
						Ouvrir <code>package.json</code> racine, vérifier que{" "}
						<code>"type": "module"</code> est présent sans doublon{" "}
						<code>"type": "commonjs"</code>, et que <code>"workspaces"</code>{" "}
						liste bien <code>["web", "server", "mobile"]</code>.
					</li>
					<li>
						Vérifier que <code>web/eslint.config.js</code> n'existe plus et
						qu'ESLint n'est plus dans les <code>devDependencies</code> de{" "}
						<code>web/package.json</code>.
					</li>
				</ul>

				<p>
					<strong>Test Docker, démarrer la base de données :</strong>
				</p>
				<p>S'assurer que Docker Desktop est ouvert, puis lancer :</p>
				<CodeBlock language="bash">{`docker compose up -d`}</CodeBlock>
				<SortieAttendue>
					{`[+] Running 1/1
 ✔ Container appStarter-postgres-1  Started`}
				</SortieAttendue>
				<CodeBlock language="bash">{`docker ps`}</CodeBlock>
				<p>
					Vérifier que le conteneur <code>postgres</code> apparaît avec le
					statut <code>Up</code>.
				</p>

				<p>
					<strong>Test node_modules :</strong>
				</p>
				<p>
					Toutes les dépendances sont installées à la racine du monorepo, la
					commande doit lister des dossiers, ce qui confirme que l'installation
					s'est bien déroulée.
				</p>
				<CodeBlock language="bash">{`ls node_modules | head -20`}</CodeBlock>

				<p>
					<strong>Test scripts racine :</strong>
				</p>
				<CodeBlock language="bash">
					{`cat package.json | grep -A 10 '"scripts"'`}
				</CodeBlock>
				<SortieAttendue>
					{`"scripts": {
  "dev": "concurrently \\"npm run dev -w web\\" \\"npm run dev -w server\\"",
  "dev:web": "npm run dev -w web",
  "dev:server": "npm run dev -w server",
  "lint": "biome lint .",
  "fix": "biome lint --write . && biome format --write .",
  "format": "biome format --write ."
}`}
				</SortieAttendue>

				<p>
					<strong>Test Biome :</strong>
				</p>
				<p>
					Le terminal doit afficher un numéro de version, par exemple{" "}
					<code>2.x.x</code>.
				</p>
				<CodeBlock language="bash">{`npx @biomejs/biome --version`}</CodeBlock>

				<p>
					<strong>Test script export :</strong>
				</p>
				<p>
					Le script doit se terminer avec <code>🟢 EXPORT RÉUSSI</code> et créer
					un fichier <code>export_writings_all.md</code> dans{" "}
					<code>{"setup/exports_writings/"}</code>.
				</p>
				<CodeBlock language="bash">
					{`npx tsx setup/exports_writings/export_writings_all.ts`}
				</CodeBlock>
			</section>

			{/* ═══════════════════════════════════════════════════════════
			    Section 5 — Cheat sheet
			    ═══════════════════════════════════════════════════════════ */}
			<section id="cheatsheet">
				<h2>Section 5 — Cheat sheet</h2>

				<CodeBlock language="bash">
					{`# Lancer les deux serveurs en parallèle (après T-02 et T-03)
npm run dev

# Lancer uniquement le frontend
npm run dev:web

# Lancer uniquement le backend
npm run dev:server

# Démarrer la base de données Docker
docker compose up -d

# Arrêter la base de données Docker
docker compose down

# Exporter le projet pour une IA (contexte complet)
npx tsx setup/exports_writings/export_writings_all.ts

# Exporter uniquement les fichiers non commités
npx tsx setup/exports_writings/export_writings_noCommit.ts

# Exporter le git diff brut
npx tsx setup/exports_writings/export_writings_gitDiff.ts

# Vérifier le code avec Biome (couvre web/ et server/)
npm run lint

# Corriger les erreurs lint et formater en une seule commande
npm run fix

# Formater uniquement
npm run format`}
				</CodeBlock>

				<h3>Outils installés</h3>
				<TableauOutils
					outils={[
						{
							nom: "Concurrently",
							version: "latest",
							installation: "npm install -D concurrently",
						},
						{
							nom: "Biome",
							version: "latest",
							installation: "npm install -D @biomejs/biome",
						},
						{
							nom: "React + Vite",
							version: "latest",
							installation: "npm create vite@latest web -- --template react-ts",
						},
						{
							nom: "react-router",
							version: "7+",
							installation: "npm install react-router",
						},
						{
							nom: "react-toastify",
							version: "latest",
							installation: "npm install react-toastify",
						},
						{
							nom: "Express",
							version: "5.x",
							installation: "npm install express",
						},
						{ nom: "pg", version: "latest", installation: "npm install pg" },
						{
							nom: "bcrypt",
							version: "latest",
							installation: "npm install bcrypt",
						},
						{
							nom: "jsonwebtoken",
							version: "latest",
							installation: "npm install jsonwebtoken",
						},
						{
							nom: "multer + cloudinary",
							version: "latest",
							installation: "npm install multer cloudinary",
						},
					]}
				/>

				<h3>Points clés à retenir</h3>
				<ul>
					<li>
						<strong>Via le terminal</strong> ne jamais créer des fichiers{" "}
						<code>.ts</code> via le terminal. Utiliser <code>touch</code> pour
						créer le fichier vide, puis coller le contenu dans VS Code (emojis
						et regex corrompus sinon).
					</li>
					<li>
						<strong>Fichiers JSON et .env</strong>, utiliser{" "}
						<code>node -e</code> ou <code>npm pkg set</code> depuis le terminal.
						Pas de heredoc <code>{"<< 'EOF'"}</code>.
					</li>
					<li>
						<strong>Workspaces npm</strong>, déclarés à la racine dans{" "}
						<code>"workspaces": ["web", "server", "mobile"]</code>. Toutes les
						dépendances sont hoistées dans <code>node_modules/</code> à la
						racine, <code>server/node_modules</code> et{" "}
						<code>web/node_modules</code> n'existent pas.
					</li>
					<li>
						<strong>Biome à la racine uniquement</strong>, couvre{" "}
						<code>web/</code>, <code>server/</code> et <code>mobile/</code>.
						ESLint n'est pas installé dans les sous-packages.
					</li>
					<li>
						<strong>
							<code>POSTGRES_DB</code> et <code>PGDATABASE</code>
						</strong>{" "}
						— les deux doivent toujours avoir la même valeur. Docker utilise{" "}
						<code>POSTGRES_DB</code> pour créer la base, Express utilise{" "}
						<code>PGDATABASE</code> pour s'y connecter.
					</li>
					<li>
						<code>setup/constants.ts</code> est la seule exception aux imports
						cross-package, importé par <code>web/</code> et <code>server/</code>
						.
					</li>
					<li>
						Les scripts <code>setup/</code> sont en <code>.ts</code> et se
						lancent avec <code>npx tsx</code>, jamais avec <code>node</code>.
					</li>
					<li>
						<code>update-package-name.ts</code> remplace tous les{" "}
						<code>PENDING_GENERATION</code> par le nom du dossier racine, à
						relancer si le projet est renommé.
					</li>
					<li>
						<code>npm create vite@latest</code> pose une question interactive —
						toujours la lancer seule, répondre <strong>No</strong> à "Install
						with npm and start now?".
					</li>
					<li>
						Docker gère PostgreSQL en local, Neon.tech prend le relais en
						production (configuré en T-31).
					</li>
					<li>
						<code>JWT_SECRET=changeme</code> est uniquement pour le
						développement local, à remplacer avant tout déploiement.
					</li>
				</ul>

				<p>
					<strong>Module suivant :</strong> T-02 — Frontend : HomePage, Router,
					Layout, Header, Footer.
				</p>
			</section>
		</article>
	);
}
