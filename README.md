# Learning JavaScript

| var             | let                            |
| --------------- | ------------------------------ |
| old version     | new version of js(ES5, ES2015) |
| Function Scoped | Block Scoped                   |

## Rule of Naming Javascript Variables

1. Variable names mush strt with either a `latter`, an underscopre `_` , or the dollar sign `$`
2. In Javascript, the vaible names are generally wirte in camelCase if it has multiple words.

## Javascript Data Types

<div class="table-responsive" bis_skin_checked="1"
>
	<table border="0">
		<tbody>
			<tr>
				<td>Data Types</td>
				<td>Description</td>
				<td>Example</td>
			</tr>
			<tr>
				<td><code>String</code></td>
				<td>represents textual data</td>
				<td><code>'hello'</code>, <code>"hello world!"</code> etc</td>
			</tr>
			<tr>
				<td><code>Number</code></td>
				<td>an integer or a floating-point number</td>
				<td><code>3</code>, <code>3.234</code>, <code>3e-2</code> etc.</td>
			</tr>
			<tr>
				<td><code>BigInt</code></td>
				<td>an integer with arbitrary precision</td>
				<td><code>900719925124740999n</code> , <code>1n</code> etc.</td>
			</tr>
			<tr>
				<td><code>Boolean</code></td>
				<td>Any of two values: true or false</td>
				<td><code>true</code> and <code>false</code></td>
			</tr>
			<tr>
				<td><code>undefined</code></td>
				<td>a data type whose variable is not initialized</td>
				<td><code>let a;</code></td>
			</tr>
			<tr>
				<td><code>null</code></td>
				<td>denotes a <code>null</code> value</td>
				<td><code>let a = null;</code></td>
			</tr>
			<tr>
				<td><code>Symbol</code></td>
				<td>data type whose instances are unique and immutable</td>
				<td><code>let value = Symbol('hello');</code></td>
			</tr>
			<tr>
				<td><code>Object</code></td>
				<td>key-value pairs of collection of data</td>
				<td><code>let student = { };</code></td>
			</tr>
		</tbody>
	</table>
</div>

> We cannot do operation on BitInt and number

> In Symbol type even value the same but js will allocate different memory location

> To show type of some vaible we can use `typeof`

- use (a, b, c) return the last element `c`
- instanceof return `true` if the specified object of the specified object type

## Type conversion

Type conversion is th eprocess of converting data type of one type to another type, For example converting `string` data to `number`

> When any type added to a string, Javascript converts the number to string before concatenation.

<div>
<div class="code-editor" bis_skin_checked="1">
<div class="code-editor__area" bis_skin_checked="1"><pre 
<span>numberic string use with -. /, * results number type</span>
<span class="hljs-keyword">let</span> result;
result = <span class="hljs-string">'4'</span> - <span class="hljs-string">'2'</span>;
<span class="hljs-built_in">console</span>.log(result); <span class="hljs-comment">// 2</span>
result = <span class="hljs-string">'4'</span> - <span class="hljs-number">2</span>;
<span class="hljs-built_in">console</span>.log(result); <span class="hljs-comment">// 2</span>
result = <span class="hljs-string">'4'</span> \* <span class="hljs-number">2</span>;
<span class="hljs-built_in">console</span>.log(result); <span class="hljs-comment">// 8</span>
result = <span class="hljs-string">'4'</span> / <span class="hljs-number">2</span>;
<span class="hljs-built_in">console</span>.log(result); <span class="hljs-comment">// 2</span></code></pre></div></div><div class="code-editor__action" bis_skin_checked="1">
</div>
</div>

> `===` Strict equal to: `true` if the operands are equal and of the same type

> `!==` Strict not equal to : `true` if the operte are equal but of different type or not equal at all

## Javascript Variable Scope

Scope refers to the availability of variables and functions in certain parts of the code.

In JavaScript, a variable has two types of scope:

