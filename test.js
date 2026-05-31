const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

if (!html.includes('<!DOCTYPE html>')) { console.log('❌ Falta DOCTYPE'); process.exit(1); }
if (!html.includes('<h1>')) { console.log('❌ Falta h1'); process.exit(1); }
if (!html.includes('charset="UTF-8"')) { console.log('❌ Falta charset UTF-8'); process.exit(1); }
if (!html.includes('<title>')) { console.log('❌ Falta title'); process.exit(1); }

console.log('✅ Tests pasaron');
