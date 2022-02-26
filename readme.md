<a name="Fepp"></a>

## Fepp
**Kind**: global class  
**See**: setClass  

* [Fepp](#Fepp)
    * [new Fepp([tagName], [...classList])](#new_Fepp_new)
    * _instance_
        * [.classes](#Fepp+classes) : <code>Array.&lt;string&gt;</code>
        * [.innerHTML](#Fepp+innerHTML) : <code>string</code>
        * [.attributes](#Fepp+attributes) : <code>Array.&lt;string&gt;</code>
        * [.id](#Fepp+id) : <code>string</code>
        * [.src](#Fepp+src) : <code>string</code>
        * [.type](#Fepp+type) : <code>string</code>
        * [.value](#Fepp+value) : <code>string</code>
        * [.addClass(...classList)](#Fepp+addClass) ⇒
        * [.setClass(...classList)](#Fepp+setClass) ⇒
        * [.removeClass(...classList)](#Fepp+removeClass) ⇒
        * [.setHTML(html)](#Fepp+setHTML) ⇒
        * [.setAttribute(name, value)](#Fepp+setAttribute) ⇒
        * [.setId(id)](#Fepp+setId) ⇒
        * [.setSrc(src)](#Fepp+setSrc) ⇒
        * [.setType(type)](#Fepp+setType) ⇒
        * [.setValue(value)](#Fepp+setValue) ⇒
        * [.addJs(function, ...arguments)](#Fepp+addJs) ⇒
        * [.addCss(styles)](#Fepp+addCss) ⇒
    * _static_
        * [.render()](#Fepp.render) ⇒ <code>string</code>

<a name="new_Fepp_new"></a>

### new Fepp([tagName], [...classList])
Creates an instance of Element.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;&#x27;div&#x27;&quot;</code> | The desired radius of the circle. |
| [...classList] | <code>string</code> |  | Class to apply to element. |

<a name="Fepp+classes"></a>

### fepp.classes : <code>Array.&lt;string&gt;</code>
**Kind**: instance property of [<code>Fepp</code>](#Fepp)  
<a name="Fepp+innerHTML"></a>

### fepp.innerHTML : <code>string</code>
**Kind**: instance property of [<code>Fepp</code>](#Fepp)  
<a name="Fepp+attributes"></a>

### fepp.attributes : <code>Array.&lt;string&gt;</code>
**Kind**: instance property of [<code>Fepp</code>](#Fepp)  
<a name="Fepp+id"></a>

### fepp.id : <code>string</code>
**Kind**: instance property of [<code>Fepp</code>](#Fepp)  
<a name="Fepp+src"></a>

### fepp.src : <code>string</code>
**Kind**: instance property of [<code>Fepp</code>](#Fepp)  
<a name="Fepp+type"></a>

### fepp.type : <code>string</code>
**Kind**: instance property of [<code>Fepp</code>](#Fepp)  
<a name="Fepp+value"></a>

### fepp.value : <code>string</code>
**Kind**: instance property of [<code>Fepp</code>](#Fepp)  
<a name="Fepp+addClass"></a>

### fepp.addClass(...classList) ⇒
Adds one or more classes to the element.

**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

| Param | Type | Description |
| --- | --- | --- |
| ...classList | <code>string</code> | Class to apply to element. |

<a name="Fepp+setClass"></a>

### fepp.setClass(...classList) ⇒
Adds one or more classes to the element after removing all previous classes.

**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

| Param | Type | Description |
| --- | --- | --- |
| ...classList | <code>string</code> | Class to apply to element. |

<a name="Fepp+removeClass"></a>

### fepp.removeClass(...classList) ⇒
Removes one or more classes from the element.

**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

| Param | Type | Description |
| --- | --- | --- |
| ...classList | <code>string</code> | Class to remove from element. |

<a name="Fepp+setHTML"></a>

### fepp.setHTML(html) ⇒
**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

| Param | Type |
| --- | --- |
| html | <code>string</code> | 

<a name="Fepp+setAttribute"></a>

### fepp.setAttribute(name, value) ⇒
**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 
| value | <code>string</code> | 

<a name="Fepp+setId"></a>

### fepp.setId(id) ⇒
**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

| Param | Type |
| --- | --- |
| id | <code>string</code> | 

<a name="Fepp+setSrc"></a>

### fepp.setSrc(src) ⇒
**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

| Param | Type |
| --- | --- |
| src | <code>string</code> | 

<a name="Fepp+setType"></a>

### fepp.setType(type) ⇒
**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="Fepp+setValue"></a>

### fepp.setValue(value) ⇒
**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

| Param | Type |
| --- | --- |
| value | <code>string</code> | 

<a name="Fepp+addJs"></a>

### fepp.addJs(function, ...arguments) ⇒
Add a JavaScript snippet to the rendered document.All snippets will only be ran at client.The function must be anonymous where the first argument is the element and the rest is the arguments provided in this call.Objects will be JSON stringified while all other argumnets will become a string through their .toString() method.

**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

| Param | Type |
| --- | --- |
| function | <code>function</code> | 
| ...arguments | <code>any</code> | 

**Example** *(Log the elements inner text to the console)*  
```js
element.addJs((el) => console.log(el.innerText));
```
**Example** *(Pass local server-side variables)*  
```js
const num = 5;
element.addJs((el, n) => el.innerHTML = n, num);
```
<a name="Fepp+addCss"></a>

### fepp.addCss(styles) ⇒
Add a CSS snippet to the rendered document.If styles is a string, it will be put inside of a declaration block selecting the elementIf styles is an object, it will be handled as if every key is a property with the value as a value.

**Kind**: instance method of [<code>Fepp</code>](#Fepp)  
**Returns**: [Element](Element)  

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
<a name="Fepp.render"></a>

### Fepp.render() ⇒ <code>string</code>
Applies all styles and scripts and returns the HTML string of the document.

**Kind**: static method of [<code>Fepp</code>](#Fepp)  
**Returns**: <code>string</code> - the HTML page  
