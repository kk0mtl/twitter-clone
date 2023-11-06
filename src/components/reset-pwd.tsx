import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

import { Form, Input, Reset, Title, Wrapper } from "./auth-components";
import { useState } from "react";

export default function ResetPwd(){
    const [email, setEmail] = useState("");
    const [visible, setVisible] = useState(false);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { target: {name, value} } = e;
        if (name === "email"){
            setEmail(value);
        }
    };

    const pwdReset = (e : React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setVisible(true);
    };

    return(
        <Wrapper>
            <Title>Reset Password</Title>
            <Form>
                <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />

                <Input onClick={pwdReset} type="submit" value="Enter" />
            </Form>
            <Reset className="notification" style={visible ? {visibility:"visible"} : {visibility:"hidden"}}>"Please check your email for reset your password. If you have not received an email, please verify that your email is correct."</Reset>
        </Wrapper>
    );
}