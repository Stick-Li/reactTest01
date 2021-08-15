import React, { Component } from 'react'

export default class Parents extends Component {
    state={carName:'奔驰'}
    change=()=>{
        this.setState({ carName:'迈巴赫'  });
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log(this.props,this.state)      //目前的props和state
        console.log(nextProps,nextState)        //接下来要变化的目标props

        if (this.state.carName === nextState.carName) return false
        else return true
        // return !this.state.carName === nextState.carName
    }
    render() {
        console.log('Parent---render')
        const {carName} = this.state
        return (
            <div>
                <h2>我是Parent组件</h2>
                <span>我的名字是{carName}</span>
                <br/>
                <button onClick={this.change}>点击换名字</button>
                <Child carName={carName}/>
            </div>
        )
    }
}

class Child extends Component {
    shouldComponentUpdate(nextProps,nextState){
        console.log(this.props,this.state)      //目前的props和state
        console.log(nextProps,nextState)        //接下来要变化的目标props

        return !this.props.carName === nextProps.carName
    }
    render() {
        console.log('Child---render')
        return (
            <div>
                <h2>我是Child组件</h2>
                <span>我接到的车是{this.props.carName}</span>
            </div>
        )
    }
}

// 父组件状态一更新，react就会重新调render


// import React, { PureComponent } from 'react'
// import './index.css'

// export default class Parent extends PureComponent {

// 	state = {carName:"奔驰c36",stus:['小张','小李','小王']}

// 	addStu = ()=>{
// 		/* const {stus} = this.state
// 		stus.unshift('小刘')
// 		this.setState({stus}) */

// 		const {stus} = this.state
// 		this.setState({stus:['小刘',...stus]})
// 	}

// 	changeCar = ()=>{
// 		//this.setState({carName:'迈巴赫'})

// 		const obj = this.state
// 		obj.carName = '迈巴赫'
// 		console.log(obj === this.state);
// 		this.setState(obj)
// 	}

// 	/* shouldComponentUpdate(nextProps,nextState){
// 		// console.log(this.props,this.state); //目前的props和state
// 		// console.log(nextProps,nextState); //接下要变化的目标props，目标state
// 		return !this.state.carName === nextState.carName
// 	} */

// 	render() {
// 		console.log('Parent---render');
// 		const {carName} = this.state
// 		return (
// 			<div className="parent">
// 				<h3>我是Parent组件</h3>
// 				{this.state.stus}&nbsp;
// 				<span>我的车名字是：{carName}</span><br/>
// 				<button onClick={this.changeCar}>点我换车</button>
// 				<button onClick={this.addStu}>添加一个小刘</button>
// 				<Child carName="奥拓"/>
// 			</div>
// 		)
// 	}
// }

// class Child extends PureComponent {

// 	/* shouldComponentUpdate(nextProps,nextState){
// 		console.log(this.props,this.state); //目前的props和state
// 		console.log(nextProps,nextState); //接下要变化的目标props，目标state
// 		return !this.props.carName === nextProps.carName
// 	} */

// 	render() {
// 		console.log('Child---render');
// 		return (
// 			<div className="child">
// 				<h3>我是Child组件</h3>
// 				<span>我接到的车是：{this.props.carName}</span>
// 			</div>
// 		)
// 	}
// }
