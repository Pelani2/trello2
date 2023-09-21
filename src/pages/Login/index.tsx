import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

interface FormData {
    email: string;
    password: string;
}

const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email format"),
    password: yup.string().required("Password is required"),
});

const Login: React.FC = () => {
    const {
        handleSubmit, 
        control,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log(`Form submitted with the following data: 
        \n\nEmail: ${data.email}
        \nPassword: ${data.password}`);
    };

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <Label 
                        htmlFor='email' 
                        variant='form-label'
                    >
                        Email: 
                    </Label>
                    <Controller 
                        name='email'
                        control={control}
                        defaultValue=''
                        render={({ field }) => (
                            <>
                                <Input 
                                    {...field}
                                    type='email'
                                    placeholder='Enter your email'
                                    variant='form-input'
                                />
                            </>
                        )}
                    />
                </div>
                {errors.email && (
                    <Typography variant='error-message'>
                        {errors.email.message}
                    </Typography>
                )}

                <div className='form-group'>
                    <Label 
                        htmlFor='password' 
                        variant='form-label'
                    >
                        Password: 
                    </Label>
                    <Controller 
                        name='password'
                        control={control}
                        defaultValue=''
                        render={({ field }) => (
                            <>
                                <Input 
                                    {...field}
                                    type='password'
                                    placeholder='Enter your password'
                                    variant='form-input'
                                />
                            </>
                        )}
                    />
                </div>
                {errors.password && (
                    <Typography variant='error-message'>
                        {errors.password.message}
                    </Typography>
                )}
            </form>
        </div>
    );
};

export default Login;