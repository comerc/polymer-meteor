import * as htmlMinifier from 'html-minifier';

export function minify(html) {
  // Just parse the html to make sure it is correct before minifying
  HTMLTools.parseFragment(html);

  return htmlMinifier.minify(html, {
    collapseWhitespace: true,
    conservativeCollapse: true,
    minifyCSS: true,
    minifyJS: true,
    processScripts: ['text/template'],
    removeAttributeQuotes: false,
    caseSensitive: true,
    customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
    customAttrAssign: [/\)?\]?=/],
  });
}

export function clean(src) {
  return JSON.stringify(src).replace(/^\"/, '').
  replace(/\"$/, '');
}
