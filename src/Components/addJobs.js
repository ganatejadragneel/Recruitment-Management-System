import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Badge } from 'reactstrap';
import {JobList} from './joblist'
import axios from 'axios';
import './joblist.css'

export class AddJobs extends Component {
  constructor() {
	super();
	this.state = {
	  Title: '',
	  Description: '',
	  Location: '',
	  Skills:'',
	  FullDes:'',
	  chaange:false
	};
  }

  onChange = (e) => {
	this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
	e.preventDefault();
	const { Title, Description, Location,Skills,FullDes } = this.state;

	axios.post('/first1/jobadder', { a:Title, b:Description, c:Location,d:Skills,e:FullDes })
	  .then((result) => {
		this.setState({
		  Title: '',
		  Description: '',
		  Location: '',
		  Skills:'',
		  FullDes:''
		});
	  });
  }

  render() {
	const { Title, Description, Location,Skills,FullDes } = this.state;
	if(!this.state.chaange){
	return (
			<div>
			<div>
				<div className="leftBadge"><h2><Badge color="info">Add A New Job</Badge></h2></div>
				<div className="space"></div>
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