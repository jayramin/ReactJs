// import React, { Component } from "react";
// // import "./App.css";

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;

//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       firstName: null,
//       lastName: null,
//       email: null,
//       password: null,
//       formErrors: {
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: ""
//       }
//     };
//   }

//   handleSubmit = e => {
//     e.preventDefault();

//     if (formValid(this.state)) {
//       console.log(`
//         --SUBMITTING--
//         First Name: ${this.state.firstName}
//         Last Name: ${this.state.lastName}
//         Email: ${this.state.email}
//         Password: ${this.state.password}
//       `);
//     } else {
//       console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
//     }
//   };

//   handleChange = e => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     let formErrors = { ...this.state.formErrors };

//     switch (name) {
//       case "firstName":
//         formErrors.firstName =
//           value.length < 3 ? "minimum 3 characaters required" : "";
//         break;
//       case "lastName":
//         formErrors.lastName =
//           value.length < 3 ? "minimum 3 characaters required" : "";
//         break;
//       case "email":
//         formErrors.email = emailRegex.test(value)
//           ? ""
//           : "invalid email address";
//         break;
//       case "password":
//         formErrors.password =
//           value.length < 6 ? "minimum 6 characaters required" : "";
//         break;
//       default:
//         break;
//     }

//     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
//   };

//   render() {
//     const { formErrors } = this.state;

//     return (
//       <div className="wrapper">
//         <div className="form-wrapper">
//           <h1>Create Account</h1>
//           <form onSubmit={this.handleSubmit} noValidate>
//             <div className="firstName">
//               <label htmlFor="firstName">First Name</label>
//               <input
//                 className={formErrors.firstName.length > 0 ? "error" : null}
//                 placeholder="First Name"
//                 type="text"
//                 name="firstName"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.firstName.length > 0 && (
//                 <span className="errorMessage">{formErrors.firstName}</span>
//               )}
//             </div>
//             <div className="lastName">
//               <label htmlFor="lastName">Last Name</label>
//               <input
//                 className={formErrors.lastName.length > 0 ? "error" : null}
//                 placeholder="Last Name"
//                 type="text"
//                 name="lastName"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.lastName.length > 0 && (
//                 <span className="errorMessage">{formErrors.lastName}</span>
//               )}
//             </div>
//             <div className="email">
//               <label htmlFor="email">Email</label>
//               <input
//                 className={formErrors.email.length > 0 ? "error" : null}
//                 placeholder="Email"
//                 type="email"
//                 name="email"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.email.length > 0 && (
//                 <span className="errorMessage">{formErrors.email}</span>
//               )}
//             </div>
//             <div className="password">
//               <label htmlFor="password">Password</label>
//               <input
//                 className={formErrors.password.length > 0 ? "error" : null}
//                 placeholder="Password"
//                 type="password"
//                 name="password"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.password.length > 0 && (
//                 <span className="errorMessage">{formErrors.password}</span>
//               )}
//             </div>
//             <div className="createAccount">
//               <button type="submit">Create Account</button>
//               <small>Already Have an Account?</small>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;






import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import App from './App';
// import Card from '@material-ui/core/Card';
import { Card,Button,Col } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  card: {
    boxShadow:"8px 8px 31px 6px #a5ad97b5",
  },
  media: {
    height: 140,
  },
}));

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const gender = [
  {
    value: 'Male',
    label: 'M',
  },
  {
    value: 'Female',
    label: 'F',
  },
];



export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
    <App></App>
    {/* <> */}
    {/* <Col sm={3}></Col> */}
    <Col  md={{ span: 6, offset: 3 }}>
    <Card className={classes.card}>
      <Card.Header>Registration</Card.Header>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>
        <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-helperText"
        label="Helper text"
        defaultValue="Default Value"
        className={classes.textField}
        helperText="Some important text"
        margin="normal"
      />
      <TextField
        id="standard-with-placeholder"
        label="With placeholder"
        placeholder="Placeholder"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-textarea"
        label="With placeholder multiline"
        placeholder="Placeholder"
        multiline
        className={classes.textField}
        margin="normal"
      />
      
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        id="standard-select-gender"
        select
        label="Select"
        className={classes.textField}
        value={values.gender}
        onChange={handleChange('gender')}
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
        helperText="Please select your currency"
        margin="normal"
      >
        {gender.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      
    </form>
           
         
         
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  
    </div>
  );
}