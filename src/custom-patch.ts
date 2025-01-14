import { getConfig } from "./config";

let Popover:any = {};

// 自定义所选遮罩宽高 将设置元素获取的宽高值改变
export function setElementWidthAndHeight(element:Element){
    let el = element.getBoundingClientRect();
    
    Popover.width &&  handleWidthAndHeight(el,'width')
    Popover.height &&  handleWidthAndHeight(el,'height')

    return el;
}

//支持函数和数字形式，函数是为了动态设置宽度高度
function handleWidthAndHeight(el:any,property:string){
    const _Popover = Popover[property];
    el[property] = typeof _Popover === 'function'?_Popover():_Popover
}

// 自定义步骤 stagePadding， 显示层级大于全局 stagePadding 配置
export function setStepPadding(){
    // 否则就是配置所有边
    const pd = Popover.stagePadding;
    return !isNaN(pd) ? pd : getConfig("stagePadding") || 0
}

// 获取当前步骤的Popover配置 现在对 {width,height,stagePadding} 做了处理
export function setCurStepPopover(op:any){
    Popover = op
};