const fs = require('fs');

function writeTypings(cssFilePath, classNames) {
  return new Promise((resolve, reject) => {
    const content = generateCssModuleTypeDef(classNames);

    fs.writeFile(`${cssFilePath}.d.ts`, content, error => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function generateCssModuleTypeDef(classNames) {
  const firstLine = 'interface Style {';
  const classNameLines = classNames.map(className => `  '${className}': string;`);
  const lastLines = ['}', '', 'const style: Style', '', 'export default style;', ''];
  return [firstLine, ...classNameLines, ...lastLines].join('\n');
}

module.exports = {
  modules: true,
  plugins: {
    autoprefixer: {},
    'postcss-modules': {
      generateScopedName: '[local]___[hash:base64:5]',
      getJSON: (filename, json) => {
        const classNames = Object.keys(json);
        if (classNames.length > 0) {
          return writeTypings(filename, classNames);
        }
      },
    },
  },
};
