import React from 'react'

interface IProps {
    label: string
    placeholder: string
    isdisable: boolean
    inputType: string
}

function TextfieldComp(props: IProps) {
    return (
        <div>
            <div className="w-full px-3 mb-6">
                <label className="block tracking-wide text-gray-700 text-6 font-bold mb-2">
                    {props.label}

                </label>
                <input className="appearance-none block w-full text-gray-700 border border-grey
       rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    //    disabled={props.isdisable}
                    id="grid-first-name" type={props.inputType} placeholder={props.placeholder}

                />
            </div>
        </div>
    )
}

export default TextfieldComp