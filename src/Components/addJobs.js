import React from 'react'
import { Button, Form, FormGroup, Label,FormText, Input, Badge } from 'reactstrap';

export class AddResumes extends React.Component{
		render(){
				return (
				<div>
				<div>
					<h2><Badge color="info">Add A New Resume</Badge></h2>
				</div>
				<br/>
				<div>
					<Form ref='uploadForm' id='uploadForm' action='/first1/upload' method='post' encType="multipart/form-data">
						<FormGroup>
						  <Label for="exampleEmail">Name</Label>
						  <Input type="text" name="title" id="exampleEmail" placeholder="Name" />
						</FormGroup>
						<FormGroup>
						  <Label for="exampleEmail">Email</Label>
						  <Input type="text" name="" id="exampleEmail" placeholder="Email" />
						</FormGroup>
						<FormGroup>
						  <Label for="exampleText">Skills</Label>
						  <Input type="text" name="skills" id="exampleText" placeholder="Skills" />
						</FormGroup>
						<FormGroup>
						  <Label for="exampleText">Skills</Label>
						  <Input type="text" name="skills" id="exampleText" placeholder="Skills" />
						</FormGroup>
						<FormGroup>
						  <Label for="exampleText">Skills</Label>
						  <Input type="text" name="skills" id="exampleText" placeholder="Skills" />
						</FormGroup>
						<Button type="submit" >Submit</Button>
					</Form>
				</div>
				</div>
		);
		}
}