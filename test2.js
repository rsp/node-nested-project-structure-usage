var {moduleA} = require('nested-project-structure-example/dist/moduleA');
console.error('test2:', moduleA.info);
process.exit(moduleA.info ? 0 : 1);
