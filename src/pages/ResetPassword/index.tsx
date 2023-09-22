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
import { error } from "console";

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

    return (
        <div>
            <Typography variant="">
                Reset Password
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="email" variant="">
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
                {errors.email && (
                    <Typography variant="">
                        {errors.email.message}
                    </Typography>
                )}
                <Button
                    type="submit"
                >
                    Reset Password
                </Button>
            </form>
        </div>
    )
};

    
    

    