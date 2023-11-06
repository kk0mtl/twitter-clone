import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Error, Form, Input, Switcher, Title, Wrapper } from "./auth-components";
import GithubBtn from "./github-button";

export default function CreateAccount(){
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { target: {name, value} } = e;
        if (name === "name"){
            setName(value);
        } else if (name === "pwd"){
            setPassword(value);
        } else if (name === "email"){
            setEmail(value);
        }
    };

    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if(isLoading || name === "" || email === "" || password === "") return;
        try{
            setLoading(true);
            const credentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log(credentials.user, credentials.providerId, credentials.operationType);
            await updateProfile(credentials.user, {
                displayName: name,
            });
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
            <Title>Join Twitter</Title>
            <Form onSubmit={onSubmit}>
                <Input onChange={onChange} name="name" value={name} placeholder="Name" type="text" required />
                <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
                <Input onChange={onChange} name="pwd" value={password} placeholder="Password" type="password" required autoComplete="off" />
                <Input type="submit" value={isLoading ? "Loading . . ." : "CreateAccount"} />
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Already have an account? <Link to="/login">Join &rarr;</Link>
            </Switcher>
            <GithubBtn />
        </Wrapper>
    );
}