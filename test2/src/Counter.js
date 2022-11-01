import React, { Component } from 'react';
// import { prev } from 'dom7/dist/dom7.modular';

class Counter extends Component {
    constructor(props) {
       super(props)
       //state 초기화
       this.state = {
        number: 0,
        fixedNum: 0,
        number2: 0
       }
    }

    render() {
        const { number,fixedNum,number2 } = this.state

        return (
            <div>
                <h1>{number}</h1>
                <h2>고정숫자 : {fixedNum}</h2>
                <button onClick = {()=>{
                    this.setState({
                        number: number+1
                        
                    },()=>{
                     console.log('방금 호출되었습니다')
                     console.log(this.state)
                    })
                }}>+1</button>

                <h1>{number2}</h1>

                <button onClick={()=>{
                    this.setState({number2:number2 -1})
                }}>-1</button>
            </div>
        );
    }
}

export default Counter;
