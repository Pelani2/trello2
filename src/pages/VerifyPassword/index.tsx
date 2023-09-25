import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

const VerifyPassword: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: FormInputs) => {
        console.log(`Entered reset code: ${data.resetCode}`);

        const response = { data: { success: true } };

        if (response.data.success) {
            console.log(`Reset code verified successfully`);
            navigate('/login');
        } else {
            console.log(`An error occurred while verifying the reset code`);
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

export default VerifyPassword;