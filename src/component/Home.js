// import React from 'react';
import "../index.css";
import  App  from "../component/App";
import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Home extends React.Component {

   constructor(props) {
      super(props);
      this.state = { visible: false };
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick() {
      this.setState({ visible: ! this.state.visible });
   }
   render() {
      return (
         <div>
             <App/>
             <h1>HomePage</h1>

             
            <h1>Home</h1>
         </div>
      )
   }
}
export default Home;