import React from 'react'

interface IProps {
  label: string
  placeholder: string
  isdisable: boolean
  rows: number
}

function TextareaComp(props: IProps) {
  return (
    <div className='mt-9 mb-9 w-full px-3 mb-6'>
    <label className="block mb-2 text-6 font-bold text-gray-900">{props.label}</label>
    <textarea rows={props.rows} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300"
     placeholder={props.placeholder}
     disabled={props.isdisable}
     ></textarea></div>
  )
}

export default TextareaComp