'use client'
import Image from "next/image";
import Link from "next/link";
import LOGO from '../../../public/updatedgglogo.png';
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleEmail = (validateEmail : string) : boolean => {
        console.log("email ", validateEmail)
        if (validateEmail.length === 0) {
            console.log("email cant be empty")
            setEmail(validateEmail);
            setEmailError("Email field can't be empty")
            return false;
        }
        if (!validateEmail.includes("@")) {
            console.log("must be valid format")
            setEmail(validateEmail)
            setEmailError("Must be valid email format");
            return false;
        }
        console.log("no email error")
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

    const handleSignIn = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/signin", {
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
    
            if (!response.ok) {
                console.log(response);
                if (response.status === 406) {
                    throw new Error("Credentials do not much");
                }
                else if (response.status === 404) {
                    throw new Error("No account associated with that email");
                } else {
                    throw new Error("Unable to sign in please try again");
                }
            }
    
            const data = await response.json();
            console.log(data);
            // console.log(typeof data.session);
            // console.log(data.session);
            return true;
        } catch (error : any) {
            return error;
        }
    }

    // For logging in we just need to implement checking a user's login information with the database so the above functions aren't needed
    const handleSubmit = async () : Promise<void> => {
        const validEmail = handleEmail(email);
        const validPassword = handlePassword(password);
        if (validEmail && validPassword) {
            // setError("Successfully signed in");
            const signinResponse = await handleSignIn();
            if (signinResponse === true) {
                router.push("/");
                return;
            } else {
                setError(signinResponse);
                return;
            }
        } else {
            return;
        }
    }
    
    return (
        <div className="w-screen h-screen flex items-center justify-center flex-col">
            {/*<Image src={LOGO} alt="" className="w-[250px] h-[250px]" />*/}
            <div className="flex items-center flex-col border-black border-2 p-10 px-20 sm:w-[484px] w-5/6">
                <p className="gravedigger-font text-5xl font-semibold mb-20">Login</p>
                <div className="flex items-center flex-col min-w-60 sm:w-80">
                    <input type="email" className="border-black border-2 w-full h-12 pl-1" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <div className="w-full h-12 flex items-start justify-center text-red-500 text-center">{emailError}</div>
                    <input type="password" className="border-black border-2 w-full h-12 pl-1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="w-full h-12 flex items-start justify-center text-red-500 text-center">{passwordError}</div>
                    <button className="w-full h-12 font-semibold bg-black text-white border-2 border-black hover:text-black hover:bg-white transition-all delay-75" onClick={handleSubmit}>Login</button>
                    <div className="w-full h-12 flex items-start justify-center text-red-500 text-center">{error && error.toString()}</div>
                </div>
                <p className="text-center">Don't have an account? <Link href={"/signup"} className="font-semibold hover:underline">Sign up here</Link></p>
            </div>
        </div>
    )
}
