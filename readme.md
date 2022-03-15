## Functions

<dl>
<dt><a href="#newElement">newElement([tagName], [...classList])</a> ⇒ <code><a href="#element">element</a></code></dt>
<dd><p>Creates an instance of Element.</p>
</dd>
<dt><a href="#newDocument">newDocument()</a> ⇒ <code><a href="#document">document</a></code></dt>
<dd><p>Creates an instance of Document.
Ran once at setup, creating the exported document variable</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#document">document</a> : <code>external:document</code></dt>
<dd><p>The document class from <a href="https://www.npmjs.com/package/jsdom">jsdom</a>.</p>
</dd>
<dt><a href="#element">element</a> : <code>external:element</code></dt>
<dd><p>The element class from <a href="https://www.npmjs.com/package/jsdom">jsdom</a>.</p>
</dd>
</dl>

<a name="newElement"></a>

## newElement([tagName], [...classList]) ⇒ [<code>element</code>](#element)
Creates an instance of Element.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;div&quot;</code> | The tag type. |
| [...classList] | <code>string</code> |  | Class to apply to element. |

<a name="newDocument"></a>

## newDocument() ⇒ [<code>document</code>](#document)
Creates an instance of Document.Ran once at setup, creating the exported document variable

**Kind**: global function  
<a name="document"></a>

