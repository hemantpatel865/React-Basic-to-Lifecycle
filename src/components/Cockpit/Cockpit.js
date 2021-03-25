import React, {useEffect} from 'react';

import classes from './Cockpit.module.css';


const Cockpit = (props) => {

    useEffect(() => {
      console.log('[Cockpit.js]  useEffect')

      const timer = setTimeout(() => {
        alert('Data saved to cloud')
      },1000)
      return () => {
        clearTimeout(timer)
        console.log('[cockpit.js]  cleanup work in useEffect')
      }

    }, [])

    useEffect(() => {
      console.log('2nd use Effect')
      return () => {
        console.log('[cockpit.js]  cleanup work in 2nd useEffect')
      }
    })

    let btnClass = '';

    if (props.showPersons){

        btnClass = classes.Red;

    }

    const assignedClasses = [];
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.toggled}>
            Toggle Persons
            </button>
        </div>
        )
}


export default React.memo(Cockpit);