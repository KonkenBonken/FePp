/**
 * Creates an instance of Element.
 * @param {string} [tagName=div] The tag type.
 * @param {...string} [classList] Class to apply to element.
 * @return {element}
 * @function newElement
 */
export default ({ document, uniqueString }) =>
function newElement(tagName = 'div', ...classList) {
	const Element = document.createElement(tagName);

	/**
	 * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add Element.classList.add} but returns the {Element}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add Element.classList.add}
	 * @param {...string} classList Class to apply to element.
	 * @return {Element}
	 * @function element#addClass
	 */
	Element.addClass = (...classList) => {
		Element.classList.add(...classList)
		return Element;
	}


	/**
	 * Adds one or more classes to the element after removing all previous classes.
	 * @param {...string} classList Class to apply to element.
	 * @return {Element}
	 * @function element#setClass
	 */
	Element.setClass = (...classList) => {
		Element.className = classList.join(' ');
		return Element;
	}

	/**
	 * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove Element.classList.remove} but returns the {Element}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove Element.classList.remove}
	 * @param {...string} classList Class to remove from element.
	 * @return {Element}
	 * @function element#removeClass
	 */
	Element.removeClass = (...classList) => {
		Element.classList.remove(...classList)
		return Element;
	}

	if (classList) Element.setClass(...classList);

	/**
	 * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML Element.innerHTML = html} but returns the {Element}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML Element.innerHTML = html}
	 * @param {string} html HTML markup to set as the innerHTML of the element
	 * @return {Element}
	 * @function element#setHTML
	 */
	Element.setHTML = (html) => {
		Element.innerHTML = html;
		return Element;
	}
	/**
	 * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute Element.setAttribute} but returns the {Element}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute Element.setAttribute}
	 * @param {string} name
	 * @param {string} [value=""]
	 * @return {Element}
	 * @function element#addAttribute
	 */
	Element.addAttribute = (name, value = '') => {
		Element.setAttribute(name, value);
		return Element;
	}
	/**
	 * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id Element.id = id} but returns the {Element}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/id Element.id = id}
	 * @param {string} id
	 * @return {Element}
	 * @function element#setId
	 */
	Element.setId = (id) => {
		Element.id = id;
		return Element.addAttribute('id', id);
	}
	/**
	 * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/src Element.src = src} but returns the {Element} and also more reliable
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/src Element.src = src}
	 * @param {string} src
	 * @return {Element}
	 * @function element#setSrc
	 */
	Element.setSrc = (src) => {
		Element.src = src;
		return Element.addAttribute('src', src);
	}
	/**
	 * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/type Element.type = type} but returns the {Element} and also more reliable
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/type Element.type = type}
	 * @param {string} type
	 * @return {Element}
	 * @function element#setType
	 */
	Element.setType = (type) => {
		Element.type = type;
		return Element.addAttribute('type', type);
	}
	/**
	 * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/value Element.value = value} but returns the {Element} and also more reliable
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/value Element.value = value}
	 * @param {string} value
	 * @return {Element}
	 * @function element#setValue
	 */
	Element.setValue = (value) => {
		Element.value = value;
		return Element.addAttribute('value', value);
	}
	/**
	 * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/append Element.append} but returns the {Element}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/append Element.append}
	 * @param {...Element} elements
	 * @return {Element}
	 * @function element#Append
	 */
	Element.Append = (...elements) => {
		Element.append(...elements);
		return Element;
	}
	/**
	 * Identical to {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend Element.prepend} but returns the {Element}
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend Element.prepend}
	 * @param {...Element} elements
	 * @return {Element}
	 * @function element#Prepend
	 */
	Element.Prepend = (...elements) => {
		Element.prepend(...elements);
		return Element;
	}

	/** An array of all the elemets classes
	 *	@type {string[]}
	 */
	Object.defineProperty(Element, 'classes', {
		get: function () { return Array.from(this.classList) }
	});


	/**
	 * @private
	 * @ignore
	 * @type {string}
	 */
	Object.defineProperty(Element, 'uniqueId', {
		get: function () {
			if (!this._uniqueId) {
				this._uniqueId = uniqueString();
				this.addAttribute(this._uniqueId);
			}
			return Element._uniqueId
		}
	});


	/**
	 * Add a JavaScript snippet to the rendered document.
	 * The snippets will only be ran at client.
	 * The function must be anonymous where the first argument is the element and the rest is the arguments provided in this call.
	 * Objects will be JSON stringified while all other argumnets will be stringified with their .toString() method.
	 * @param {function} function
	 * @param {...any} [arguments]
	 * @example <caption>Log the elements inner text to the console</caption>
	 * element.addJs((el) => console.log(el.innerText));
	 * @example <caption>Pass local server-side variables</caption>
	 * const num = 5;
	 * element.addJs((el, n) => el.innerHTML = n, num);
	 * @return {Element}
	 * @function element#addJs
	 */
	Element.addJs = (fun, ...args) => {
		args = args.map(arg => typeof arg == 'object' ? JSON.stringify(arg) : arg);
		_jsSnippets.push(`(${fun})(document.querySelector('[${this._uniqueId}]'),${args.join()})`);
		return Element;
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
	 * @return {Element}
	 * @function element#addCss
	 */
	Element.addCss = (styles) => {
		if (typeof styles == 'string')
			_cssSnippets.push(`.${this._uniqueId}{${styles}}`)
		else
			_cssSnippets.push(`[${this._uniqueId}]{${
					Object.entries(styles).map(([key,value])=>`${key}:${value}`).join(';')
				}}`);
		return Element;
	}

	return Element;
}