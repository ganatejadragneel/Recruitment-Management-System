import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class JobData extends React.Component{
	state = {
		response: []
	  };

	componentDidMount() {
		this.callApi()
		  .then(res => {
			this.setState({ response: res.express});
			  
		  })
		  .catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/first1/joblist');
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};
	  
	render(){
			return(
				<Modal isOpen={this.props.tog}>
						<ModalHeader>
							{this.state.response.map((row)=>{
									
								if(row.id===this.props.id){return (
								 <div>
								{
									this.state.response[this.props.id]["Title"]

								}
								</div>
								);}
								return true;
							})}
						</ModalHeader>
						<ModalBody>
							{this.state.response.map((row)=>{
								
							if(row.id===this.props.id){return (
							 <div>
							{
								this.state.response[this.props.id]["fullDes"]

							}
							</div>
							);}
							return true;
						})}
						</ModalBody>
						<ModalFooter>
							<Button color="primary"  onClick={this.props.closer} >Close</Button>
						</ModalFooter>
				</Modal>
				
		);
		
	}
}

export default JobData;