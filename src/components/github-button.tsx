import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
    color: black;
    background-color: white;
    font-weight: bold;
    width: 100%;
    margin-top: 50px;
    padding: 10px 20px;
    border-radius: 50px;
    border: 0;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
        transition: all 0.2s ease-out; 
    }
`;
const Logo = styled.img`
    height: 25px;
`;

export default function GithubBtn(){
    const navigate = useNavigate();
    const onClick = async () => {
        try{
            const provider = new GithubAuthProvider();
            await signInWithPopup(auth, provider);
            navigate("/");
        } catch (e){
            console.error(e);
        }
    };
    return(
        <Button onClick={onClick}>
            <Logo src="/github-button.svg" />
            Continue with Gitbhub
        </Button>
    );
}