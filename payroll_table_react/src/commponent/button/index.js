import React from 'react';

// import useStyles from './muistyle';

export default function Button(props) {
//   const classes = useStyles();

let {index, item, inputEdit, setDisabledValue, dispatch} = props;

  return (
  <>
    <button 
      index={index}
      className={props.style}
      onClick={() => props.action({item, index, inputEdit, setDisabledValue, dispatch})}
    >
          {props.title}
    </button>
  </>
  );
}