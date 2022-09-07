import { useEffect, useState } from "react"
// import { Message } from "../useEffect/Message"
import { useForm } from "./useForm"


export const SimpleForm = () => {

  const {formData, onChangeForm, onFormReset,username, email, password} = useForm({username:'', email:'', password:''})


    

  return (
    <>
      <h1>Simple From</h1>
      <hr />
      <input type="text"
             name="username"
             placeholder="Username"
             className="form-control"
             value={username}
             onChange = {onChangeForm}
        />
        <br />
         <input type="email"
             name="email"
             placeholder="Email"
             className="form-control"
             value={email}
             onChange = {onChangeForm}
        />
        <br />
         <input type="password"
             name="password"
             placeholder="Password"
             className="form-control"
             value={password}
             onChange = {onChangeForm}
        />
        <button onClick={onFormReset} className="btn btn-primary mt-2">Borrar</button>

        {
            (username === 'Jesus Hurtado') && <Message/>
            }
          
    </>
  )
}

