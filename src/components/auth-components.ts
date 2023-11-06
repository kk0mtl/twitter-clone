import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    width: 420px;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
`;
export const Title = styled.h1`
    font-size: 42px;
    font-weight: bold;
`;
export const Form = styled.form`
    margin-top: 50px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;
export const Input = styled.input`
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    width: 100%;
    font-size:16px; 
    &[type="submit"]{
        cursor: pointer;
        color: white;
        font-weight: bold;
        background-color: #1d9bf0;
        &:hover{
            opacity: 0.8;
            transition: all 0.2s ease-out; 
        }

        &.pwdReset{
            color: white;
            padding: 10px 20px;
            border-radius: 50px;
            background-color: transparent;
            border: 1px solid white;
            font-weight: bold;
            &:hover{
                        color: #1d9bf0;
                        border: 1px solid #1d9bf0;
                        transition: all 0.2s ease-out; 
                    }
        }
    }
`;

export const Error = styled.span`
    font-weight: 600;
    color: tomato;
`;

export const Reset = styled.span`
    font-weight: 500;
    margin-top: 20px;
    color: white;
    text-align: center;
    font-size: 13px;
    line-height: 120%
`;

export const Switcher = styled.span`
    margin-top: 20px;
    a{
        font-weight: bold;
        color: #1d9bf0;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;
