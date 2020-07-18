<template>
    <div>
        <p>配置参数</p>
       <el-input type="textarea" rows="10" v-model="options"></el-input>
       <el-button type="primary" @click="prinfHandle">打印</el-button>
       <div ref="view">
           <p>asdasd</p>
           <p>asd</p>
           <p>asdad</p>
       </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            options: JSON.stringify({
                el: 'this.$refs.view',//打印目标dom节点，eg: this.refs.view
                debug: true,        //打开调试模式，会显示iframe,
                importCss: true,     //引入head 中的link stylesheet
                importStyle: true,   //引入style标签中的样式
                loadCss: [],         //需要载入的第三方样式表
                title: '',          //打印标题
                delay: 300,
                beforePrinfHandle: null,  //打开打印窗口前的钩子函数,可以针对打印文档进行自定义调整，接受一个document参数
                afterPrintHandle: null,   //打印完成的钩子函数,
            }, null, 4)
        }
    },
    methods: {
        prinfHandle() {
            this.$p({...JSON.parse(this.options), el: this.$refs.view});
        }
    },
};
</script>

<style>
p{
    color: red;
}
#app {
    width: 100%;
    height: 600px;
    border: 1px solid black;
    color: white;
    display: flex;
    flex-direction: column;
}
.box1 {
    background: green;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 10px solid #ccc
}
.box2 {
    background: blue;
}
</style>
