import React from "react";

function Alerts (props){
    //console.log(props.alert.type, props.alert.msg);

    const capitalize = (word) =>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
            props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{color: (props.mode === 'light'? 'white' : 'black'), backgroundColor: (props.mode === 'light'? '#6c757d' : 'white'), borderColor: 'grey'}}>
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}.
            </div>
    );

};

export default Alerts;