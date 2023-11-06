import { auth } from "../firebase";

export default function Home(){
    const logOut = () => {
        auth.signOut();
    };
    return(
        <>
            <h2><button onClick={logOut}>Logout</button></h2>
        </>
    );
}