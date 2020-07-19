<template>
    <div style="padding: 20px">
        <div class="title">配置参数(可调整配置参数查看打印效果)</div>
       <el-row >
           <el-col span="12" style="margin-right: 20px">
               <el-input type="textarea" rows="10" v-model="options"></el-input>
           </el-col>
           <el-col span="10">
                <el-button type="primary" size="mini" @click="prinfHandle">打印</el-button>
           </el-col>
       </el-row>
       <div ref="view" class="container">
            <p>
                跑车的英文名是SportsCar或SportyCar，属于一种低底盘、线条流畅、动力突出的汽车类型，其最大特点是不断追求速度极限。跑车的分类有很多种，按车身结构可分为轿跑、敞篷跑车、双门跑车，按价值可分为平民跑车、超级跑车。
          </p>
           <div class="img-list">
               <img src="./assets/1.jpg" alt="">
               <img src="./assets/2.jpg" alt="">
               <img src="./assets/3.jpg" alt="">
               <img src="./assets/4.jpg" alt="">
               <img src="./assets/5.jpg" alt="">
               <img src="./assets/6.jpg" alt="">
           </div>
         
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
                debug: false,        //打开调试模式，会显示iframe,
                importCss: true,     //引入head 中的link stylesheet
                importStyle: true,   //引入style标签中的样式
                loadCss: [],         //需要载入的第三方样式表
                title: '测试界面',          //打印标题
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

<style lang="less">
body, html{
    width: 100%;
    padding: 0;
    margin: 0;
}
.title{
    padding: 5px 0;
}
.container {
    white-space: pre-wrap;
    p{
        padding-left: 0;
        line-height: 1.5;
        color: red;
    }

    .img-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        &>img{
            flex-shrink: 1;
            width: 300px;
            margin: 20px;
        }

    }

}
</style>
