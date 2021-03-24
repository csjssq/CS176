## 运行方法
  - 1. node http.js 打开8080端口即可 http://localhost:8080/index.html
       提前安装好npm install express 上传时并没有上传node_modules文件夹（小文件数目太多了）
       在本地测试时使用此方法或者下面两种方法（都已经测试过）
  - 2. 或者利用vscode 插件 live server 打开
  - 3. 或者利用xampp apache start

## 效果演示
  - 前面仍然有部分假div，与后面ajax加载做区别
  - 实现了下拉加载更多，json共10条数据，因此设置了提示“我是有底线的”
  - 时间戳的相对更新，因为json文件是静态的，没有找到接口，所以相对时间基本上都是1天前
    因此展示了具体时间
  - affix插件不可用，故重写JavaScript实现附加导航滑动到顶部后固定
    <img src="demo.gif"></img>
  - 侧边栏和天气控件的效果暂未实现
  - 如果在100%的缩放下不可用，放大一点就好

## 数据来源
  - 由于使用的是静态json，故从头条的network中分析XHR文件找到
  ```
  https://www.toutiao.com/api/pc/feed/?max_behot_time=**XXXX**
  &category=__all__&utm_source=toutiao
  &widen=1&tadrequire=true
  &_signature=**XXXX**
  ```
  分析处理，发现其中的json是Unicode编码，利用utf-8重新编码保存
