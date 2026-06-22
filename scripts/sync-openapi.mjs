import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const source = resolve(root, '../../docs/openapi.json');
const target = resolve(root, 'openapi.json');

if (!existsSync(source)) {
  console.error(
    'Missing backend OpenAPI spec. Run from backend root:\n  pnpm gen:openapi',
  );
  process.exit(1);
}

copyFileSync(source, target);
console.log(`Synced ${source} -> ${target}`);
