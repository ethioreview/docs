import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
// backend/docs/openapi.json (from packages/developer-docs)
const source = resolve(root, '../../docs/openapi.json');
const target = resolve(root, 'openapi.json');

if (!existsSync(source)) {
  console.error(
    `Missing OpenAPI spec at ${source}. From backend root run:\n  pnpm gen:openapi`,
  );
  process.exit(1);
}

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
console.log(`Synced ${source} -> ${target}`);
