// import { minify as Terser } from "terser";
import uniqueString from 'unique-slug';
import { JSDOM } from "jsdom";

/** @external document */
const document = new JSDOM().window.document;

document.documentElement.setAttribute('lang', 'en');
document.head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8">';

/**
 * Sets the title of the document.
 * @param {string} title Title to apply to the document.
 * @return {@link Element}
 */
document.setTitle = title => document.head.innerHTML += `<title>${obj.title}</title>`;


class Fepp {
	/**
	 * Creates an instance of Element.
	 * @constructor
	 * @param {string} [tagName='div'] The desired radius of the circle.
	 * @param {...string} [classList] Class to apply to element.
	 * @see setClass
	 */
	constructor(tagName = 'div', ...classList) {
		this.element = document.createElement(tagName);
		if (classList) this.element.setClass(...classList);
		this.element.Element = this;
	}

	/**
	 * Adds one or more classes to the element.
	 * @param {...string} classList Class to apply to element.
	 * @return {@link Element}
	 */
	addClass(...classList) {
		this.element.classList.add(...classList)
		return this;
	}

	/**
	 * Adds one or more classes to the element after removing all previous classes.
	 * @param {...string} classList Class to apply to element.
	 * @return {@link Element}
	 */
	setClass(...classList) {
		this.element.className = classList.join(' ');
		return this;
	}

	/**
	 * Removes one or more classes from the element.
	 * @param {...string} classList Class to remove from element.
	 * @return {@link Element}
	 */
	removeClass(...classList) {
		this.element.classList.remove(...classList)
		return this;
	}

	/** @type {string[]} */
	get classes() { return Array.from(this.element.classList) }

	/** @type {string} */
	get innerHTML() { return this.element.innerHTML }
	/**
	 * @param {string} html
	 * @return {@link Element}
	 */
	setHTML(html) {
		this.element.innerHTML = html;
		return this;
	}

	/** @type {string[]} */
	get attributes() { return Array.from(this.element.attributes) }
	/**
	 * @param {string} name
	 * @param {string} value
	 * @return {@link Element}
	 */
	setAttribute(name, value) {
		this.element.setAttribute(name, value);
		return this;
	}

	/** @type {string} */
	get id() { return this.element.id }
	/**
	 * @param {string} id
	 * @return {@link Element}
	 */
	setId(id) {
		this.element.id = id;
		return this.element.setAttribute('id', id);
	}

	/** @type {string} */
	get src() { return this.element.src }
	/**
	 * @param {string} src
	 * @return {@link Element}
	 */
	setSrc(src) {
		this.element.src = src;
		return this.element.setAttribute('src', src);
	}

	/** @type {string} */
	get type() { return this.element.type }
	/**
	 * @param {string} type
	 * @return {@link Element}
	 */
	setType(type) {
		this.element.type = type;
		return this.element.setAttribute('type', type);
	}

	/** @type {string} */
	get value() { return this.element.value }
	/**
	 * @param {string} value
	 * @return {@link Element}
	 */
	setValue(value) {
		this.element.value = value;
		return this.element.setAttribute('value', value);
	}

	/**
	 * @private
	 * @type {string}
	 */
	get uniqueId() {
		if (!this._uniqueId) {
			this._uniqueId = uniqueString();
			this.addClass(this._uniqueId);
		}
		return this._uniqueId
	}

	/**
	 * @private
	 * @ignore
	 * @type {string[]}
	 */
	static _jsSnippets = [];
	/**
	 * @private
	 * @ignore
	 * @type {string[]}
	 */
	static _cssSnippets = [];

	/**
	 * Add a JavaScript snippet to the rendered document.
	 * All snippets will only be ran at client.
	 * The function must be anonymous where the first argument is the element and the rest is the arguments provided in this call.
	 * Objects will be JSON stringified while all other argumnets will become a string through their .toString() method.
	 * @param {function} function
	 * @param {...any} arguments
	 * @example <caption>Log the elements inner text to the console</caption>
	 * element.addJs((el) => console.log(el.innerText));
	 * @example <caption>Pass local server-side variables</caption>
	 * const num = 5;
	 * element.addJs((el, n) => el.innerHTML = n, num);
	 * @return {@link Element}
	 */
	addJs(fun, ...args) {
		args = args.map(arg => typeof arg == 'object' ? JSON.stringify(arg) : arg);
		_jsSnippets.push(`(${fun})(document.querySelector('.${this._uniqueId}'),${args.join()})`);
		return this;
	}

	/**
	 * Add a CSS snippet to the rendered document.
	 * If styles is a string, it will be put inside of a declaration block selecting the element
	 * If styles is an object, it will be handled as if every key is a property with the value as a value.
	 * @param {object|string} styles
	 *  @example <caption>Usage with string</caption>
	 * element.addCss(`
	 *  font-size: 2em;
	 *  border-radius: 5px;
	 * `);
	 *  @example <caption>Usage with object</caption>
	 * element.addCss({
	 *  "font-size": "2em",
	 *  "border-radius": "5px"
	 * });
	 * @return {@link Element}
	 */
	addCss(styles) {
		if (typeof styles == 'string')
			_cssSnippets.push(`.${this._uniqueId}{${styles}}`)
		else
			_cssSnippets.push(`.${this._uniqueId}{${
				Object.entries(styles).map(([key,value])=>`${key}:${value}`).join(';')
			}}`);
		return this;
	}

	/**
	 * Applies all styles and scripts and returns the HTML string of the document.
	 * @return {string} the HTML page
	 */
	static render() {
		const styleEl = new Fepp('style'),
			scriptEl = new Fepp('script');
		styleEl.setHTML(_cssSnippets.join(''));
		scriptEl.setHTML(_jsSnippets.join(''));
		document.head.append(styleEl.element, scriptEl.element);

		const HTML = document.documentElement.outerHTML;

		styleEl.element.remove();
		scriptEl.element.remove();
		return HTML;
	}
}
module.exports = { Fepp, document };