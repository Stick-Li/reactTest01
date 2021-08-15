import { assertLiteral } from '@babel/types'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Loading from '../2_lazyLoad/Loading'


// 类式组件


class Demo extends Component {

    state = {count:0}

    myRef = React.createRef()

    add = () => {
        this.setState(state=>({count:state.count+1}));
        // 返回的地方包了一个小括号:
        // 因为返回的是对象啊，直接写花括号，会认为是函数体
        // 不包小括号的话,js引擎会认为那个大括号是代码块的意思
        // 加括号的那个：是箭头函数的返回值简写 返回对象时需要加的括号 不然会和 方法体的花括号混淆
    }

    show =()=>{
        alert(this.myRef.current.value)
    }

    unmout=()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState(state=>({count:state.count+1}));
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }
    
    render() {
        return (
            <div>
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我加一</button>

                <input type="text" ref={this.myRef}/>
                <button onClick={this.show}>点我提示数据</button>

                <button onClick={this.unmout}>卸载</button>
            </div>
        )
    }
}





// 函数式组件


/**

function Demo (){

    console.log('Demo')

    const [count,setCount] = React.useState(0)
    const [name,setName] = React.useState('stick')

    const myRef = React.useRef()

    // didmount didupdate willunmount
    React.useEffect(()=>{
        let timer = setInterval(() => {
            setCount(count=>count+1)
        }, 1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])

    // 加的回调
    function add(){
        // setCount(count+1)   //第一种写法
        setCount(count => count+1)
    }

    function changeName(){
        setName('ginger')
    }

    // 提示输入的回调
    function show(){
        alert(myRef.current.value)
    }

    function unmout(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    return (
        <div>
            <h2>当前求和为{count}</h2>
            <button onClick={add}>点我加一</button>

            <h2>我的名字是{name}</h2>
            <button onClick={changeName}>点我改名</button>

            <input type="text" ref={myRef}/>
            <button onClick={show}>点我提示数据</button>

            <hr/>
            <button onClick={unmout}>卸载</button>

        </div>
    )
}

 */




export default Demo
