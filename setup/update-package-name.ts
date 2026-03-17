import fs from "node:fs";
import path from "node:path";

const rootFolderName = path.basename(path.resolve());
console.log(
	`\n=========================\n🔵 AUTO-CONFIG PROJECT\n=========================\n`,
);
console.log(`🔵 Dossier racine détecté : ${rootFolderName}`);

const constantsPath = path.resolve("setup/constants.ts");
if (fs.existsSync(constantsPath)) {
	let content = fs.readFileSync(constantsPath, "utf8");
	if (content.includes("PENDING_GENERATION")) {
		content = content.replace(/PENDING_GENERATION/g, rootFolderName);
		fs.writeFileSync(constantsPath, content);
		console.log(`🟢 constants.ts mis à jour : ${rootFolderName}`);
	} else {
		console.log(`🔵 constants.ts — aucun remplacement nécessaire`);
	}
} else {
	console.log("🔴 Erreur : constants.ts introuvable");
}

function updateEnv(envPath: string): void {
	if (!fs.existsSync(envPath)) return;
	const relativePath = path
		.relative(process.cwd(), envPath)
		.replace(/\\/g, "/");
	const original = fs.readFileSync(envPath, "utf8");
	const lines = original.split("\n");
	let hasChanges = false;
	const updatedLines = lines.map((line) => {
		if (!line.includes("PENDING_GENERATION")) return line;
		const [key] = line.split("=");
		const newLine = line.replace(/PENDING_GENERATION/g, rootFolderName);
		console.log(`   ${key} : PENDING_GENERATION → ${rootFolderName}`);
		hasChanges = true;
		return newLine;
	});
	if (hasChanges) {
		const updated = updatedLines.join("\n");
		fs.writeFileSync(envPath, updated);
		console.log(`🟢 ${relativePath} mis à jour`);
	} else {
		console.log(`🔵 ${relativePath} — aucun remplacement nécessaire`);
	}
}

updateEnv(path.resolve("server/.env"));
updateEnv(path.resolve("web/.env"));
updateEnv(path.resolve(".env"));
console.log(
	`\n=========================\n🟢 CONFIGURATION TERMINÉE\n=========================\n`,
);
