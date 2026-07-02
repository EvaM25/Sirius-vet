// const path = require("path");
// const nextPath = path.join(__dirname, "node_modules", ".bin", "next");
// process.argv.length = 1;
// process.argv.push(nextPath, "start");
// process.env.NODE_ENV = "production";
// require(nextPath);

import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextPath = path.join(__dirname, "node_modules", ".bin", "next");

process.argv.length = 1;
process.argv.push(nextPath, "start");
process.env.NODE_ENV = "production";

const command = nextPath;
const args = ["start"];

console.log(`Starting Next.js app with command: ${command} ${args.join(" ")}`);

const nextProcess = spawn(command, args, {
  stdio: "inherit",
  shell: true,
});

nextProcess.on("error", (err) => {
  console.error("Failed to start Next.js process:", err);
});

nextProcess.on("close", (code) => {
  console.log(`Next.js process exited with code ${code}`);
});
