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
        <div>
            Verify
        </div>
    );
};

export default VerifyPassword;