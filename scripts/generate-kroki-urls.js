const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

function encodeKroki(diagramSource) {
  const deflated = zlib.deflateSync(Buffer.from(diagramSource, 'utf8'));
  const encoded = deflated.toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
  return encoded;
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const krokiRegex = /\[kroki-plantuml\]\n----\n([\s\S]*?)----/g;
  let match;
  let modified = false;
  const matches = [];

  // Find all matches first
  while ((match = krokiRegex.exec(content)) !== null) {
    matches.push(match);
  }

  // Process matches in reverse order to preserve indices
  for (let i = matches.length - 1; i >= 0; i--) {
    match = matches[i];
    const plantumlSource = match[1].trim();
    const encoded = encodeKroki(plantumlSource);
    const krokiUrl = `https://kroki.io/plantuml/svg/${encoded}`;
    
    const replacement = `image::${krokiUrl}[PlantUML Diagram,role="diagram-clickable",width=100%]`;
    
    content = content.substring(0, match.index) + replacement + content.substring(match.index + match[0].length);
    modified = true;
  }

  // Remove duplicate role attributes
  content = content.replace(/\[role="diagram-clickable"\]\n\[role="diagram-clickable"\]/g, '[role="diagram-clickable"]');

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed: ${filePath}`);
  }
}

const engineeringFile = path.join(__dirname, '..', 'developer/modules/ROOT/pages/engineering.adoc');
if (fs.existsSync(engineeringFile)) {
  processFile(engineeringFile);
} else {
  console.error(`File not found: ${engineeringFile}`);
  process.exit(1);
}

