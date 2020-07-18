<h1 align="center">👋vue-print</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D%208.9.4-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D%203.0.0-blue.svg" />
  <img alt="License: MIT" src="https://travis-ci.org/theshying/vue-print.svg?branch=master" />
  <a href="https://github.com/theshying/vue-print#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/theshying/element-admin-pro/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>

</p>

> 基于vue的一个打印任意dom区域的插件
### [在线预览(兼容IE9+)](https://theshying.github.io/vue-prinf)

## Introduction
vue-print是一个能够打印任意dom区域的vue插件，秉承所见即所得的原则



## How to do
采用iframe来将打印区域构建一个新的document，然后利用原生的window.print来实现


## How to use

```sh
npm install @theshy/vue-print --save
```

```javascript
//在main.js引入并注册
import vuePrint from '@theshy/vue-print'
Vue.use(vuePrint)

//在组件App.vue中

<template>
    <button @click="prinfHandle">print</button>
    <div ref="view">
      <p>asdasd</p>
      <p>asd</p>
      <p>asdad</p>
    </div>
</template>

<script>
export default {
    name: "App",
    methods: {
        prinfHandle() {
            this.$p({
                el: 'this.$refs.view',   //打印目标dom节点，eg: this.refs.view
                debug: true,             //打开调试模式，会显示iframe,
                importCss: true,         //引入head 中的link stylesheet
                importStyle: true,       //引入style标签中的样式
                loadCss: [],             //需要载入的第三方样式表
                title: '',               //打印标题
                delay: 300,              //延迟打印时间，确保iframe中的静态资源加载完成
                beforePrinfHandle: null, //打开打印窗口前的钩子函数,可以针对打印文档进行自定义调整，接受一个document参数
                afterPrintHandle: null,  //打印完成的钩子函数,
            });
        }
    },
};
</script>
```


## License
This project is [MIT](https://github.com/theshying/vue-print/blob/master/LICENSE) licensed.
