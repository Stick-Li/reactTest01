import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    state = {hasError:''}       //用于标识子组件是否产生错误

    // 当Parent组件的子组件出现报错时候，就会触发getDerivedStateFromError调用，并携带错误信息
    static getDerivedStateFromError(error){
        console.log("@@@错误@@@：",error)

        return {hasError:error}
        // 需要返回一个错误信息
    }

    // 渲染时子组件出现了一些错误，就会调componentDidCatch
    componentDidCatch(){
        console.log('（渲染组件时出错）此处统计错误，反馈给服务器，用于通知编码人员进行bug的解决')
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {
                    this.state.hasError ? <h2>当前网络不稳定，请稍后再试（。</h2> : <Child/>
                }
            </div>
        )
    }
}


// ps.getDerivedStateFromError可能不太稳定，需要yarn runbuild之后serve build才能在页面实现