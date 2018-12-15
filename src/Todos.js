import React from 'react';

const Todos = ({todos,deleteTodo}) =>{
	
	const todoList = todos.length ? (
			todos.map(todo =>{
				return (
					<div className="collection-item" key={todo.id}>
						<span className="myCollection">{todo.content}</span>
						<span className="myCollection">{todo.time}</span>
						  <a className="btn-floating btn-small waves-effect waves-light red right mybutton" onClick={()=> {deleteTodo(todo.id)}}><i className="material-icons">delete</i></a>
					</div>
				)
			})
		) :(
		<div>
			<p className="center myCollection">You have No todo's left,yup!!!</p>
		</div>
		)
	return(
		<div className="todos collection">
			{todoList}
		</div>	
	)
}

export default Todos;