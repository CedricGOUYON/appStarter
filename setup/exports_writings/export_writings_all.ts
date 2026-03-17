// npx tsx setup/exports_writings/export_writings_all.ts
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputFileName = "export_writings_all.md";
const outputPath = path.join(__dirname, outputFileName);

const excludedPaths = [
	"node_modules",
	"build",
	"dist",
	"web/dist",
	"server/dist",
	"logs",
	".vscode",
	".idea",
	".vite",
	"web/.vite",
	".git",
	"setup",
	"exports_writings",
];
const excludedFiles = [".DS_Store", "npm-debug.log", outputFileName];
const excludedExtensions = [
	".tsbuildinfo",
	".log",
	".png",
	".jpg",
	".jpeg",
	".gif",
	".ico",
	".pdf",
	".zip",
];

function detectLanguage(file: string): string {
	const ext = path.extname(file).slice(1).toLowerCase();
	const map: Record<string, string> = {
		js: "javascript",
		ts: "typescript",
		sh: "bash",
		css: "css",
		html: "html",
		py: "python",
		json: "json",
		yml: "yaml",
		tsx: "tsx",
		md: "markdown",
	};
	return map[ext] || "";
}

function isExcluded(filePath: string): boolean {
	const n = filePath.replace(/\\/g, "/");
	return (
		excludedPaths.some(
			(f) => n.includes(`/${f}/`) || n.split("/").includes(f),
		) ||
		excludedFiles.some((f) => path.basename(n) === f) ||
		excludedExtensions.some((e) => n.endsWith(e))
	);
}

function isBinary(buffer: Buffer): boolean {
	let nonAscii = 0;
	const len = Math.min(buffer.length, 1000);
	for (let i = 0; i < len; i++) {
		if (buffer[i] > 127) nonAscii++;
	}
	return buffer.length > 0 && nonAscii / len > 0.3;
}

function getAllFiles(dir: string): string[] {
	try {
		return fs
			.readdirSync(dir, { withFileTypes: true })
			.flatMap((e: fs.Dirent) => {
				const p = path.join(dir, e.name);
				if (e.isDirectory()) {
					return isExcluded(p) ? [] : getAllFiles(p);
				}
				return p;
			});
	} catch {
		return [];
	}
}

try {
	console.log(
		`\n=========================\n🔵 EXPORT GLOBAL\n=========================\n`,
	);
	const root = process.cwd();
	const files = getAllFiles(root)
		.filter(
			(f) =>
				fs.existsSync(f) &&
				!isExcluded(f) &&
				path.basename(f) !== outputFileName &&
				path.basename(f) !== path.basename(__filename),
		)
		.sort();
	console.log(`🔵 ${files.length} fichiers trouvés.`);
	let output = "# CONTENU DU PROJET\n";
	for (const file of files) {
		const rel = path.relative(root, file);
		const raw = fs.readFileSync(file);
		if (isBinary(raw)) {
			output += `\n### \`${rel}\`\n🟡 **Fichier ignoré (binaire)**\n`;
			continue;
		}
		output += `\n### \`${rel}\`\n\`\`\`${detectLanguage(file)}\n${raw.toString("utf8")}\n\`\`\`\n`;
	}
	fs.writeFileSync(outputPath, output, "utf8");
	console.log(`🟢 EXPORT RÉUSSI : ${outputFileName}`);
} catch (error) {
	console.error(`\n🔴 ERREUR :`, (error as Error).message);
}
