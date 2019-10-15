import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      contacts: "",
      listItems:""
    }
    // this.props.test = "";
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      var listItems = data.map((number) =>
        <li>{number.name}</li>
      );
      console.log(listItems);
      // this.props.test = data;
      this.setState({ contacts: listItems })
    })
    .catch(console.log)
  }
  render(){
    return(
      <div>
        {this.state.contacts}
        Test
      </div>
    )
  }
}
// function Home() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

export default Home;
