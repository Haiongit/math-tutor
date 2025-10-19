#!/usr/bin/env node

/**
 * Script to find Vietnamese text in .tsx files
 * Usage: node scripts/find-vietnamese-text.js
 */

const fs = require('fs');
const path = require('path');

// Vietnamese character pattern
const vietnamesePattern = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]/;

function findVietnameseInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const matches = [];

  lines.forEach((line, index) => {
    if (vietnamesePattern.test(line)) {
      // Skip imports and comments
      if (line.trim().startsWith('import') || 
          line.trim().startsWith('//') || 
          line.trim().startsWith('*')) {
        return;
      }

      // Find Vietnamese strings in the line
      const stringMatches = line.match(/"[^"]*[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ][^"]*"/g) ||
                           line.match(/'[^']*[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ][^']*'/g) ||
                           line.match(/`[^`]*[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ][^`]*`/g);

      if (stringMatches) {
        matches.push({
          line: index + 1,
          content: line.trim(),
          strings: stringMatches
        });
      }
    }
  });

  return matches;
}

function scanDirectory(dir) {
  const results = {};
  
  function scan(directory) {
    const files = fs.readdirSync(directory);

    files.forEach(file => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // Skip node_modules, .next, etc
        if (!['node_modules', '.next', '.git', 'dist', 'build'].includes(file)) {
          scan(filePath);
        }
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const matches = findVietnameseInFile(filePath);
        if (matches.length > 0) {
          results[filePath] = matches;
        }
      }
    });
  }

  scan(dir);
  return results;
}

// Main
console.log('🔍 Scanning for Vietnamese text in .tsx files...\n');

const srcDir = path.join(__dirname, '..', 'src');
const results = scanDirectory(srcDir);

const fileCount = Object.keys(results).length;
let totalMatches = 0;

Object.entries(results).forEach(([file, matches]) => {
  totalMatches += matches.length;
});

console.log(`📊 Summary:`);
console.log(`   Files with Vietnamese text: ${fileCount}`);
console.log(`   Total lines with Vietnamese: ${totalMatches}\n`);

console.log(`📝 Top 20 files to update:\n`);

// Sort by number of matches and show top 20
const sorted = Object.entries(results)
  .sort((a, b) => b[1].length - a[1].length)
  .slice(0, 20);

sorted.forEach(([file, matches]) => {
  const relativePath = path.relative(process.cwd(), file);
  console.log(`   ${relativePath} (${matches.length} lines)`);
});

console.log(`\n✅ Key components already updated:`);
console.log(`   - Navbar`);
console.log(`   - Footer`);
console.log(`   - Login Page`);
console.log(`   - Register Page`);
console.log(`   - Home Banner`);
console.log(`   - Search Popup`);
console.log(`   - Language Switcher`);

console.log(`\n💡 To update remaining components:`);
console.log(`   1. Use the comprehensive translation keys in vi.json and en.json`);
console.log(`   2. Add "use client" directive if needed`);
console.log(`   3. Import: import { useTranslation } from "react-i18next";`);
console.log(`   4. Use hook: const { t } = useTranslation();`);
console.log(`   5. Replace text: {t("section.key")}`);
console.log(`\n📖 See TRANSLATION_GUIDE.md for more details\n`);



