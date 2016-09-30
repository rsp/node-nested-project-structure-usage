var {moduleA} = require('nested-project-structure-example');
console.error(moduleA.info);
process.exit(moduleA.info ? 0 : 1);
