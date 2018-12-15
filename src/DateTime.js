import React, {Component} from 'react';

class DateTime extends Component{

	constructor(){
		super()
		this.state={time:new Date()}
	}

	currentTime(){
		this.setState({
			time:new Date()
		})
	}

	componentWillMount(){
		setInterval(()=>this.currentTime(),1000)
	}
	render(){
		return(
			<p className=" blue-text myTitle2 right">{this.state.time.toLocaleTimeString()}</p>
		)
	}
}

export default DateTime;