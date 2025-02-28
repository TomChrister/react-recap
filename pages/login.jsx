import { useForm } from 'react-hook-form';

export function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <form action='' className='flex flex-col gap-1 mx-auto max-w-md' onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <label htmlFor=''>Email</label>
            <input
                className='border rounded-sm'
                type='text'
                {...register('email', {
                    required: true,
                    pattern: {
                        value: /noroff\.no/,
                        message: 'Please enter valid email address.',
                    },
                })}
            />
            {errors.email &&
                (errors.email.message ? (
                    <p className='text-red-500'>{errors.email.message}</p>
                ) : (
                    <p className='text-red-500'>Unexpected error</p>
                ))}
            <label htmlFor=''>Password</label>
            <input className='border rounded-sm'
                   type='password'
                   {...register('password', {
                       required: true,
                       minLength: {
                           value: 6,
                           message: 'Must be 6 characters.',
                       },

                   })}
            />
            {errors.password &&
                (errors.password.message ? (
                    <p className='text-red-500'>{errors.password.message}</p>
                ) : (
                    <p className='text-red-500'>Error</p>
                ))}
            <button className='border bg-green-500 text-white rounded-sm p-2 cursor-pointer'>Login</button>
        </form>
    )
}