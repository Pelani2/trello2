import React from "react";
import { useDispatch } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { passwordResetStart, passwordResetFailure, passwordResetSuccess } from "../../store/actions/passwordResetSlice";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "../../components/Typography";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { StyledForm, StyledFormGroup, StyledButtonWrapper } from "../../styles/loginSignupStyles";

interface FormInputs {
    email: string;
}

const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required").email("Invalid email format"),
});

const ResetPassword: React.FC = () => {
    const dispatch = useDispatch();

    const {
        handleSubmit, 
        control, 
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async(data: FormInputs) => {
        dispatch(passwordResetStart());

        try {
            const response = await axios.post('', data);
            if (response.data.success) {
                dispatch(passwordResetSuccess());
            } else {
                dispatch(passwordResetFailure(response.data.message));
            }
        } catch (error) {
            if (error instanceof Error) {
                dispatch(passwordResetFailure(error.message)); 
            } else {
                dispatch(passwordResetFailure("An unexpected error occurred."));
            }
        }
    };
    // do layout
    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="primary-title">
                Forgot password?
            </Typography>
            <Typography variant="">
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
            </StyledButtonWrapper>
        </StyledForm>
    )
};

export default ResetPassword;