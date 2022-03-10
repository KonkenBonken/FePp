## Functions

<dl>
<dt><a href="#newDocument">newDocument()</a> ⇐ <code><a href="#external_document">document</a></code></dt>
<dd><p>Creates an instance of Document.
Is ran once at setup</p>
</dd>
<dt><a href="#newElement">newElement([tagName], [...classList])</a> ⇐ <code><a href="#external_element">element</a></code></dt>
<dd><p>Creates an instance of Element.</p>
</dd>
</dl>

## External

<dl>
<dt><a href="#external_document">document</a></dt>
<dd><p>The document class from jsdom.</p>
</dd>
<dt><a href="#external_element">element</a></dt>
<dd><p>The element class from jsdom.</p>
</dd>
</dl>

<a name="newDocument"></a>

## newDocument() ⇐ [<code>document</code>](#external_document)
Creates an instance of Document.Is ran once at setup

**Kind**: global function  
**Extends**: [<code>document</code>](#external_document)  
<a name="newElement"></a>

## newElement([tagName], [...classList]) ⇐ [<code>element</code>](#external_element)
Creates an instance of Element.

**Kind**: global function  
**Extends**: [<code>element</code>](#external_element)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;div&quot;</code> | The tag type. |
| [...classList] | <code>string</code> |  | Class to apply to element. |

<a name="external_document"></a>

## document
The document class from jsdom.

**Kind**: global external  
**See**: https://developer.mozilla.org/en-US/docs/Web/API/document  
<a name="external_element"></a>

## element
The element class from jsdom.

**Kind**: global external  
**See**

- [element](https://developer.mozilla.org/en-US/docs/Web/API/element)
- [jsdom](https://www.npmjs.com/package/jsdom)
- [WHATWG DOM standards](https://dom.spec.whatwg.org/)

