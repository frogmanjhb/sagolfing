import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';
import { generateSitemapXml } from '../src/config/seo';

export function seoBuildPlugin(): Plugin {
  const writeSitemap = (outDir: string) => {
    writeFileSync(resolve(outDir, 'sitemap.xml'), generateSitemapXml(), 'utf-8');
  };

  return {
    name: 'seo-build',
    buildStart() {
      writeSitemap('public');
    },
    writeBundle(options) {
      writeSitemap(options.dir);
    },
  };
}
