import React from 'react'

const withClass = (WrappedComponent, className) => {
    return ( (props) => {
       return( <div className={className}>
            <WrappedComponent {...props}/>
        </div>
       ) // We can use spread operator to copy all the props of the relative component
    }
    )
}

// const withClass = (props) => (
//     <div className={props.classes}>{props.children}</div>
// )

export default withClass;