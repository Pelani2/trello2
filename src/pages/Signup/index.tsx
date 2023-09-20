import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setIsLengthValid, setHasSpecialCharacter } from '../../store/actions/passwordValidationSlice';
import { StyledSignupForm, StyledFormGroup, StyledPasswordCheckerWrapper } from './signupStyles';
import Typography from '../../components/Typography';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';


interface FormData {
    name: string;
    email: string;
    password: string;
}

const Signup: React.FC = () => {
    const dispatch = useDispatch();
    const isLengthValid = useSelector((state: RootState) => state.passwordValidation.isLengthValid);
    const hasSpecialCharacter = useSelector((state: RootState) => state.passwordValidation.hasSpecialCharacter);

    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .required("Name is required"),
        email: yup
            .string()
            .required("Email is required")
            .email("Invalid email format"),
        password: yup
            .string()
            .required("Password is required"),
        confirmPassword: yup
            .string()
            .required("Confirm password is required")
            .oneOf([yup.ref("password")], "Passwords must match"),
    });

    const {
        handleSubmit, 
        control, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log(`Form submitted with the following data: \n\nName: ${data.name} 
        \nEmail: ${data.email} 
        \nPassword: ${data.password}`);
    };

    return (
        <StyledSignupForm onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='primary-title'>
                Sign up
            </Typography>

            <StyledFormGroup>
                <Label 
                    htmlFor='name' 
                    variant='form-label'
                >
                    Name:
                </Label>
                <Controller 
                    name='name'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <Input 
                            {...field}
                            placeholder='Enter your name'
                            variant='form-input'
                            type='text'
                        />
                    )}
                />
            </StyledFormGroup>
            <Typography variant='error-message'>
                {errors.name?.message}
            </Typography>

            <StyledFormGroup>
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
                        <Input 
                            {...field}
                            placeholder='Enter your email'
                            variant='form-input'
                            type='email'
                        />
                    )}
                />
            </StyledFormGroup>
            <Typography variant='error-message'>
                {errors.email?.message}
            </Typography>

            <StyledFormGroup>
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
                        <Input 
                            {...field}
                            placeholder="Enter your password"
                            value={field.value}
                            onChange={(e) => {
                                field.onChange(e);
                                dispatch(setIsLengthValid(e.target.value.length >= 8));
                                dispatch(setHasSpecialCharacter(/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(e.target.value)));
                            }}
                            variant='form-input'
                            type='password'
                        />
                    )}
                />
            </StyledFormGroup>
            <Typography variant='error-message'>
                {errors.password?.message}
            </Typography>

            <StyledFormGroup>
                <Label 
                    htmlFor='confirmPassword' 
                    variant='form-label'
                >
                    Confirm Password:
                </Label>
                <Controller 
                    name='confirmPassword'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <Input 
                            {...field}
                            placeholder="Confirm your password"
                            variant='form-input'
                            type='password'
                        />
                    )}
                />
            </StyledFormGroup>
            <Typography variant='error-message'>
                {errors.confirmPassword?.message}
            </Typography>

            <StyledPasswordCheckerWrapper>
                <Typography
                    variant={isLengthValid ? 'success-message' : 'error-message'}
                >
                    {isLengthValid ? 'Password is at least 8 characters long.' : 'Password must be at least 8 characters long'}
                </Typography>

                <Typography
                    variant={hasSpecialCharacter ? 'success-message' : 'error-message'}
                >
                    {hasSpecialCharacter ? 'Password contains at least one special character' : 'Password must contain at least one special character.'}
                </Typography>
            </StyledPasswordCheckerWrapper>

            <div className='signup-button-wrapper'>
                <Button
                    type='submit'
                    variant='submit-button'
                >
                    Get Started
                </Button>

                <Link to="https://www.google.com/">
                    Sign up with Google
                </Link>
            </div>

            <div className='have-account-wrapper'>
                Already have an account?
                <Link to="/login">
                    Log in
                </Link>
            </div>
        </StyledSignupForm>
    );
};

export default Signup;