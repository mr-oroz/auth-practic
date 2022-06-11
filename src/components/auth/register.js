import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        reset()
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