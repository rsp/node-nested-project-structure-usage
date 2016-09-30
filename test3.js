var {moduleA} = require('nested-project-structure-example/moduleA');
console.error('test3:', moduleA.info);
process.exit(moduleA.info ? 0 : 1);
