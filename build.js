const { build } = require('esbuild');

async function main() {
  await build({
    entryPoints: ['src/something.ts'],
    outfile: 'dist/something.js',
    platform: 'node',
    target: 'node14',
    bundle: true,
  });
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});