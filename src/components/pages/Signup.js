import Form from "../layout/Form";
import Input from "../layout/Input";
import PageTitle from "../layout/PageTitle";
import { useState } from "react";
//import Translator from "../i18n/Translator";

export default function Signup() {
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userPassword, setUserPassword] = useState();
        
    const submitSignUp = (e) => {
        e.preventDefault();
        console.log({
            userName,
            userEmail,
            userPassword         
        })
    }

    return (
        <div>
            <PageTitle content="Sign Up"/>            
            <Form onSubmit={submitSignUp}>                
                <Input type="text" placeholder={ "Type a username" } 
                    onChange={(e) => setUserName(e.target.value)} />
                <Input type="email" placeholder={ "Type your email" } 
                    onChange={(e) => setUserEmail(e.target.value)} />
                <Input type="password" placeholder={ "Type a password" } 
                    onChange={(e) => setUserPassword(e.target.value)} />
                <Input type="submit" value={"Sign Up"} />                      
            </Form>         
        </div>
    )    
}
