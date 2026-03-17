import path from "node:path";
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
					target: `http://localhost:${apiPort}`,
					changeOrigin: true,
				},
			},
		},
		resolve: {
			alias: { "@": path.resolve(__dirname, "./src") },
		},
	};
});
