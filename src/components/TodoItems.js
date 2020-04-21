import React, { Component } from 'react'

export class TodoItems extends Component {

    getStyle = () => {
        if(this.props.todo.completed){
            return {
                textDecoration:'line-through'
            }
        }else{
            return {
                textDecoration:'none',
                backgroundColor:'#f4f4f4'
            }
        }
    }

    getStyleAdvance = () =>{
        return{
            backgroundColor:'#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
    }
 

    render() {

        const {id,title }= this.props.todo;
        return (
            <div style={this.getStyleAdvance()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                {title}
                <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

const itemStyle = {
    backgroundColor:'#f4f4f4'
}

const btnStyle = {
    background:'#ff0000',
    color: 'white',
    border:'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItems
