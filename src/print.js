const defaultOptions = {
    el: '',              //打印目标dom节点，eg: this.refs.view
    debug: true,        //打开调试模式，会显示iframe,
    importCss: true,     //引入head 中的link stylesheet
    importStyle: true,   //引入style标签中的样式
    loadCss: [],         //需要载入的第三方样式表
    title: '',          //打印标题
    delay: 300,         //延迟打印时间，确保iframe中的静态资源加载完成
    beforePrinfHandle: null,  //打开打印窗口前的钩子函数,可以针对打印文档进行自定义调整，接受一个document参数
    afterPrintHandle: null,   //打印完成的钩子函数,
}
let iframe = null
let dom = null
/**
 * 检查配置是否合法
 * @param {*} options 
 */
const checkOptions = options => {
    if(!options.el) {
        throw new Error('el must be a nodeType')
    }
    return {
        ...defaultOptions,
        ...options
    }

}
const prinf = options => {
    const op = checkOptions(options)
    dom = op.el.cloneNode(true)
    const handle = createIframe(op)
    if(op.beforePrinfHandle) {
        op.beforePrinfHandle(handle.contentDocument);
    }
    if (op.afterPrintHandle) {
        op.afterPrintHandle();
    }
    setTimeout(() => {
        console.log(handle)
        handle.print();
        if (op.debug === false) {
            removeIframe();
        }
    }, op.delay)
}

const createIframe = (op) => {
    const { debug, importCss, importStyle, loadCss, title} = op 
    removeIframe();
    iframe = document.createElement('iframe');
    if(debug === false) {
        iframe.style.display = 'none'
    }
    //插入需要打印的目标元素
    document.querySelector('body').appendChild(iframe)
    iframe.contentDocument.title = title;
    const { body, head } = iframe.contentDocument;
    const contentWindow = iframe.contentWindow;
    //插入head中的link stylesheet
    if(importCss) {
        //
        const stylesheets = document.querySelectorAll("link[rel = 'stylesheet']")
        stylesheets.forEach(item => {
            head.appendChild(item.cloneNode(true))
        })
    }
    //插入style
    if (importStyle) {
        const stylesheets = document.querySelectorAll("style")
        stylesheets.forEach(item => {
            body.appendChild(item.cloneNode(true))
        })
    }
    if (Array.isArray(loadCss) && loadCss.length > 0) {
        loadCss.forEach(item => {
            head.appendChild(item)
        })
    }
    body.appendChild(dom)
    return contentWindow;
}
const removeIframe = () => {
    if (iframe) {
        document.querySelector('body').removeChild(iframe)
        iframe = null
    }
}

export default prinf