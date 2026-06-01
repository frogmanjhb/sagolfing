import type { HelmetServerState } from 'react-helmet-async';

type HeadElement = {
  type: string;
  props: Record<string, string>;
};

function parseHtmlAttributes(attrString: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const attrRegex = /([\w:-]+)=["']([^"']*)["']/g;
  let match = attrRegex.exec(attrString);
  while (match !== null) {
    attrs[match[1]] = match[2];
    match = attrRegex.exec(attrString);
  }
  return attrs;
}

function parseTags(html: string, tagName: string): HeadElement[] {
  const elements: HeadElement[] = [];
  const tagRegex = new RegExp(`<${tagName}\\s([^>]*?)\\/?>`, 'gi');
  let match = tagRegex.exec(html);
  while (match !== null) {
    elements.push({ type: tagName, props: parseHtmlAttributes(match[1]) });
    match = tagRegex.exec(html);
  }
  return elements;
}

export function helmetToHeadElements(helmet: HelmetServerState): Set<HeadElement> {
  const elements = new Set<HeadElement>();

  for (const element of parseTags(helmet.meta.toString(), 'meta')) {
    elements.add(element);
  }
  for (const element of parseTags(helmet.link.toString(), 'link')) {
    elements.add(element);
  }

  return elements;
}

export function extractTitleText(helmet: HelmetServerState): string {
  const titleHtml = helmet.title.toString();
  const match = titleHtml.match(/<title[^>]*>([^<]*)<\/title>/i);
  return match?.[1]?.trim() ?? 'SA Golfing';
}
