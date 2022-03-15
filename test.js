// import fepp from './index.js';
// console.log(fepp);
import {
	newElement,
	document,
	_cssSnippets,
	_jsSnippets,
	newDocument,
} from './index.js'
console.log({
	newElement,
	document,
	_cssSnippets,
	_jsSnippets,
	newDocument,
});

const el = newElement();
console.log(
	el.addClass('class1').setHTML('Hello World').outerHTML
);