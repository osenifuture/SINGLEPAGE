import { Fragment, useState } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";


const defaultForm = {
    firstname : "",
    lastname : "",
    middlename : "",
    email : "",
    phone : "",
    message: "",
}

const Form = () => {
    const [formInput, setFormInput] = useState(defaultForm);
    const [error, setError] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const {firstname, lastname, middlename, email, phone, message} = formInput;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormInput({...formInput, [name] : value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            const response = await axios.post(`https://getform.io/f/${process.env.REACT_APP_GETFORM_KEY}`, formInput)
            if(!response.ok) {
                throw new Error(response.message)
            }
            setError(error.message)
        } catch (error) {
            setError(error.message)
        }
        console.log(formInput)
        setFormInput(defaultForm)
        setIsLoading(false)
        setSuccessMsg('Form is successfully sumbitted!')
        setTimeout(() => {
        setSuccessMsg(false)   
        }, 3000);
    }

    return(
        <Fragment>
        <form onSubmit={handleSubmit}>
            {isLoading && (<Spinner/>)}
            <h2>Get in touch Today!</h2>
            <input type="text" name="firstname" value={firstname} placeholder="FIRSTNAME"  onChange={handleChange} required />
            <input type="text" name="lastname" value={lastname} placeholder="LASTNAME"  onChange={handleChange} required />
            <input type="text" name="middlename" value={middlename} placeholder="MIDDLENAME"  onChange={handleChange} required />
            <input type="email" name="email" value={email} placeholder="EMAIL"  onChange={handleChange} required />
            <input type="number" name="phone" value={phone} placeholder="MOBILE PHONE"  onChange={handleChange} required />
            <textarea name="message" value={message} onChange={handleChange} required cols="30" rows="10"></textarea>
            {error && <p>{error}</p>}
            {successMsg && <p>{successMsg}</p>}
            <button type="submit">{isLoading ?  "IS SUMBMITTING" : "SUBMIT"}</button>
        </form>
        </Fragment>
    )

}

export default Form;