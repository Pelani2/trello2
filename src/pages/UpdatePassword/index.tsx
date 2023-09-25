import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from "../../components/Typography";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { StyledForm, StyledFormGroup, StyledButtonWrapper } from "../../styles/loginSignupStyles";

interface FormInputs {
    newPassword: string;
    confirmPassword: string;
}

const validationSchema = yup.object().shape({
    newPassword: yup.string().required("New password is required"),
    confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref('newPassword')], 'Passwords must match'),
});

const UpdatePassword: React.FC = () => {
    const navigate = useNavigate();
    const [passwordStrength, setPasswordStrength] = useState('');

    const {
        handleSubmit,
        control,
        formState: { errors },
        watch,
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
    });

    const password = watch('newPassword');

    useEffect(() => {
        if (password) {
            const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
            if (password.length < 6) {
                setPasswordStrength('Weak');
            } else if (password.length < 10) {
                setPasswordStrength('Good');
            } else if (specialCharacters.test(password)) {
                setPasswordStrength('Very Strong');
            } else {
                setPasswordStrength('Strong');
            }
        } else {
            setPasswordStrength('');
        }
    }, [password]);
    
    const getPasswordStrengthColor = (strength: string) => {
        switch(strength) {
            case "Weak": 
                return '#FF0000';
            case "Good":
                return '#FFA500';
            case "Strong":
                return '#008000';
            case "Very Strong":
                return "#006400";
            default:
                return "#000000";
        }
    };

    const onSubmit = (data: FormInputs) => {
        console.log(`New Password: ${data.newPassword}`);

        // simulacija
        const response = { data: { success: true } };

        if (response.data.success) {
            console.log("Password updated successfully");
            navigate("/login");
        } else {
            console.log("An error occurred while updating the password");
        }
    };

    return(
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='primary-title'>
                Update your password
            </Typography>
            <Typography variant='sub-title'>
                Make sure you create a different password
            </Typography>

            <StyledFormGroup>
                <Label 
                    htmlFor='newPassword'
                    variant='form-label'
                >
                    New password:
                </Label>
                <Controller 
                    name='newPassword'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <Input 
                            {...field}
                            placeholder='Enter your new password'
                            variant='form-input'
                            type='password'
                        />
                    )}
                />
            </StyledFormGroup>
            {errors.newPassword && (
                <Typography variant='error-message'>
                    {errors.newPassword.message}
                </Typography>
            )}
            {passwordStrength && (
                <Typography variant=''>
                    Password strength: {passwordStrength}
                </Typography>
            )}

            <StyledFormGroup>
                <Label 
                    htmlFor='confirmPassword'
                    variant='form-label'
                >
                    Confirm password:
                </Label>
                <Controller 
                    name='confirmPassword'
                    control={control}
                    defaultValue=''
                    render={({ field }) => (
                        <Input 
                            {...field}
                            placeholder='Confirm your new password'
                            variant='form-input'
                            type='password'
                        />
                    )}
                />
            </StyledFormGroup>
            {errors.confirmPassword && (
                <Typography variant='error-message'>
                    {errors.confirmPassword.message}
                </Typography>
            )}
            <StyledButtonWrapper>
                <Button
                    type='submit'
                    variant='submit-button'
                >
                    Update Password
                </Button>
            </StyledButtonWrapper>
        </StyledForm>
    );
};

export default UpdatePassword;