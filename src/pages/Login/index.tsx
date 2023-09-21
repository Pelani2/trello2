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
                                    placeholder='email'
                                    variant='form-input'
                                />
                            </>
                        )}
                    />
                </div>
            </form>
        </div>
    );
};

export default Login;