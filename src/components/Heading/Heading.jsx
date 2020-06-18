import React from 'react'


const Heading = ({heading, children}) => {
    return (
       <h3 className="heading-component">{heading || children}</h3>
    );
}

export default Heading;