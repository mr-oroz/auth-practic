import { useForm } from "react-hook-form";

const Login = () => {
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
            <input type="submit" value='login' />
    </form>
}

export default Login;