import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { passwordResetStart, passwordResetFailure } from "../../store/actions/passwordResetSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledForm, StyledFormGroup, StyledButtonWrapper } from "../../styles/loginSignupStyles";
import { StyledBackToLoginLink } from "./resetPasswordStyles";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { generateRandomCode } from "../../store/actions/randomCodeSlice";
import { RootState, AppDispatch } from "../../store/store";
import Typography from "../../components/Typography";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";

interface FormInputs {
    email: string;
}

const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email format"),
});

const ResetPassword: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const generatedCode = useSelector((state: RootState) => state.randomCode.code);
    const navigate = useNavigate();

    const {
        handleSubmit, 
        control, 
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = () => {
        try {
            dispatch(passwordResetStart());
            dispatch(generateRandomCode());
            alert(`Reset code: ${generatedCode}`);
            localStorage.setItem('randomCode', generatedCode);
            navigate('/verifyEmail');
        } catch (error) {
            dispatch(passwordResetFailure("Error"));
        }
    };
      
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="primary-title">
                Forgot password?
            </Typography>
            <Typography variant="sub-title">
                {"No worries we'll send you reset instructions"}
            </Typography>
            <StyledFormGroup>
                <Label 
                    htmlFor="email" 
                    variant="form-label"
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
            {errors.email && (
                <Typography variant="error-message">
                    {errors.email.message}
                </Typography>
            )}
            <StyledButtonWrapper>
                <Button
                    type="submit"
                    variant="submit-button"
                >
                    Reset Password
                </Button>
                <StyledBackToLoginLink to="/login">
                    <FaArrowLeft/> Back to Login
                </StyledBackToLoginLink>
            </StyledButtonWrapper>
        </StyledForm>
    )
};

export default ResetPassword;