import { useState } from "react"

export const useForm = (initialValue = {})=>{

     const [formData, setFormData] = useState(initialValue)
     
    const onFormReset = () =>{
        setFormData(initialValue)
    }
    const onChangeForm = ({target}) =>{
        
        const {name, value} = target

        setFormData({
            ...formData,
            [name] : value
        })

    }

    return{
        ...formData,
        formData,
        onChangeForm,
        onFormReset
    }
}