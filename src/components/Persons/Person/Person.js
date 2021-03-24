import React, {Component} from 'react';

import classes from './Person.module.css';

class Person extends Component {


  render(){
    console.log('Person.js redering')
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
  
};

export default Person;

















// import React from 'react';
// import './Person.css';
// // import Radium from 'radium'
// import styled from 'styled-components'




// const StyledDiv = styled.div`
// {
//     width: 60%;
//     margin: 16px auto;
//     padding: 10px 0;
//     text-align: center;
//     box-shadow: 1px 2px 5px #ddd;
//     background-color: #eee;
//     @media (min-width: 500px)  {
//         width : 450px;
//     }

// }`

// const Person = (props) => {
//     // const style = {
//     //     '@media (min-width : 500px)': {
//     //         width: '450px'
//     //     }
//     // } 
//     return(
        
//         <StyledDiv>
//             {/* <p>I m Front-end Developer. I have {Math.floor(Math.random() * 10)} years experience.</p> */}
//             <p  onClick={props.click}>Hi.. I am {props.name}. I have {props.exp} years experience.</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
            
//             </StyledDiv>
        
//     )
// }

// // export default Radium(Person);
// export default Person;


