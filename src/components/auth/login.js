import { useForm } from "react-hook-form";
import services from '../../server/services';

const Login =  (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    
    const onSubmit = async (data) => {
        const object = {
            email: data.email,
            password: data.password
        }
        await services.login(object).then(response => {
                console.log(response)
                props.getMe()
                reset()
            })
            .catch(e => console.log(e))
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