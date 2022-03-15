/**
 * Creates an instance of Document.
 * Ran once at setup, creating the exported document variable
 * @return {document}
 */
export default ({ document, MinifyJS, MinifyCSS }) =>
function newDocument() {
	document.documentElement.setAttribute('lang', 'en');
	document.head.innerHTML += '<meta name="viewport" content="width=device-width, initial-scale=1"><meta charset="UTF-8">';

	/**
	 * Sets the title of the document.
	 * @param {string} title Title to apply to the document.
	 * @return {string} The HTML DOM string of the title element that was put in the document
	 * @function document#setTitle
	 */
	document.setTitle = title => document.head.innerHTML += `<title>${obj.title}</title>`;

	/**
	 * Replaces the main document with a new one.
	 * @return {document}
	 * @function document#clearDocument
	 */
	document.clearDocument = () => document = newDocument();

	// /**
	//  * Generates a new plain document without affecting the main one.
	//  * @return {@external document}
	//  * @see {newDocument}
	//  */
	// document.newDocument = newDocument;

	/**
	 * Add a JavaScript snippet to the rendered document.
	 * The snippets will only be ran at client.
	 * The function must be anonymous where the arguments are the arguments provided in this call.
	 * Objects will be JSON stringified while all other argumnets will be stringified with their .toString() method.
	 * @param {function} function
	 * @param {...any} [arguments]
	 * @example <caption>Log "Hello World" to the console</caption>
	 * document.addJs(() => console.log("Hello World"));
	 * @example <caption>Pass local server-side variables</caption>
	 * const num = 5;
	 * document.addJs(n => console.log(n), num);
	 * @return {Element}
	 * @function document#addJs
	 */
	document.addJs = (fun, ...args) => {
		args = args.map(arg => typeof arg == 'object' ? JSON.stringify(arg) : arg);
		_jsSnippets.push(`(${fun})(${args.join()})`);
		return Element;
	}

	/**
	 * Add a CSS snippet to the rendered document.
	 * If styles is a string, it will be added to the stylesheet as it is
	 * If styles is an object, it will be handled as if every key is a selector with the value as an object where every key is a property with the value as a value.
	 * @param {object|string} styles
	 *  @example <caption>Usage with string</caption>
	 * element.addCss(`
	 *  h1 {
	 *   font-size: 2em;
	 *   border-radius: 5px;
	 *  }
	 * `);
	 *  @example <caption>Usage with object</caption>
	 * element.addCss({
	 *  "h1": {
	 *   "font-size": "2em",
	 *   "border-radius": "5px"
	 *  }
	 * });
	 * @return {document}
	 * @function document#addCss
	 */
	document.addCss = (styles) => {
		if (typeof styles == 'string')
			_cssSnippets.push(styles)
		else
			_cssSnippets.push(Object.entries(props).map(([key, value]) =>
				`${key}{${
        Object.entries(props).map(([key,value])=>`${key}:${value}`).join(';')
      }}`));
		return Element;
	}

	/**
	 * Renders all JavaScript added to the document.
	 * @param {bool} [minify=false] If the code should be minified
	 * @return {string|Promise<string>} the JS code. Returns a {Promise} if minify is true
	 * @function document#renderJs
	 */
	document.renderJs = minify => {
		const code = _jsSnippets.join(';');
		if (!minify) return MinifyJS(code).then(({ code }) => code)
		else return code;
	}

	/**
	 * Renders all CSS added to the document.
	 * @param {bool} [minify=false] If the code should be minified
	 * @return {string} the CSS code
	 * @function document#renderCss
	 */
	document.renderCss = minify => {
		const code = _cssSnippets.join(';');
		if (minify) return MinifyCSS(code).css
		else return code;
	}

	/**
	 * Applies all styles and scripts and returns the HTML string of the document.
	 * @return {string} the HTML page
	 * @function document#render
	 */
	document.render = () => {
		const styleEl = newElement('style').setHTML(document.renderJs()),
			scriptEl = newElement('script').setHTML(document.renderCss());
		document.head.append(styleEl, scriptEl);

		const HTML = document.documentElement.outerHTML;

		styleEl.remove();
		scriptEl.remove();
		return HTML;
	}

	return document;
}