import React from 'react';
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
    newPassword: string;
    confirmPassword: string;
}

const validationSchema = yup.object().shape({
    newPassword: yup.string().required("New password is required"),
    confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref('newPassword')], 'Passwords must match'),
});

const UpdatePassword: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormInputs>({
        resolver: yupResolver(validationSchema),
    });
    return(
        <div>

        </div>
    );
};

export default UpdatePassword;