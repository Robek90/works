import React from 'react';

export default function button(props) {
  return (
    <input
      type="submit"
      className='btn'
      value="Save Task"
      onClick={
        () => {
          props.dataChange();
        }
      }
    />
  )
};