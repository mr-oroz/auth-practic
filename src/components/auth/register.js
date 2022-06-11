import { useForm } from "react-hook-form";
import services from "../../server/services";
import {toast, ToastContainer} from 'react-toastify';
import { useState } from "react";
const Register = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true)
        const object = {
            email: data.email,
            password: data.password,
            firstName: data.firstName,
            lastName: data.lastName
        }
        await services.register(object)
            .then(response => {
                console.log(response)
                setLoading(false)
                reset()
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            }) 
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')}
            type="text"
            placeholder="email" />
        <input {...register('password')}
            type="password"
            placeholder="password" />
            <input {...register('firstName')}
            type="text"
            placeholder="first-name" />
        <input {...register('lastName')}
            type="text"
            placeholder="last-name" />
            <input type="submit" value='register' />
    </form>
}

export default Register;