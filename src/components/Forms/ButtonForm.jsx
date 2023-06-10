import React from 'react'

export default function ButtonForm({children, ...props}) {
  return (
    <button {...props} className='btn'>{children}</button>
  )
}
