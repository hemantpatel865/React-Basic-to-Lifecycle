import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons//Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props); // responsible for calling constructor of extends component Object
    console.log('cons')  
  }


  state = {
    persons: [
      { id: 'asfa1', name: 'Hemant', age: 26 },
      { id: 'vasdf1', name: 'Abhishek', age: 25 },
      { id: 'asdf11', name: 'Ankit', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  };
  
  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps')
    return state;
  }


  componentDidMount(){
    console.log('[app.js]  componentDidMount')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
 
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

    console.log('[app.js] render')
    let persons = null;
    

    if (this.state.showPersons) {
      persons = <Persons 
          person={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />

     
    }

    return (
      <div className={classes.App}>
        <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        toggled={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
































// // import { render } from '@testing-library/react';
// import React, { Component } from 'react';
// // import React, { useState } from 'react';
// // import ReactDOM from 'react-dom';
// import './App.css';
// import Persons from '../components/Persons/Persons';
// import ValidationCompoonent from '../components/ValidationComponent/ValidationComponent';
// import CharComponent from '../components/CharComponent/CharComponent';
// import Radium, {StyleRoot} from 'radium';
// // import styled from 'styled-components'
// import Cockpit from '../components/Cockpit/Cockpit'
// // import Test from './Person/Clock';


// // Class compent using state to store data in the same component //

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       persons: [
//         { id: '111', name: 'Ankit', exp: '1' },
//         { id: '112', name: 'Abhishek', exp: '5' },
//         { id: '110', name: 'Hemnat', exp: '1' },
//       ],
//       otherProperty: 'otherValue',
//       showPersons: false,
//       input: 'Null',
//       showChar: false
//     }
//   }


//   // switch name handler function
//   switchNameHandler = (newName,newExp) => {
//     // setstate 
//     this.setState({
//       persons: [
//         { name: newName, exp: newExp },
//         { name: 'Ankit', exp: '1' },
//         { name: 'Abhishek', exp: '5' }
//       ]
//     })
//     // console.log(this.state);

//   }

//   nameChangedHandler = (event, id) => {
//     const personIndex = this.state.persons.findIndex(element => {
//       // console.log(element)
//       return element.id === id;
//     });
//     // console.log(personIndex)
//     const person = {
//       ...this.state.persons[personIndex]
//     }
//     // console.log(person)
    
//     person.name = event.target.value;
//     // console.log(person.name)
    
//     const persons = [...this.state.persons];
    
//     persons[personIndex] = person;
    
//     this.setState({
//       persons: persons
//     })
    
    
    
//   }
  
//   // Declaring on change handler function
//   onChangedHandler = (event,index) => {
    
//     this.setState({
//       persons: [
//         { name: 'Hemant', exp: '1' },
//         { name: event.target.value, exp: '1' },
//         { name: 'Abhishek', exp: '5' }
//       ]
//     })
//   }

//   // Declaring toggle person hander arrow function
//   togglePersonsHandler = () => {
//     const doesShow = this.state.showPersons
//     this.setState({showPersons: !doesShow})
//   }
  
//   // Declaring delete person handler function
//   deletePersonHandler = (personIndex) => {
//     // const persons = this.state.persons.slice()
//     const persons = [...this.state.persons];
//     persons.splice(personIndex, 1);
//     this.setState({persons: persons})

//   }

//   deleteInputHandler = (inputIndex) => {
//     const input = [...this.state.input]
//     input.splice(inputIndex, 1)
//     this.setState({ input: input})
//   }
  

  

//   onChangeListner = (event) => {

//     let input = event.target.value;
//     let input_arr = input.split(''); 
//     // var input_arr2 = []

//     // input_arr.map( i => {
//     //   if (i !== ' '){
//     //     input_arr2.push(i);
//     //   }
//     // })
    
//     // console.log(input_arr2)
    
//     // console.log(input)
//     // console.log(input>=1 && input <= 5)

//     if (input === 0) {
//       this.setState({ input: input_arr, showChar: false });
      
//     } else if (input >= 1 && input <= 5) {

//       this.setState({ input: input_arr, showChar: true });
//     } else {

//       this.setState({ input: input_arr, showChar: true });

//     }
//   }

//   render() {
//     // const style = {
//     //   backgroundColor: 'green',
//     //   border: '1px solid #eee',
//     //   cursor: 'pointer',
//     //   font: 'inherit',
//     //   padding: '8px 10px',
      
//     //   color: '#fff',
//     //   ':hover': {
//     //     backgroundColor: 'lightgreen',
//     //     color: '#222'
//     //   }
//     // }
     
    

//     /******  Assign components to variable and render conditionally *****************/
//     /*
//     let persons = null;
//     if (this.state.showPersons){
//       persons = (
//         <div>
//         <Person 
//         name={this.state.persons[0].name} 
//         exp={this.state.persons[0].exp} />
//         <Person 
//         name={this.state.persons[1].name} 
//         exp={this.state.persons[1].exp} 
//         click={this.switchNameHandler.bind(this,'MAx')}
//         onchange={this.onChangedHandler}
//         >My Hobbies : Cooking</Person>
//         <Person name={this.state.persons[2].name} 
//         exp={this.state.persons[2].exp} />
//         </div>
//       );
//     }
//     */
//     /***** Using Map method *************************/
//     let persons = null;
//     if(this.state.showPersons){
//       persons = (
//         <div>
//           <Persons
//           persons={this.state.persons}
//           clicked={this.deletePersonHandler}
//           changed={this.nameChangedHandler}
          
//           />
//           {/* {this.state.persons.map((person, index) => {
//             return <Person 
//             click={() => this.deletePersonHandler(index)}
//             name={person.name} 
//             exp={person.exp} 
//             key={person.id}
//             changed={(event) => this.nameChangedHandler(event, person.id)}
//             />
//           })} */}
//         </div>
//       );
//       // Change button background conditionally 
//       // style.backgroundColor = 'red'
//       // style.color = 'white';
//       // style[':hover'] = {
//       //   backgroundColor: 'salmon',
//       //   color: '#fff'
//       // }
//     }

//     let charComponent = null;
//     if (this.state.showChar) {
//       charComponent = (
//         <div>
//           {/* <CharComponent char={this.state.input} /> */}
//           {this.state.input.map((inputElement, inputIndex) => {
//             return (<CharComponent 
//               click={this.deleteInputHandler.bind(inputIndex)}
//               char={inputElement} />)
//           })}
          
//         </div>
//       );
//     }

//     // Render Validation Component Conditionally
//     let ValidationComponent = null;
//     let inputLength = this.state.input.length;
//     if (inputLength > 5) {
//       ValidationComponent = (
//         <ValidationCompoonent value={this.state.input} />
//       )
//     } else {
//       ValidationComponent = (
//         <ValidationCompoonent value={this.state.input} />
//       )
//     }

//     // Render char component


//     // const classes = [];
    
//     // if (this.state.persons.length < 2){
//     //   classes.push('Red');
//     // }
//     // if (this.state.persons.length < 3){
//     //   classes.push('Bold')
//     // }
    


    

//     return (
//       <div className='App'>
//       <Cockpit 
//       showPersons={this.state.showPersons}
//       persons={this.state.persons}
//       clicked={this.togglePersonsHandler}
//       />
//       {persons}
//       <br />
//       <input onChange={this.onChangeListner} type="text" name="input" />
//       <p id="input"> </p>
//       {ValidationComponent}
//       {charComponent}
//       </div>
//       /*
//       <StyleRoot>
//       <div className='App'>
//         <h1 >Hi, I'm a React App</h1>
//         <p className={classes}>This is really working!</p>
//         <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons
//         </StyledButton>
//         {persons}
//         <br />
//         <br />
//         <input onChange={this.onChangeListner} type="text" name="input" />
//         <p id="input"> </p>
//         {ValidationComponent}
//         {charComponent}
//       </div>
//     </StyleRoot>*/
//     )
//     // return React.createElement('div', null, React.createElement('h1',null, ),React.createElement('p', null, 'react'));
//   }

// }

// export default Radium(App);



// /*
// // Functional Component using useState object in hooks

// const App = () => {

//   let [personState, setPersonState] = useState({
//     persons: [
//       { name: 'Hemnat', exp: '1' },
//       { name: 'Ankit', exp: '1' },
//       { name: 'Abhishek', exp: '5' }
//     ],
//     otherState: 'otherValue'
//   });

//   // console.log(personState);
//   // We can also use multiple state instead of assing huge data in single state... ///
//   const [otherState, setOtherState] = useState('Other state');

//   const switchNameHandler = () => {
//     setPersonState({
//       persons: [
//         { name: 'Aravind', exp: '0' },
//         { name: 'Ankit', exp: '1' },
//         { name: 'Abhishek', exp: '5' }
//       ],
//       otherState : personState.otherState
//     })
//   };
  

//   return (
//     <div className="App" >
//       <h1>React JS</h1>
//       <p>React is a javascript library for building user interfaces.</p>
//       <button onClick={switchNameHandler}>Switch</button>
//       <p>{otherState}</p>
//       <Test />
//       <Person 
//       name={personState.persons[0].name} 
//       exp={personState.persons[0].exp} />
//       <Person 
//       name={personState.persons[1].name} 
//       exp={personState.persons[1].exp} 
//       click={switchNameHandler}>My Hobbies : Cooking</Person>
//       <Person 
//       name={personState.persons[2].name} 
//       exp={personState.persons[2].exp} />
//     </div>
//   );
// }


// export default App;
// */

