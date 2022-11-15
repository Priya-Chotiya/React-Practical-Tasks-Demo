import React, { useEffect, useState } from 'react'

const AccordianItem = ({label , details}) => {
    const [show , setShow] = useState(false)
    
  return (
    <div className='mb-2'>
        <div className='d-flex align-content-center justify-content-between'>
            <p>{label}</p>
            <button onClick={() => setShow(!show)} type="button">{ show ? "-" : "+"}</button>
        </div>
        {show && <span>{details}</span> } 
    </div>
  )
}

export default AccordianItem