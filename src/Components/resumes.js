import React from 'react'
import { Table,Badge,Button } from 'reactstrap';
import axios from 'axios';
import {AddResumes} from './addResumes'

export class Resumes extends React.Component{
	
		constructor(props){
			super(props);
			this.state={response:[],chaange:false}
		}
		
		componentDidMount() {
			this.callApi()
			  .then(res => {
				this.setState({ response: res.express});
				  
			  })
			  .catch(err => console.log(err));
		}

		callApi = async () => {
			const response = await fetch('/first1/resumelist');
			const body = await response.json();

			if (response.status !== 200) throw Error(body.message);

			return body;
		};
		
		update(i){
			const idz=i;
			axios.post('/first1/openResume',{resumeid:idz})
		}
		
		
		render(){
				if(!this.state.chaange){
				return (
				<div>
					<div>
						<div className="leftBadge"><h2><Badge color="info">List Of Resumes</Badge></h2></div>
						<div className="space"></div>
						<div className="rightAdd"><Button onClick={()=>{this.setState({chaange:!this.state.chaange})}}>+</Button></div>						
					</div>
					<div>
						<Table bordered>
						<thead>
							<th>Sl. No.</th>
							<th>Name</th>
							<th>Main Skills</th>
							<th>Resume</th>
						</thead>{
						this.state.response.map((resume)=>{
							return (
							<tr>
								<td>{resume.id+1}</td>
								<td>{resume.Name}</td>
								<td>{resume.Skills}</td>
								<td><Button onClick={()=>{this.update(resume.File)}}>View</Button></td>
							</tr>
							)
						})}
						
						</Table>
					</div>
				</div>
				);}
				else{
					return <AddResumes/>;
				}
		}
}