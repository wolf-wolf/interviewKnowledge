# 基础知识

## cookies，sessionStorage和localStorage的区别

cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）。
cookie数据始终在同源的http请求中携带（即使不需要），会在浏览器和服务器间来回传递。
sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

**存储大小：**

cookie数据大小不能超过4k。

sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

**有期时间：**

***localStorage***：存储持久数据，浏览器关闭后数据不丢失除非主动删除数据

***sessionStorage***：数据在当前浏览器窗口关闭后自动删除

***cookie***：设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

## 页面从输入URL到加载显示完成，过程中发生了什么？（流程说的越详细越好）

**详细版**

1. 浏览器会开启一个线程来处理这个请求，对 URL 分析判断如果是 http 协议就按照 Web 方式来处理;
2. 调用浏览器内核中的对应方法，比如 WebView 中的 loadUrl 方法;
3. 通过DNS解析获取网址的IP地址，设置 UA 等信息发出第二个GET请求;
4. 进行HTTP协议会话，客户端发送报头(请求报头);
5. 进入到web服务器上的 Web Server，如 Apache、Tomcat、Node.JS 等服务器;
6. 进入部署好的后端应用，如 PHP、Java、JavaScript、Python 等，找到对应的请求处理;
7. 处理结束回馈报头，此处如果浏览器访问过，缓存上有对应资源，会与服务器最后修改时间对比，一致则返回304;
8. 浏览器开始下载html文档(响应报头，状态码200)，同时使用缓存;
9. 文档树(DOM Tree)建立，构建渲染树(Render Tree)
10. 根据标记请求所需指定MIME类型的文件（比如css、js，音频，视频），同时设置了cookie;
11. 页面绘制元素，JS根据DOM API操作DOM，执行事件绑定等，页面显示完成。

**简洁版**

1. 浏览器根据请求的URL交给DNS域名解析，找到真实IP，向服务器发起请求；
2. 服务器交给后台处理完成后返回数据，浏览器接收文件（HTML、JS、CSS、图象等）；
3. 浏览器对加载到的资源（HTML、JS、CSS等）进行语法解析，建立相应的内部数据结构（如HTML的DOM）；
4. 载入解析到的资源文件，渲染页面，完成。

**参考**

[从输入URL到页面展示的详细过程](https://blog.csdn.net/wlk2064819994/article/details/79756669)

## MVC，MVVM都是什么

**MVC：**模式代表Model-View-Controller（模型-视图-控制器） 模式。这种模式用于应用程序的分层开发。

**MVVM：**定义MVVM是Model-View-ViewModel的简写。即模型-视图-视图模型。【模型】指的是后端传递的数据。【视图】指的是所看到的页面。【视图模型】mvvm模式的核心，它是连接view和model的桥梁。它有两个方向：一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。二是将【视图】转化成【模型】，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听。这两个方向都实现的，我们称之为数据的双向绑定。总结：在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的这种变化，然后通知到对应的视图做自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上就实现了数据的双向绑定。并且MVVM中的View 和 ViewModel可以互相通信。

[什么是MVVM，MVC和MVVM的区别，MVVM框架VUE实现原理](https://blog.csdn.net/lm278858445/article/details/97635207)


