import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = (data) => {
        const object = {
            email: data.email,
            passowrd: data.passowrd
        }
        reset()
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <input
            {...register('email', {
                required: 'ne pustoi',
            })}
            type="text"
            placeholder="email" />
        {errors.email && <span>{errors.email.message}</span>}
        <input {...register('password', {
            required: 'ne pustoi',
            minLength: {
                value: 8,
                message: 'minumum 8 symbol'
            }
        })}
            type="password"
            placeholder="password" />
        {errors.password && <span>{errors.password.message}</span>}
        <input type="submit" value='login' />
    </form>
}

export default Login;