import React from 'react'

interface IProps {
  text: string
}

function TextLableComp(props: IProps) {
  return (
    <div >{props.text}</div>
  )
}

export default TextLableComp