1. Global Scope
2. Local Scope
3. \*Block Scope

## Javascript Objects

- `object Literal` is generally used to create a single object. The constructor function if useful to create Multiple objects

Adding Properties and Methods in an Object
we can add properties or methods in an object.

## Getter and Setter Methods

## Array in Javascript

Some of the commonly used JavaScript array methods are:

<div class="table-responsive" bis_skin_checked="1">
	<table border="0">
		<tbody>
			<tr>
				<th>Method</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>concat()</td>
				<td>joins two or more arrays and returns a result</td>
			</tr>
			<tr>
				<td>indexOf()</td>
				<td>searches an element of an array and returns its position</td>
			</tr>
			<tr>
				<td>find()</td>
				<td>returns the first value of an array element that passes a test</td>
			</tr>
			<tr>
				<td>findIndex()</td>
				<td>returns the first index of an array element that passes a test</td>
			</tr>
			<tr>
				<td>forEach()</td>
				<td>calls a function for each element</td>
			</tr>
			<tr>
				<td>includes()</td>
				<td>checks if an array contains a specified element</td>
			</tr>
			<tr>
				<td>push()</td>
				<td>aads a new element to the end of an array and returns the new length of an array</td>
			</tr>
			<tr>
				<td>unshift()</td>
				<td>adds a new element to the beginning of an array and returns the new length of an array</td>
			</tr>
			<tr>
				<td>pop()</td>
				<td>removes the last element of an array and returns the removed element</td>
			</tr>
			<tr>
				<td>shift()</td>
				<td>removes the first element of an array and returns the removed element</td>
			</tr>
			<tr>
				<td>sort()</td>
				<td>sorts the elements alphabetically in strings and in ascending order</td>
			</tr>
			<tr>
				<td>slice()</td>
				<td>selects the part of an array and returns the new array</td>
			</tr>
			<tr>
				<td>splice()</td>
				<td>removes or replaces existing elements and/or adds new elements</td>
			</tr>
		</tbody>
	</table>
</div>

## String in Javascript

Some of the commonly used JavaScript string methods are:

<div class="table-responsive" bis_skin_checked="1">
	<table border="0">
		<tbody>
			<tr>
				<th>Method</th>
				<th>Description</th>
			</tr>
			<tr>
				<td>charAt(index)</td>
				<td>returns the character at the specified index</td>
			</tr>
			<tr>
				<td>concat()</td>
				<td>joins two or more strings</td>
			</tr>
			<tr>
				<td>replace()</td>
				<td>replaces a string with another string</td>
			</tr>
			<tr>
				<td>split()</td>
				<td>converts the string to an array of strings</td>
			</tr>
			<tr>
				<td>substr(start, length)</td>
				<td>returns a part of a string</td>
			</tr>
			<tr>
				<td>substring(start,end)</td>
				<td>returns a part of a string</td>
			</tr>
			<tr>
				<td>slice(start, end)</td>
				<td>returns a part of a string</td>
			</tr>
			<tr>
				<td>toLowerCase()</td>
				<td>returns the passed string in lower case</td>
			</tr>
			<tr>
				<td>toUpperCase()</td>
				<td>returns the passed string in upper case</td>
			</tr>
			<tr>
				<td>trim()</td>
				<td>removes whitespace from the strings</td>
			</tr>
			<tr>
				<td>includes()</td>
				<td>searches for a string and returns a boolean value</td>
			</tr>
			<tr>
				<td>search()</td>
				<td>searches for a string and returns a position of a match</td>
			</tr>
		</tbody>
	</table>
</div>

> Use `\` operator to escape

## Arrorw function

The syntax of the arrow function is:

<pre style="max-height: 600px;"><code class="javascript hljs"><span class="hljs-keyword">let</span> myFunction = <span class="hljs-function">(<span class="hljs-params">arg1, arg2, ...argN</span>) =&gt;</span> {
    statement(s)
}</code></pre>
