import React from 'react'
import { Table,Badge } from 'reactstrap';

export class Resumes extends React.Component{
		render(){
				return (
				<div>
					<div>
						<h2><Badge color="info">List Of Resumes</Badge></h2>
					</div>
					<div>
						<Table bordered>
						<thead>
							<th>Name</th>
							<th>Main Skills</th>
							<th>Resume</th>
						</thead>
						<tr>
							<td>Luffy</td>
							<td>Captain</td>
							<td>File1</td>
						</tr>
						<tr>
							<td>Zoro</td>
							<td>Swordsman</td>
							<td>File2</td>
						</tr>
						<tr>
							<td>Nami</td>
							<td>Navigator</td>
							<td>File3</td>
						</tr>
						</Table>
					</div>
				</div>
		);
		}
}