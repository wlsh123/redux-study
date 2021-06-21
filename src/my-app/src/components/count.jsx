import React, { Component } from 'react';
import {connect} from 'react-redux';
import { increment, decrement, incrementAsync } from '../actions/count';
class Count extends Component {
  increment = ()=>{
    const {value} = this.selectNumber;
    this.props.increment(value * 1)
  }
  decrement = ()=>{
    const { value } = this.selectNumber
    this.props.decrement(value * 1)
  }
  incrementIfOdd = ()=>{
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }
  incrementAsync = ()=>{
    const { value } = this.selectNumber
    this.props.incrementAsync(value * 1, 500)
  }
  render() { 
    console.dir('count:'+this.props);
    return ( 
      <div>
        <h1>我是count组件,person组件人数总和为：{this.props.totalPerson}</h1>
        <h4>当前求和为：{this.props.count}</h4>
        <select ref={c => { this.selectNumber = c }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
     );
  }
}
const mapStateToProps = (state)=>({
  count: state.count,
  totalPerson: state.person.length
})

const mapDispatchToProps = {
  increment,
  decrement,
  incrementAsync
}
export default connect(mapStateToProps,mapDispatchToProps)(Count);