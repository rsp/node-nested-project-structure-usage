var t = 'test1:', module = 'nested-project-structure-example';
console.error(t, 'importing', module);
var {moduleA} = require(module);
console.error(t, moduleA.info);
process.exit(moduleA.info ? 0 : 1);
