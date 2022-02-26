import jsdoc2md from 'jsdoc-to-markdown';
import { promises as fs } from 'fs';
jsdoc2md.render({
	"files": 'index.js',
	"no-cache": true,
	"example-lang": 'js',
	"no-gfm": false
}).then(output =>
	fs.writeFile('./readme.md', output, 'utf8')
);