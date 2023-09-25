import React from "react";
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
    resetCode: string;
}

const validationSchema = yup.object().shape({
    resetCode: yup.string().required("Reset code is required"),
});

const VerifyEmail: React.FC = () => {
    const navigate = useNavigate();
    const [error, setError] = React.useState<string | null>(null);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: FormInputs) => {
        const savedCode = localStorage.getItem('randomCode');
        
        if (data.resetCode === savedCode) {
            navigate('/updatePassword');
        } else {
            setError('The entered code does not match the sent code.');
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="primary-title">
                Verify your email
            </Typography>
            <Typography variant="sub-title">
                {"Please enter the reset code set to your mail"}
            </Typography>
            <StyledFormGroup>
                <Label 
                    htmlFor="resetCode"
                    variant="form-label"
                >
                    Reset Code:
                </Label>
                <Controller 
                    name="resetCode"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <Input 
                            {...field}
                            placeholder="Enter your reset code"
                            variant="form-input"
                            type="text"
                        />
                    )}
                />
            </StyledFormGroup>
            {errors.resetCode && (
                <Typography variant="error-message">
                    {errors.resetCode.message}
                </Typography>
            )}
            {errors.resetCode && (
                <Typography variant="error-message">
                    {error}
                </Typography>
            )}
            <StyledButtonWrapper>
                <Button
                    type="submit"
                    variant="submit-button"
                >
                    Verify Email
                </Button>
            </StyledButtonWrapper>
        </StyledForm>
    );
};

export default VerifyEmail;