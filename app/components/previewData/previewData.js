import { faDesktop, faTabletAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export const deviceSizes = {
  desktop: { width: '100%', height: '100%' },
  tablet: { width: '768px', height: '1024px' },
  smartphone: { width: '375px', height: '667px' },
};

export const defaultFontSize = {
  H1: 20,
  H2: 17,
  H3: 12,
  H4: 8,
  H5: 6,
  H6: 5,
  P: 14,
  A: 14,
};

export const deviceIcons = [
  { type: 'desktop', icon: faDesktop },
  { type: 'tablet', icon: faTabletAlt },
  { type: 'smartphone', icon: faMobileAlt },
];

export const generateHTMLCSSJS = (elements) => {
  let htmlContent = '';
  let css = '';
  let js = '';

  elements.forEach((element) => {
    if (!element.position) {
      element.position = { x: 0, y: 0 };
    }

    if (element.type === 'text') {
      htmlContent += `<${element.tag} style="font-size: ${element.fontSize}px; color: ${element.color}; font-family: ${element.fontFamily}; position: absolute; top: ${element.position.y}px; left: ${element.position.x}px;">${element.content}</${element.tag}>\n`;
    } else if (element.type === 'image') {
      htmlContent += `<img src="${element.src}" style="width: ${element.width}px; height: ${element.height}px; position: absolute; top: ${element.position.y}px; left: ${element.position.x}px;" />\n`;
    } else if (element.type === 'video') {
      htmlContent += `<video width="${element.width}" height="${element.height}" controls style="position: absolute; top: ${element.position.y}px; left: ${element.position.x}px;">
                <source src="${element.src}" type="video/mp4">
                Your browser does not support the video tag.
               </video>\n`;
    }
  });

  css += '/* Your CSS */\n';
  js += '// Your JS\n';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated Page</title>
  <style>
    body { margin: 0; padding: 0; }
    ${css}
  </style>
</head>
<body>
  ${htmlContent}
  <script>
    ${js}
  </script>
</body>
</html>`;

  return { html, css, js };
};
