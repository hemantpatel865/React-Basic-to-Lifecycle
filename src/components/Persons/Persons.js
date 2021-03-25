import React, {Component} from 'react';
import Person from './Person/Person';



class Persons extends Component{

  // static getDerivedStateFromProps(props,state){
  //   console.log('[persons.js]  getDerivedStateFromProps')
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[persons.js]  shouldComponentUpdate')
    return true;
    // if(nextProps.person !== this.props.person){
    //   return true;
    // }else{
    //   return false;
    // }
    
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[persons.js]  getSnapshotBeforeUpdate')
    return null;
  }

  componentDidUpdate(){
    console.log('[persons.js]  componentDidUpdate')

  }

  componentWillUnmount(){
    console.log('[persons.js] componentWillUnmount')
  }


  render(){
    console.log('Persons.js redering')
    return(this.props.person.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    }))
  }
} 

export default Persons;
