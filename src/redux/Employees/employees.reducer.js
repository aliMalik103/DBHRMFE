import {
  updateNewEmployee,
  updateIsAddEmployeeClicked,
  updateEmployees,
  updateIsEditEmployeeClicked,
  updateEmployeesDataTable,
  updateIsViewEmpClicked,
} from "./employees.types";

const INITIAL_STATE = {
  employees: [],
  newEmployee: {},
  isAddEmployeeClicked: null,
  isEditEmployeeClicked: null,
  employeesDataTable: {
    columns: [
      {
        label: "Employee Name",
        field: "name",
        width: 270,
      },
      {
        label: "Designation",
        field: "designation",
        width: 200,
      },
      {
        label: "Action",
        field: "action",
        width: 100,
      },
    ],
    rows: [],
  },
  isViewEmpClicked:null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case updateNewEmployee:
      return {
        ...state,
        newEmployee: action.payload,
      };

    case updateEmployees:
      return {
        ...state,
        employees: action.payload,
      };

    case updateIsAddEmployeeClicked:
      return {
        ...state,
        isAddEmployeeClicked: action.payload,
      };

    case updateIsEditEmployeeClicked:
      return {
        ...state,
        isEditEmployeeClicked: action.payload,
      };
    case updateEmployeesDataTable:
      return {
        ...state,
        employeesDataTable: action.payload,
      };
      case updateIsViewEmpClicked:
				return {
					...state,
					isViewEmpClicked: action.payload,
				};

    default:
      return state;
  }
};

export default reducer;