## document : <code>external:document</code>
The document class from [jsdom](https://www.npmjs.com/package/jsdom).

**Kind**: global typedef  
**See**: [document](https://developer.mozilla.org/en-US/docs/Web/API/document)  

* [document](#document) : <code>external:document</code>
    * [.setTitle(title)](#document+setTitle) ⇒ <code>string</code>
    * [.clearDocument()](#document+clearDocument) ⇒ [<code>document</code>](#document)
    * [.addJs(function, [...arguments])](#document+addJs) ⇒ <code>Element</code>
    * [.addCss(styles)](#document+addCss) ⇒ [<code>document</code>](#document)
    * [.renderJs([minify])](#document+renderJs) ⇒ <code>string</code> \| <code>Promise.&lt;string&gt;</code>
    * [.renderCss([minify])](#document+renderCss) ⇒ <code>string</code>
    * [.render()](#document+render) ⇒ <code>string</code>

<a name="document+setTitle"></a>

### document.setTitle(title) ⇒ <code>string</code>
Sets the title of the document.

**Kind**: instance method of [<code>document</code>](#document)  
**Returns**: <code>string</code> - The HTML DOM string of the title element that was put in the document  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | Title to apply to the document. |

<a name="document+clearDocument"></a>

### document.clearDocument() ⇒ [<code>document</code>](#document)
Replaces the main document with a new one.

**Kind**: instance method of [<code>document</code>](#document)  
<a name="document+addJs"></a>

### document.addJs(function, [...arguments]) ⇒ <code>Element</code>
Add a JavaScript snippet to the rendered document.The snippets will only be ran at client.The function must be anonymous where the arguments are the arguments provided in this call.Objects will be JSON stringified while all other argumnets will be stringified with their .toString() method.

**Kind**: instance method of [<code>document</code>](#document)  

| Param | Type |
| --- | --- |
| function | <code>function</code> | 
| [...arguments] | <code>any</code> | 

**Example** *(Log &quot;Hello World&quot; to the console)*  
```js
document.addJs(() => console.log("Hello World"));
```
**Example** *(Pass local server-side variables)*  
```js
const num = 5;
document.addJs(n => console.log(n), num);
```
<a name="document+addCss"></a>

### document.addCss(styles) ⇒ [<code>document</code>](#document)
Add a CSS snippet to the rendered document.If styles is a string, it will be added to the stylesheet as it isIf styles is an object, it will be handled as if every key is a selector with the value as an object where every key is a property with the value as a value.

**Kind**: instance method of [<code>document</code>](#document)  

| Param | Type |
| --- | --- |
| styles | <code>object</code> \| <code>string</code> | 

**Example** *(Usage with string)*  
```js
element.addCss(`
 h1 {
  font-size: 2em;
  border-radius: 5px;
 }
`);
 
```
**Example** *(Usage with object)*  
```js
element.addCss({
 "h1": {
  "font-size": "2em",
  "border-radius": "5px"
 }
});
```
<a name="document+renderJs"></a>

### document.renderJs([minify]) ⇒ <code>string</code> \| <code>Promise.&lt;string&gt;</code>
Renders all JavaScript added to the document.

**Kind**: instance method of [<code>document</code>](#document)  
**Returns**: <code>string</code> \| <code>Promise.&lt;string&gt;</code> - the JS code. Returns a {Promise} if minify is true  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [minify] | <code>bool</code> | <code>false</code> | If the code should be minified |

<a name="document+renderCss"></a>

### document.renderCss([minify]) ⇒ <code>string</code>
Renders all CSS added to the document.

**Kind**: instance method of [<code>document</code>](#document)  
**Returns**: <code>string</code> - the CSS code  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [minify] | <code>bool</code> | <code>false</code> | If the code should be minified |

<a name="document+render"></a>

### document.render() ⇒ <code>string</code>
Applies all styles and scripts and returns the HTML string of the document.

**Kind**: instance method of [<code>document</code>](#document)  
**Returns**: <code>string</code> - the HTML page  
<a name="element"></a>

## element : <code>external:element</code>
The element class from [jsdom](https://www.npmjs.com/package/jsdom).

**Kind**: global typedef  
**See**

- [element](https://developer.mozilla.org/en-US/docs/Web/API/element)
- [jsdom](https://www.npmjs.com/package/jsdom)
- [WHATWG DOM standards](https://dom.spec.whatwg.org/)


* [element](#element) : <code>external:element</code>
    * [.addClass(...classList)](#element+addClass) ⇒ <code>Element</code>
    * [.setClass(...classList)](#element+setClass) ⇒ <code>Element</code>
    * [.removeClass(...classList)](#element+removeClass) ⇒ <code>Element</code>
    * [.setHTML(html)](#element+setHTML) ⇒ <code>Element</code>
    * [.addAttribute(name, [value])](#element+addAttribute) ⇒ <code>Element</code>
    * [.setId(id)](#element+setId) ⇒ <code>Element</code>
    * [.setSrc(src)](#element+setSrc) ⇒ <code>Element</code>
    * [.setType(type)](#element+setType) ⇒ <code>Element</code>
    * [.setValue(value)](#element+setValue) ⇒ <code>Element</code>
    * [.Append(...elements)](#element+Append) ⇒ <code>Element</code>
    * [.Prepend(...elements)](#element+Prepend) ⇒ <code>Element</code>
    * [.addJs(function, [...arguments])](#element+addJs) ⇒ <code>Element</code>
    * [.addCss(styles)](#element+addCss) ⇒ <code>Element</code>

<a name="element+addClass"></a>

### element.addClass(...classList) ⇒ <code>Element</code>
Identical to [Element.classList.add](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add) but returns the {Element}

**Kind**: instance method of [<code>element</code>](#element)  
**See**: [Element.classList.add](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add)  

| Param | Type | Description |
| --- | --- | --- |
| ...classList | <code>string</code> | Class to apply to element. |

<a name="element+setClass"></a>

### element.setClass(...classList) ⇒ <code>Element</code>
Adds one or more classes to the element after removing all previous classes.

**Kind**: instance method of [<code>element</code>](#element)  

| Param | Type | Description |
| --- | --- | --- |
| ...classList | <code>string</code> | Class to apply to element. |

<a name="element+removeClass"></a>

### element.removeClass(...classList) ⇒ <code>Element</code>
Identical to [Element.classList.remove](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove) but returns the {Element}

**Kind**: instance method of [<code>element</code>](#element)  
**See**: [Element.classList.remove](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove)  

| Param | Type | Description |
| --- | --- | --- |
| ...classList | <code>string</code> | Class to remove from element. |

<a name="element+setHTML"></a>

### element.setHTML(html) ⇒ <code>Element</code>
Identical to [Element.innerHTML = html](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) but returns the {Element}

**Kind**: instance method of [<code>element</code>](#element)  
**See**: [Element.innerHTML = html](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)  

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | HTML markup to set as the innerHTML of the element |

<a name="element+addAttribute"></a>

### element.addAttribute(name, [value]) ⇒ <code>Element</code>
Identical to [Element.setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) but returns the {Element}

**Kind**: instance method of [<code>element</code>](#element)  
**See**: [Element.setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)  

| Param | Type | Default |
| --- | --- | --- |
| name | <code>string</code> |  | 
| [value] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | 

<a name="element+setId"></a>

### element.setId(id) ⇒ <code>Element</code>
Identical to [Element.id = id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id) but returns the {Element}

**Kind**: instance method of [<code>element</code>](#element)  
**See**: [Element.id = id](https://developer.mozilla.org/en-US/docs/Web/API/Element/id)  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="element+setSrc"></a>

### element.setSrc(src) ⇒ <code>Element</code>
Identical to [Element.src = src](https://developer.mozilla.org/en-US/docs/Web/API/Element/src) but returns the {Element} and also more reliable

**Kind**: instance method of [<code>element</code>](#element)  
**See**: [Element.src = src](https://developer.mozilla.org/en-US/docs/Web/API/Element/src)  

| Param | Type |
| --- | --- |
| src | <code>string</code> | 

<a name="element+setType"></a>

### element.setType(type) ⇒ <code>Element</code>
Identical to [Element.type = type](https://developer.mozilla.org/en-US/docs/Web/API/Element/type) but returns the {Element} and also more reliable

**Kind**: instance method of [<code>element</code>](#element)  
**See**: [Element.type = type](https://developer.mozilla.org/en-US/docs/Web/API/Element/type)  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="element+setValue"></a>

### element.setValue(value) ⇒ <code>Element</code>
Identical to [Element.value = value](https://developer.mozilla.org/en-US/docs/Web/API/Element/value) but returns the {Element} and also more reliable

**Kind**: instance method of [<code>element</code>](#element)  
**See**: [Element.value = value](https://developer.mozilla.org/en-US/docs/Web/API/Element/value)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="element+Append"></a>

### element.Append(...elements) ⇒ <code>Element</code>
Identical to [Element.append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append) but returns the {Element}

**Kind**: instance method of [<code>element</code>](#element)  
**See**: [Element.append](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)  

| Param | Type |
| --- | --- |
| ...elements | <code>Element</code> | 

<a name="element+Prepend"></a>

### element.Prepend(...elements) ⇒ <code>Element</code>
Identical to [Element.prepend](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend) but returns the {Element}

**Kind**: instance method of [<code>element</code>](#element)  
**See**: [Element.prepend](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend)  

| Param | Type |
| --- | --- |
| ...elements | <code>Element</code> | 

<a name="element+addJs"></a>

### element.addJs(function, [...arguments]) ⇒ <code>Element</code>
Add a JavaScript snippet to the rendered document.The snippets will only be ran at client.The function must be anonymous where the first argument is the element and the rest is the arguments provided in this call.Objects will be JSON stringified while all other argumnets will be stringified with their .toString() method.

**Kind**: instance method of [<code>element</code>](#element)  

| Param | Type |
| --- | --- |
| function | <code>function</code> | 
| [...arguments] | <code>any</code> | 

**Example** *(Log the elements inner text to the console)*  
```js
element.addJs((el) => console.log(el.innerText));
```
**Example** *(Pass local server-side variables)*  
```js
const num = 5;
element.addJs((el, n) => el.innerHTML = n, num);
```
<a name="element+addCss"></a>

### element.addCss(styles) ⇒ <code>Element</code>
Add a CSS snippet to the rendered document.If styles is a string, it will be put inside of a declaration block selecting the elementIf styles is an object, it will be handled as if every key is a property with the value as a value.

**Kind**: instance method of [<code>element</code>](#element)  

| Param | Type |
| --- | --- |
| styles | <code>object</code> \| <code>string</code> | 

**Example** *(Usage with string)*  
```js
element.addCss(`
 font-size: 2em;
 border-radius: 5px;
`);
 
```
**Example** *(Usage with object)*  
```js
element.addCss({
 "font-size": "2em",
 "border-radius": "5px"
});
```
