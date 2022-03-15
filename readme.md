## Functions

<dl>
<dt><a href="#newDocument">newDocument()</a> ⇒ <code><a href="#document">document</a></code></dt>
<dd><p>Creates an instance of Document.
Is ran once at setup</p>
</dd>
<dt><a href="#newElement">newElement([tagName], [...classList])</a> ⇒ <code>element</code></dt>
<dd><p>Creates an instance of Element.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#document">document</a> : <code>external:document</code></dt>
<dd><p>The document class from jsdom.</p>
</dd>
<dt><a href="#document">document</a> : <code>external:element</code></dt>
<dd><p>The element class from jsdom.</p>
</dd>
</dl>

<a name="newDocument"></a>

## newDocument() ⇒ [<code>document</code>](#document)
Creates an instance of Document.Is ran once at setup

**Kind**: global function  
<a name="newElement"></a>

## newElement([tagName], [...classList]) ⇒ <code>element</code>
Creates an instance of Element.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;div&quot;</code> | The tag type. |
| [...classList] | <code>string</code> |  | Class to apply to element. |

<a name="document"></a>

## document : <code>external:document</code>
The document class from jsdom.

**Kind**: global typedef  
**See**: [document](https://developer.mozilla.org/en-US/docs/Web/API/document)  

* [document](#document) : <code>external:document</code>
    * [.setTitle(title)](#document+setTitle) ⇒ <code>string</code>
    * [.clearDocument()](#document+clearDocument) ⇒
    * [.addJs(function, [...arguments])](#document+addJs) ⇒ <code>Element</code>
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

### document.clearDocument() ⇒
Replaces the main document with a new one.

**Kind**: instance method of [<code>document</code>](#document)  
**Returns**: {@external document}  
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
<a name="document"></a>

## document : <code>external:element</code>
The element class from jsdom.

**Kind**: global typedef  
**See**

- [element](https://developer.mozilla.org/en-US/docs/Web/API/element)
- [jsdom](https://www.npmjs.com/package/jsdom)
- [WHATWG DOM standards](https://dom.spec.whatwg.org/)


* [document](#document) : <code>external:element</code>
    * [.setTitle(title)](#document+setTitle) ⇒ <code>string</code>
    * [.clearDocument()](#document+clearDocument) ⇒
    * [.addJs(function, [...arguments])](#document+addJs) ⇒ <code>Element</code>
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

### document.clearDocument() ⇒
Replaces the main document with a new one.

**Kind**: instance method of [<code>document</code>](#document)  
**Returns**: {@external document}  
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
