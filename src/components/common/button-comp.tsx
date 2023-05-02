import React from 'react'

interface IProps {
  text: string 
}

function ButtonComp(props:IProps) {
  return (
    <div>
       <button className="bg-[#231A2A] text-sm  text-white py-1 px-12 rounded" type="button">
      {props.text}
    </button>
    </div>
  )
}

export default ButtonComp