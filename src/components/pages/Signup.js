import Form from "../layout/Form";
import Input from "../layout/Input";
import PageTitle from "../layout/PageTitle";
import { useState } from "react";
//import Translator from "../i18n/Translator";

export default function Signup() {
    const [userName, setUserName] = useState(String);
    const [userEmail, setUserEmail] = useState(String);
    const [userPassword, setUserPassword] = useState(String);
        
    const submitSignUp = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:3005/users', {
            method: "POST",
            headers: { 'Content-type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({
                userName,
                userEmail,
                userPassword         
            })
        })

        const content = await response.json();
        console.log(content)
    }

    return (
        <div>
            <PageTitle content="Sign Up"/>            
            <Form onSubmit={submitSignUp}>                
                <Input required="required" type="text" placeholder={ "Type a username" } 
                    onChange={(e) => setUserName(e.target.value)} />
                <Input required="required" type="email" placeholder={ "Type your email" } 
                    onChange={(e) => setUserEmail(e.target.value)} />
                <Input required="required" type="password" placeholder={ "Type a password" } 
                    onChange={(e) => setUserPassword(e.target.value)} />
                <Input type="submit" value={"Sign Up"} />                      
            </Form>         
        </div>
    )    
}
