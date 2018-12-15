import React,{Component} from 'react';
import Todos from './Todos';
import AddForm from './AddForm';
import DateTime from './DateTime';

class App extends Component{
	

	state={
		todos:[]
	}

	deleteTodo = (id) =>{
		const todos = this.state.todos.filter(todo =>{
			return todo.id !== id 
		});
		this.setState({
			todos:todos
		})
	}

	addTodo =(todo) =>{
		todo.id = Math.random();
		let todos = [...this.state.todos,todo]

		this.setState({
			todos:todos
		}) 
	}
	
	render(){
		return(
			<div className="todo-app container">
				<h1 className=" blue-text myTitle">Todo's</h1>	
				<DateTime />
				<p className="center green-text intro"> Hey there, User</p>
				<h2 className="myContent">Problem while listing your daily work sorted, No problem we're here to help you to make your life sorted.</h2>
				<Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />	
				<AddForm addTodo = {this.addTodo} />
			</div>
		);
	}
}

export default App;