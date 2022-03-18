import React, { useState } from 'react'
import './addemployee.css'
import {
	updateNewEmployeeAction,
	updateEmployeesAction,
	updateIsAddEmployeeClickedAction
} from '../../../redux/Employees/employees.actions'
import { useSelector, useDispatch } from 'react-redux';

// import backIcon from '/src/assets/back-icon.png'

const AddEmployee = (
) => {
	const dispatch = useDispatch();
	const state = useSelector((state) => state.employees)

	function handleChange(evt) {
		const value = evt.target.value;
		dispatch(updateNewEmployeeAction({
			...state.newEmployee,
			[evt.target.name]: value
		}));
	}
	const handleCancle = () => {
		dispatch(updateNewEmployeeAction({}))
		dispatch(updateIsAddEmployeeClickedAction(false));
	}
	const handleAddEmployee = () => {
		handleAddEmployeeApi()
		debugger;
		dispatch(updateEmployeesAction([...state.employees,state.newEmployee]));
		dispatch(updateIsAddEmployeeClickedAction(false));
	}
	function handleAddEmployeeApi() {
		try {
			// const requestOptions = {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 		"Access-Control-Allow-Origin": "*",
			// 		'mode': "no-cors",
			// 	},
			// 	body: JSON.stringify({
			// 		name: `${state.newEmployee.fName} ${state.newEmployee.lName}`,
			// 		age: state.newEmployee.name,
			// 		gender: state.newEmployee.gender,
			// 		dateOfBirth: state.newEmployee.dateOfBirth,
			// 		education: state.newEmployee.education,
			// 		email: state.newEmployee.email,
			// 		joiningDate: state.newEmployee.joiningDate,
			// 		designation: state.newEmployee.designation,
			// 		address: state.newEmployee.address,
			// 		phoneNumber: state.newEmployee.phoneNumber,
			// 		technology: state.newEmployee.technology,
			// 		workExperience: state.newEmployee.workExperience,
			// 		salary: state.newEmployee.salary
			// 	})
			// };
			debugger
			fetch('http://localhost:4000/api/v1/employees', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json; charset=utf-8",
					"Access-Control-Allow-Origin": "*",
					mode: "no-cors"
				},
				// body: JSON.stringify({
				// 	name: `${state.newEmployee.fName} ${state.newEmployee.lName}`,
				// 	age: state.newEmployee.name,
				// 	gender: state.newEmployee.gender,
				// 	dateOfBirth: state.newEmployee.dateOfBirth,
				// 	education: state.newEmployee.education,
				// 	email: state.newEmployee.email,
				// 	joiningDate: state.newEmployee.joiningDate,
				// 	designation: state.newEmployee.designation,
				// 	address: state.newEmployee.address,
				// 	phoneNumber: state.newEmployee.phoneNumber,
				// 	technology: state.newEmployee.technology,
				// 	workExperience: state.newEmployee.workExperience,
				// 	salary: state.newEmployee.salary
				// }
				body: JSON.stringify({
					name: `20`,
					age: '50',
					gender: '50',
					dateOfBirth: new Date(),
					education: '50',
					email: '50',
					joiningDate: new Date(),
					designation: '50',
					address: '50',
					phoneNumber: '50',
					technology: '50',
					workExperience: '50',
					salary: '50'
				}
				),
			})
				.then(response => {
					debugger;
					response.json()
				})
				.then(data => {
					debugger;
					console.log(data)
				});

		} catch (err) {
			debugger;
			console.log('error in addEmployee api',)
		}

	}

	return (
		<div className="container-fluid px-1 py-5 mx-auto">
			<div className="row d-flex justify-content-center">
				{/* <img src={require('src/assets/images/avatars/')} /> */}
				{/* <img src={ backIcon}/> */}

				<div className="card">

					<div className="form-card">
						<div className="row justify-content-between text-left">
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">First name<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="fName" name="fName" placeholder="Enter your first name" /> </div>
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Last name<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="lName" name="lName" placeholder="Enter your last name" /> </div>
						</div>
						<div className="row justify-content-between text-left">
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Age<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="age" name="age" placeholder="Enter your age" /> </div>
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Date of Birth<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="dateOfBirth" name="dateOfBirth" placeholder="Enter your date of birth" /> </div>
						</div>
						<div className="row justify-content-between text-left">
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Business email<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="email" name="email" placeholder="" /> </div>
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Phone number<span className="text-danger"> *</span></label> <input type="text" id="phoneNumber" name="phoneNumber" placeholder="" /> </div>
						</div>
						<div className="row justify-content-between text-left">
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Date of Birth<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="DOB" name="DOB" placeholder="" /> </div>
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Joining Date<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="joiningDate" name="joiningDate" placeholder="Enter your Joining date" /> </div>
						</div>
						<div className="row justify-content-between text-left">
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Designation<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="designation" name="designation" placeholder="" /> </div>
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Salary<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="salary" name="salary" placeholder="" /> </div>
						</div>
						<div className="row justify-content-between text-left">
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Education<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="education" name="education" placeholder="" /> </div>
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Work Experience<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="workExperience" name="workExperience" placeholder="" /> </div>
						</div>
						<div className="row justify-content-between text-left">
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Address<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="address" name="address" placeholder="" /> </div>
							<div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Technology<span className="text-danger"> *</span></label> <input onChange={handleChange} type="text" id="technology" name="technology" placeholder="" /> </div>
						</div>

						<div className="form-group">
							<div className="maxl">
								<label className="radio inline">
									<input type="radio" name="gender" value="male" checked />
									<span> Male </span>
								</label>
								<label className="radio inline">
									<input type="radio" name="gender" value="female" />
									<span>Female </span>
								</label>
							</div>
						</div>
						<div className="row justify-content-between text-left">
							<div className="form-group col-sm-6 ">
								<button className="btn-block btn-primary" onClick={handleCancle}>Cancle</button>
							</div>
							<div className="form-group col-sm-6 ">
								<button className="btn-block btn-primary" onClick={handleAddEmployee}>Add Employee</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}

export default AddEmployee;
