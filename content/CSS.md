# CSS面试题

## CSS盒模型

CSS盒模型本质上是一个盒子，封装周围的HTML元素，它包括：边距(margin)，边框(border)，填充(padding)，和实际内容(content)，又因为IE特性，存在**标准盒模型**和**怪异盒模型**。


```
标准盒模型
盒子实际宽度（高度）= width(内容(content) + 边框(border) + 填充(padding) + 间隔(margin))

怪异盒模型
盒子实际宽度（高度）= width(内容(content) + 边框(border) + 填充(padding)) + 间隔(margin)
```

## 清除浮动

**原因**：是为了清除使用浮动元素产生的影响。浮动的元素，高度会塌陷，而高度的塌陷使我们页面后面的布局不能正常显示

```
.clearfix::before, .clearfix::after {
	content: " ";
	display: table;
}
.clearfix::after {
	clear: both;
}
.clearfix {
	*zoom: 1;
}  	
```

## link和@import的区别

- link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;
- 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
- import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;
- link支持使用js控制DOM去改变样式，而@import不支持;

## 元素居中

**水平居中**

```CSS
margin: 0 auto;

```

**水平垂直居中**

```
 div {
 	position: absolute;
 	width: 300px;
 	height: 300px;
 	margin: auto;
 	top: 0;
 	left: 0;
 	bottom: 0;
 	right: 0;
 	background-color: pink;	/* 方便看效果 */
}
```

```
div {
 	position: relative;		/* 相对定位或绝对定位均可 */
 	width:500px;
 	height:300px;
 	top: 50%;
 	left: 50%;
 	margin: -150px 0 0 -250px;     	/* 外边距为自身宽高的一半 */
}
```

```
div {
 	position: absolute;		/* 相对定位或绝对定位均可 */
 	width:500px;
 	height:300px;
 	top: 50%;
 	left: 50%;
 	transform: translate(-50%, -50%);
}
```

```
利用 flex 布局
实际使用时应考虑兼容性

.container {
 	display: flex;
 	align-items: center; 		/* 垂直居中 */
 	justify-content: center;	/* 水平居中 */

}
.container div {
 	width: 100px;
 	height: 100px;
}  
```