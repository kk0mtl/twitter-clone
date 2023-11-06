import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components";
import GithubBtn from "../components/github-button";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function CreateAccount(){
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { target: {name, value} } = e;
        if (name === "pwd"){
            setPassword(value);
        } else if (name === "email"){
            setEmail(value);
        }
    };

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if(isLoading || email === "" || password === "") return;
        try{
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        }catch(e){
            if(e instanceof FirebaseError){
                setError(e.message);
            }
        }
        finally{
            setLoading(false);
        }
        console.log(name, email, password);
    };

    return(
        <Wrapper>
            <Title>Login Twitter</Title>
            <Form onSubmit={onSubmit}>
                <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
                <Input onChange={onChange} name="pwd" value={password} placeholder="Password" type="password" required autoComplete="off" />
                <Input type="submit" value={isLoading ? "Loading . . ." : "Enter"} />
                <Link to="/forgot-pwd">
                <Input className="pwdReset" type="submit" value="Forgot Password?" />
                </Link>
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Don't have an account? <Link to="/create-account">Create &rarr;</Link>
            </Switcher>
            <GithubBtn />
        </Wrapper>
    );
}