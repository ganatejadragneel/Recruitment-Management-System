import React, { Component } from 'react';
import { Button, Form, FormGroup, Label,FormText, Input, Badge } from 'reactstrap';

import axios from 'axios';

export class AddResumes extends Component {
  constructor() {
	super();
	this.state = {
	  Name: '',
	  Email: '',
	  Skills:'',
	  File:''
	};
  }

	onChange = (e) => {
		const state = this.state;

		switch (e.target.name) {
		  case 'File':
			state.File = e.target.files[0];
			break;
		  default:
			state[e.target.name] = e.target.value;
		}

		this.setState(state);
	}

	
  onSubmit = (e) => {
	e.preventDefault();
	const { Name, Email, Skills,File } = this.state;
	let formData = new FormData();
	
	formData.append('Name', Name);
	formData.append('Email', Email);
	formData.append('Skills', Skills);
	formData.append('File', File);

	axios.post('/first1/uploadresume', formData)
	  .then((result) => {
		this.setState({
		  Name: '',
		  Email: '',
		  Skills:'',
		});
	  });
  }

  render() {
	const { Name, Email,Skills} = this.state;
	return (
			<div>
			<div>
				<h2><Badge color="info">Add A New Job</Badge></h2>
			</div>
			<br/>
			<Form id="myForm" onSubmit={this.onSubmit}>
				<FormGroup>
					<Label for="exampleEmail">Name</Label>
					<Input type="text" name="Name" value={Name} onChange={this.onChange} />
				</FormGroup>
				<FormGroup>
					<Label for="exampleEmail">Email</Label>
					<Input type="text" name="Email" value={Email} onChange={this.onChange} /><br/>
				</FormGroup>
				<FormGroup>
					<Label for="exampleEmail">Skills</Label>
					<Input type="text" name="Skills" value={Skills} onChange={this.onChange} /><br/>
				</FormGroup>
				<FormGroup>
				  <Label for="exampleFile">File</Label>
				  <Input type="file" name="File" onChange={this.onChange} />
				  <FormText color="muted">
					Upload The Resume in PDF Format only
				  </FormText>
				</FormGroup>
			<Button type="submit">Submit</Button>
			</Form>
			</div>
	);
  }
}