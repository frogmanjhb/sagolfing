import { renderToString } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import { extractTitleText, helmetToHeadElements } from './utils/helmetToHeadElements';

export async function prerender(data: { url: string }) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;

  return {
    html,
    head: helmet
      ? {
          lang: 'en',
          title: extractTitleText(helmet),
          elements: helmetToHeadElements(helmet),
        }
      : { lang: 'en', title: 'SA Golfing' },
  };
}
