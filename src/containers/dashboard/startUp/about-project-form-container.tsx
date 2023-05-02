import React from 'react'
import ButtonComp from 'src/components/common/button-comp'
import TextLableComp from 'src/components/common/text-lable-comp'
import TextareaComp from 'src/components/common/textarea-comp'
import TextfieldComp from 'src/components/common/textfield-comp'

function AboutProjectFormContainer() {
    return (
        <div className='bg-white pt-12 pb-12 w-[1120px] rounded-lg '>

      <div className='mr-60 ml-60'>
      <div className='text-9 font-bold pb-4'>
                <TextLableComp text={"معلومات حول المشروع"} /> </div>
            {/* <div className='text-5'> <TextLableComp text={"اسم الشركة الناشئة"} /> </div> */}
            <TextfieldComp isdisable={true} label='اسم الشركة الناشئة' placeholder=' الكراج لتقنية المعلومات' inputType='text' />
            <TextfieldComp isdisable={true} label='مدير المشروع' placeholder='عبدالعزيز محمد' inputType='text' />
            <TextareaComp rows={4} label={'وصف المشروع'} placeholder={'النص الداخلي'} isdisable={false} />
            <div className='text-center'><ButtonComp text={'التالي'} /></div>
      </div>
        </div>
    )
}

export default AboutProjectFormContainer