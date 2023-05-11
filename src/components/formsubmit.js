import React, { Component } from 'react'
import axios from 'axios'
class FormSubmit extends Component {
	constructor(props) {
		super(props)

		this.state = {
			empId: '',
			empname: '',
			email: '',
			comments:''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:3000/api/mockecom/adddata', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { empid, empname, email,comments } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="empid"
							value={empid}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="empname"
							value={empname}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="email"
							value={email}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="comments"
							value={comments}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default FormSubmit
//https://jsonplaceholder.typicode.com/posts