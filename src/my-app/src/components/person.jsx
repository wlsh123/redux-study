import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { addPerson } from '../actions/person';
class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { id: nanoid(), name, age }
    // console.log(personObj)
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render() { 
    console.dir('person:'+this.props);
    return ( 
      <div>
        <h2>我是person组件,count组件求和为:{this.props.countArr}</h2>
        <input ref={c => this.nameNode = c} type='text' placeholder='输入名字' />
        <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.personArr.map(p => {
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </div>
     );
  }
}
 
const mapStateToProps = (state)=>({
  personArr: state.person,
  countArr: state.count
})
const mapDispatchToProps = {
  addPerson
}
export default connect(mapStateToProps,mapDispatchToProps)(Person);