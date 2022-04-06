import axios from 'axios';

export const getEmployeesApi = async () => {
	 return axios({
		method: 'get',
		url: 'http://localhost:4000/api/v1/employees',
		headers: {
			"Content-Type": "application/json; charset=utf-8",
			"Access-Control-Allow-Origin": "*",
			mode: "no-cors"
		},
	})
		.then((result) => {
			return {
				error: false,
				data:result.data
			};
		})
		.catch((err) => {
			return {
				error: true,
				data:err
			};
		});

}