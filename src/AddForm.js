import React,{Component} from 'react';

class AddForm extends Component{
	state={
		content:null
		}

	handleChange = (e) =>{
		this.setState({
			content:e.target.value
		})
	}

	handleSubmit =(e) =>{
		e.preventDefault();
		console.log(this.state);
		this.props.addTodo(this.state);
		this.setState({
			content:''
		})
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
      				<label htmlFor="content">Add new Todo:</label>
      				<input id="content" type="text" className="intro" onChange={this.handleChange} value={this.state.content}  />
				</form>
			</div>
		);
	}
}

export default AddForm;