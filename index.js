import uniqueString from 'unique-slug';
import { JSDOM } from 'jsdom';
import { minify as MinifyJS } from 'terser';
import csso from 'csso';
const { minify: MinifyCSS } = csso;

let document = new JSDOM().window.document;
import doc from './document.js';
const newDocument = doc({ document, MinifyJS, MinifyCSS });
import el from './element.js';
const newElement = el({ document, uniqueString });
newDocument();

/**
 * The document class from {@link https://www.npmjs.com/package/jsdom jsdom}.
 * @external document
 * @typedef {external:document} document
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/document document}
 */
/**
 * The element class from {@link https://www.npmjs.com/package/jsdom jsdom}.
 * @external element
 * @typedef {external:element} element
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/element element}
 * @see {@link https://www.npmjs.com/package/jsdom jsdom}
 * @see {@link https://dom.spec.whatwg.org/ WHATWG DOM standards}
 */

/**
 * @private
 * @ignore
 * @type {string[]}
 */
const _jsSnippets = [];
/**
 * @private
 * @ignore
 * @type {string[]}
 */
const _cssSnippets = [];


export {
	newElement,
	document,
	newDocument,
	_jsSnippets,
	_cssSnippets
};

export default newElement;