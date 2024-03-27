'use client'
import Image from "next/image";
import Link from "next/link";
import LOGO from '../../../public/updatedgglogo.png';
import { Formik, Field, Form, FormikHelpers } from "formik";
import * as Yup from 'yup';
import { useState } from "react";
export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleEmail = (validateEmail : string) : boolean => {
        console.log("email ", validateEmail)
        if (validateEmail.length === 0) {
            setEmail(validateEmail);
            setEmailError("Email field can't be empty")
            return false;
        }
        if (!validateEmail.includes("@")) {
            setEmailError("Must be valid email format");
            return false;
        }
        setEmailError("");
        setEmail(validateEmail);
        return true;
    }

    const handlePassword = (validatePassword : string) : boolean => {
        const hasSpecialChar = /[!@#$%^&*()_+{}|:"<>?[\];',./]/.test(validatePassword);
        const hasNumber = /[0-9]/.test(validatePassword);
        const hasLowerCase = /[a-z]/.test(validatePassword);
        const hasUpperCase = /[A-Z]/.test(validatePassword);
        const isAtLeast8Chars = validatePassword.length >= 8;
        console.log("password ", validatePassword);
        if (validatePassword.length === 0) {
            setEmail(validatePassword);
            setPasswordError("Password field can't be empty");
            return false;
        }
        if (!hasSpecialChar) {
            setPasswordError("Password must contain a special character");
            setPassword(validatePassword);
            return false;
        }
        if (!hasNumber) {
            setPasswordError("Password must contain a number");
            setPassword(validatePassword);
            return false;
        }
        if (!hasLowerCase) {
            setPasswordError("Password must contain a lower case character");
            setPassword(validatePassword);
            return false;
        }
        if (!hasUpperCase) {
            setPasswordError("Password must contain an upper case character");
            setPassword(validatePassword);
            return false;
        }
        if (!isAtLeast8Chars) {
            setPasswordError("Password must be at least 8 characters");
            setPassword(validatePassword);
            return false;
        }
        setPassword(validatePassword);
        setPasswordError("")
        return true;
    }

    const handleSubmit = () => {
        const validEmail = handleEmail(email);
        const validPassword = handlePassword(password);
        if (validEmail && validPassword) {
            setError("Successfully signed in");
        } else {
            setError("Error logging in");
        }
    }
    
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            {/*<Image src={LOGO} alt="" className="w-[250px] h-[250px]" />*/}
            <div className="flex items-center flex-col border-black border-2 p-10 px-20">
                <p className="gravedigger-font text-5xl font-semibold mb-20">Login</p>
                <div className="flex items-center flex-col w-80">
                    <input type="email" className="border-black border-2 w-full h-12 pl-1" placeholder="Email" onChange={(e) => handleEmail(e.target.value)} />
                    <div className="w-full h-12 flex items-start justify-center text-red-500 text-center">{emailError}</div>
                    <input type="password" className="border-black border-2 w-full h-12 pl-1" placeholder="Password" onChange={(e) => handlePassword(e.target.value)} />
                    <div className="w-full h-12 flex items-start justify-center text-red-500 text-center">{passwordError}</div>
                    <button className="w-full h-12 font-semibold bg-black text-white border-2 border-black hover:text-black hover:bg-white transition-all delay-75" onClick={handleSubmit}>Login</button>
                    <div className="w-full h-12 flex items-start justify-center text-red-500 text-center">{error}</div>
                </div>
                <p>Don't have an account? <Link href={"/signup"} className="font-semibold hover:underline">Sign up here</Link></p>
            </div>
        </div>
    )
}
