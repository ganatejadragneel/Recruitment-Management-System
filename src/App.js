import React from 'react';
import {JobList} from './Components/joblist'
import {Resumes} from './Components/resumes'
import {AddResumes} from './Components/addResumes'
import {AddJobs} from './Components/addJobs'
import './App.css'
/*
  Here is where we're going to put our front-end logic
  Before beginning delete the render function below (After you have already gotten hello world in the browser)
*/

class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state={defaultPage:<JobList/>}
		this.changeStateToJoblist=this.changeStateToJoblist.bind(this);
		this.changeStateToResumes=this.changeStateToResumes.bind(this);
		this.changeStateToAddResumes=this.changeStateToAddResumes.bind(this);
		this.changeStateToAddJobs=this.changeStateToAddJobs.bind(this);
	}
	
	changeStateToJoblist(){
		this.setState({defaultPage:<JobList/>})
	}
	
	changeStateToAddJobs(){
		this.setState({defaultPage:<AddJobs/>})
	}
	
	changeStateToResumes(){
		this.setState({defaultPage:<Resumes/>})	
	}
	
	changeStateToAddResumes(){
		this.setState({defaultPage:<AddResumes/>})
	}
	
	render(){
		return(
		<div>
			<div
				 className="App-header" >Recruitment Management System
			</div>
			<div>
					<div className="setter" onClick={this.changeStateToJoblist}>JobList</div>
					<div className="setter" onClick={this.changeStateToAddJobs}>Add Job</div>
					<div className="setter" onClick={this.changeStateToResumes}>Resumes</div>
					<div className="setter" onClick={this.changeStateToAddResumes}>Add Resume</div><br/><br/>
					<div>{this.state.defaultPage}</div>
			</div>
		</div>
	);
	}
}


export default App;
