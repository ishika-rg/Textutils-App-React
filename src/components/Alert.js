import React from 'react'

function Alert(props) {

  //to capita;ize first letter of props.alert.name
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (

  

    props.alert && <div className={`alert alert-${props.alert.name} alert-dismissible fade show m-0`} role="alert">
       <strong>{capitalize(props.alert.name)}</strong> : {props.alert.msg}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
   </div>
  )
}

export default Alert