import React from 'react';
import {JobList} from './Components/joblist'
import {Resumes} from './Components/resumes'
import './App.css'

class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state={defaultPage:<JobList/>}
		this.changeStateToJoblist=this.changeStateToJoblist.bind(this);
		this.changeStateToResumes=this.changeStateToResumes.bind(this);
	}
	
	changeStateToJoblist(){
		this.setState({defaultPage:<JobList/>})
	}
	
	
	changeStateToResumes(){
		this.setState({defaultPage:<Resumes/>})	
	}
	
	render(){
		return(
		<div>
			<div className="App-header" >Recruitment Management System
			</div>
			<div>
					<div className="setter" onClick={this.changeStateToJoblist}>JobList</div>
					<div className="setter" onClick={this.changeStateToResumes}>Resumes</div><br/><br/>
					<div>{this.state.defaultPage}</div>
			</div>
		</div>
	);
	}
}


export default App;
