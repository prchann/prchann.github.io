# jQuery

## `$(document).ready()`

```javascript
// 当 DOM 加载完成时，运行代码
$(document).ready(function() {

});

// shorthand
$(function() {

});


// 当整个页面（包括 DOM, images, iframes 等资源）加载完成时，运行代码
window.onload = function() {

};

// 或者
$(window).on('load', function() {

})
```

## Attributes

```javascript
// set
$().attr('key', 'value');
// set patch
$().attr({
  key0: 'v0',
  key1: 'v1'
});

// get
const v0 = $().attr('key');
```

## Selecting Elements

选择器应：

* 尽可能短；
* 尽可能精准。

```javascript
$('#myId'); // ID: 要求在页面中唯一。
$('.myClass'); // 类
$("input[name='first_name']"); // 属性
$("#contents ul.people li"); // CSS 组合
$("div.myClass, ul.people"); // 列表：用逗号分割

// 伪类
$( "a.external:first" ); // 第一个
$( "tr:odd" ); // 奇数

$( "#myForm :input" ); // 全部 input-like 元素
$( "div:visible" ); // 可见
$( "div:gt(2)" ); // 第二个及以后
$( "div:animated" ); // 全部正在运动的 div


// 判断是否有选中元素
if ( $('div.foo').length ) {

}


// 提炼，过滤
$( "div.foo" ).has( "p" );         // div.foo elements that contain <p> tags
$( "h1" ).not( ".bar" );           // h1 elements that don't have a class of bar
$( "ul li" ).filter( ".current" ); // unordered list items with class of current
$( "ul li" ).first();              // just the first unordered list item
$( "ul li" ).eq( 5 );              // the sixth


// 选择表单元素
$( "form :checked" ); // 包含已勾选的 checkbox, radio, select
$( "form :disabled" );
$( "form :enabled" );
$( "form :input" ); // 包含 input, textarea, select, and button
$( "form :selected" );

// 根据类型筛选
// :password
// :reset
// :radio
// :text
// :submit
// :checkbox
// :button
// :image
// :file
```

## Working with Selections

赋值时，影响选择器中的全部元素；取值时，仅获取选择器中第一个元素的值（`.text()` 除外，它获取全部元素的值）。

链式：

```javascript
$( "#content" )
    .find( "h3" )
    .eq( 2 )
    .html( "new text for the third h3!" );
```

用 `.end()` 来返回到原先的选择：

```javascript
$( "#content" )
    .find( "h3" )
    .eq( 2 )
        .html( "new text for the third h3!" )
        .end() // Restores the selection to all h3s in #content
    .eq( 0 )
        .html( "new text for the first h3!" );
```

## Manipulating Elements

Getting and Setting Information About Elements

* `.html()` – Get or set the HTML contents.
* `.text()` – Get or set the text contents; HTML will be stripped.
* `.attr()` – Get or set the value of the provided attribute.
* `.width()` – Get or set the width in pixels of the first element in the selection as an integer.
* `.height()` – Get or set the height in pixels of the first element in the selection as an integer.
* `.position()` – Get an object with position information for the first element in the selection, relative to its first positioned ancestor. This is a getter only.
* `.val()` – Get or set the value of form elements.

Moving, Copying, and Removing Elements

[https://learn.jquery.com/using-jquery-core/manipulating-elements/](https://learn.jquery.com/using-jquery-core/manipulating-elements/)
