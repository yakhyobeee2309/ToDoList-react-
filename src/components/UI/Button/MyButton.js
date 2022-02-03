import React from 'react';

export const MyButton = ({children ,...props}) => {
  return (
      <button {...props} className='btn btn-primary w-100'>{children}</button>
  )
};