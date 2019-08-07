// import React from 'react';
import "../index.css";
import  App  from "../component/App";
import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class APICall extends React.Component {

   constructor(props) {
      super(props);
      this.state = { visible: false ,items:''};
      this.handleClick = this.handleClick.bind(this)
   }
   componentDidMount() {
      fetch("http://localhost/Examples/Api/hi.php")
      .then(res => res.json())
      .then(
         (result) => {

            // alert(result);
            // alert("a");
            //  console.log(result);
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
   handleClick() {
      this.setState({ visible: ! this.state.visible });
   }
   render() {
      return (
         <div>
             <App/>
             <h1>API Page</h1>
         
             { this.state.items }
            <h1>Called</h1>
         </div>
      )
   }
}
export default APICall;