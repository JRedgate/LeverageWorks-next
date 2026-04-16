#!/usr/bin/env node

/**
 * LVRGWRKS Migration Script
 * 
 * Run this ONCE after creating the new Next.js project.
 * It downloads each page from the old GitHub repo, converts it to Next.js format,
 * and writes it to the correct location in the app/ directory.
 * 
 * Usage: node migrate-pages.mjs
 */

import https from 'https';
import fs from 'fs';
import path from 'path';

const BASE = 'https://raw.githubusercontent.com/JRedgate/LeverageWorks/main/src/pages';

const PAGES = [
  // [source file, destination directory, component name]
  ['AIAutomationConsultingPage.tsx', 'app/ai-automation-consulting', 'AIAutomationConsultingPage'],
  ['DigitalTransformationPage.tsx', 'app/digital-transformation-consulting', 'DigitalTransformationPage'],
  ['BusinessProcessAutomationPage.tsx', 'app/business-process-automation', 'BusinessProcessAutomationPage'],
  ['CapabilitiesPage.tsx', 'app/capabilities', 'CapabilitiesPage'],
  ['FirmPage.tsx', 'app/firm', 'FirmPage'],
  ['ImpactPage.tsx', 'app/impact', 'ImpactPage'],
  ['ContactPage.tsx', 'app/contact', 'ContactPage'],
  ['CalculatorPage.tsx', 'app/coordination-tax-calculator', 'CalculatorPage'],
  ['InsightsPage.tsx', 'app/insights', 'InsightsPage'],
  ['industries/ManufacturingPage.tsx', 'app/industries/manufacturing', 'ManufacturingPage'],
  ['industries/EnergyServicesPage.tsx', 'app/industries/energy-services', 'EnergyServicesPage'],
  ['industries/PropertyManagementPage.tsx', 'app/industries/property-management', 'PropertyManagementPage'],
  ['industries/ConstructionPage.tsx', 'app/industries/construction', 'ConstructionPage'],
  ['insights/WhyTransformationsFailArticle.tsx', 'app/insights/why-digital-transformations-fail', 'WhyTransformationsFailArticle'],
  ['insights/WhatFractionalCTODoesArticle.tsx', 'app/insights/what-does-a-fractional-cto-do', 'WhatFractionalCTODoesArticle'],
  ['insights/CostOfManualDataEntryArticle.tsx', 'app/insights/cost-of-manual-data-entry', 'CostOfManualDataEntryArticle'],
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

function convert(raw, componentName) {
  const usesBriefing = raw.includes('openBriefing') || raw.includes('useOutletContext');
  
  // Extract the JSX return body
  const returnMatch = raw.match(/return \(\s*([\s\S]*?)\s*\);\s*};?\s*$/);
  let jsx = returnMatch ? returnMatch[1] : '<div>Content failed to parse</div>';
  
  // Replace Link to= with Link href=
  jsx = jsx.replace(/<Link to=/g, '<Link href=');
  jsx = jsx.replace(/ to="/g, ' href="');
  jsx = jsx.replace(/ to='/g, " href='");
  
  const lines = [];
  
  if (usesBriefing) {
    lines.push("'use client';");
    lines.push('');
  }
  
  lines.push("import React from 'react';");
  lines.push("import Link from 'next/link';");
  
  if (usesBriefing) {
    lines.push("import { useBriefing } from '@/components/BriefingProvider';");
  }
  
  lines.push('');
  lines.push(`export default function ${componentName}() {`);
  
  if (usesBriefing) {
    lines.push('  const { openBriefing } = useBriefing();');
    lines.push('');
  }
  
  lines.push('  return (');
  lines.push(`    ${jsx}`);
  lines.push('  );');
  lines.push('}');
  lines.push('');
  
  return lines.join('\n');
}

async function main() {
  console.log('LVRGWRKS Next.js Migration Script');
  console.log('=================================\n');
  
  let success = 0;
  let failed = 0;
  
  for (const [srcFile, destDir, compName] of PAGES) {
    const url = `${BASE}/${srcFile}`;
    const destPath = path.join(destDir, 'page.tsx');
    
    try {
      console.log(`Reading: ${srcFile}`);
      const raw = await fetch(url);
      
      if (!raw || raw.includes('404: Not Found')) {
        console.log(`  SKIP: File not found on GitHub`);
        failed++;
        continue;
      }
      
      const converted = convert(raw, compName);
      
      // Ensure directory exists
      fs.mkdirSync(destDir, { recursive: true });
      fs.writeFileSync(destPath, converted);
      
      const lineCount = converted.split('\n').length;
      console.log(`  OK: ${destPath} (${lineCount} lines)`);
      success++;
    } catch (err) {
      console.log(`  ERROR: ${err.message}`);
      failed++;
    }
  }
  
  console.log(`\nDone: ${success} converted, ${failed} failed`);
  console.log('\nPages NOT handled by this script (already manually ported):');
  console.log('  - app/page.tsx (homepage)');
  console.log('  - app/leverage-audit/page.tsx');
  console.log('  - app/fractional-cto-calgary/page.tsx');
}

main();
