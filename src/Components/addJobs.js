import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Badge } from 'reactstrap';
import {JobList} from './joblist'
import axios from 'axios';
import './joblist.css'
import imgg from './spinno.gif'

const showed={
	display: 'block',
	paddingLeft:'90vh',
	paddingTop:'45vh',
	position:'fixed',
	width:'100%',
	height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '3'
}

const hidded={
	display: 'none',
	paddingLeft:'90vh',
	paddingTop:'45vh',
	position:'fixed',
	width:'100%',
	height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '3'
};

export class AddJobs extends Component {
	constructor() {
		super();
		this.state = {
		  Title: '',
		  Description: '',
		  Location: '',
		  Skills:'',
		  FullDes:'',
		  sample:'',
		  chaange:false,
		  show:hidded
		};
	}

	loaderShow(){
		this.setState({show:showed});
	}
	
	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		this.setSampleToEmpty();
	}

	onSubmit = (e) => {
		this.loaderShow();
		e.preventDefault();
		const { Title, Description, Location,Skills,FullDes } = this.state;
		axios.post('/first1/jobadder', { a:Title, b:Description, c:Location,d:Skills,e:FullDes })
		  .then((result) => {
			this.setSampleToAdded();
			
			
				this.setState({
			  Title: '',
			  Description: '',
			  Location: '',
			  Skills:'',
			  FullDes:'',
			  show:hidded
			});
			
			
		  }).catch(()=>{this.setState({sample:'Error Adding Job.Please Try Again.',show:hidded})});
	}
	
	setSampleToEmpty(){
		this.setState({sample:''})
	}
	
	setSampleToAdded(){
		this.setState({sample:'Job Added Successfully'})
	}

	render() {
		const { Title, Description, Location,Skills,FullDes } = this.state;
		if(!this.state.chaange){
		return (
				<div>
				<div><h3 style={this.state.show}><img src={imgg} alt="Can't Load" /></h3></div>
				<div>
					<div className="leftBadge"><h2><Badge color="info">Add A New Job</Badge></h2></div>  {/*Loading Logo*/}
					<div className="space">
						<h4>
						{this.state.sample}
						</h4>
					</div>
					<div className="rightAdd"><Button onClick={()=>{this.setState({chaange:!this.state.chaange})}}>Back</Button></div>
				</div>
				<br/>
				<br/>
				<Form id="myForm" onSubmit={this.onSubmit}>
					<FormGroup>
						<Label for="exampleEmail">Title</Label>
						<Input type="text" name="Title" value={Title} onChange={this.onChange} />
					</FormGroup>
					<FormGroup>
						<Label for="exampleEmail">Description</Label>
						<Input type="text" name="Description" value={Description} onChange={this.onChange} /><br/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleEmail">Location</Label>
						<Input type="text" name="Location" value={Location} onChange={this.onChange} /><br/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleEmail">Skills</Label>
						<Input type="text" name="Skills" value={Skills} onChange={this.onChange} /><br/>
					</FormGroup>
					<FormGroup>
						<Label for="exampleEmail">FullDes</Label>
						<Input type="text" name="FullDes" value={FullDes} onChange={this.onChange} /><br/>
					</FormGroup>
				<Button type="submit">Submit</Button>
				</Form>
				</div>

		);
		}
		else{
			return <JobList/>
		}
	  }
}