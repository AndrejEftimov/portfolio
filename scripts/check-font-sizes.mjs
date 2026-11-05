import { readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const SOURCE_ROOT = new URL('../src/', import.meta.url);
const MIN_PX = 12;
const MIN_REM = 0.75;
const SOURCE_EXTENSIONS = new Set(['.css', '.js', '.jsx']);

const violations = [];

async function walk(directoryUrl) {
  const entries = await readdir(directoryUrl, { withFileTypes: true });

  for (const entry of entries) {
    const entryUrl = new URL(entry.name + (entry.isDirectory() ? '/' : ''), directoryUrl);

    if (entry.isDirectory()) {
      await walk(entryUrl);
      continue;
    }

    if (!SOURCE_EXTENSIONS.has(extname(entry.name))) {
      continue;
    }

    await checkFile(entryUrl);
  }
}

async function checkFile(fileUrl) {
  const content = await readFile(fileUrl, 'utf8');
  const lines = content.split(/\r?\n/);

  lines.forEach((line, index) => {
    checkMatches(fileUrl, line, index + 1, /font-size\s*:\s*([0-9]*\.?[0-9]+)px\b/g, MIN_PX, 'px');
    checkMatches(fileUrl, line, index + 1, /font-size\s*:\s*([0-9]*\.?[0-9]+)rem\b/g, MIN_REM, 'rem');
    checkMatches(fileUrl, line, index + 1, /text-\[([0-9]*\.?[0-9]+)px\]/g, MIN_PX, 'px');
    checkMatches(fileUrl, line, index + 1, /text-\[([0-9]*\.?[0-9]+)rem\]/g, MIN_REM, 'rem');
  });
}

function checkMatches(fileUrl, line, lineNumber, pattern, minimum, unit) {
  for (const match of line.matchAll(pattern)) {
    const value = Number(match[1]);

    if (value < minimum) {
      violations.push({
        file: relative(new URL('../', SOURCE_ROOT).pathname, fileUrl.pathname),
        line: lineNumber,
        value: `${value}${unit}`,
      });
    }
  }
}

await walk(SOURCE_ROOT);

if (violations.length > 0) {
  console.error(`Font-size check failed. Minimum allowed size is ${MIN_PX}px (${MIN_REM}rem).`);

  for (const violation of violations) {
    console.error(`- ${violation.file}:${violation.line} uses ${violation.value}`);
  }

  process.exitCode = 1;
} else {
  console.log(`Font-size check passed. No source font size is below ${MIN_PX}px (${MIN_REM}rem).`);
}
