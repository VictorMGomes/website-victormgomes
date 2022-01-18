import Form from "../layout/Form";
import Input from "../layout/Input";
import PageTitle from "../layout/PageTitle";
import { useState } from "react";
//import Translator from "../i18n/Translator";

function SignIn() {
    const [userEmail, setUserEmail] = useState(String);
    const [userPassword, setUserPassword] = useState(String);
        
    const submitSignIn = async (e) => {
        e.preventDefault();
        
        const response = await fetch(`http://localhost:3005/users/login`, {
            method: "POST",
            headers: { 'Content-type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({
                userEmail,
                userPassword         
            })
        })

        const content = await response.json();
        document.cookie=`${"auth-token"}=${content.token}`;
        console.log(response)
        console.log(content)
    }

    return (
        <div>
            <PageTitle content="Sign In"/>            
            <Form onSubmit={submitSignIn}>                
                <Input required="required" type="email" placeholder={ "Type your email" } 
                    onChange={(e) => setUserEmail(e.target.value)} />
                <Input required="required" type="password" placeholder={ "Type a password" } 
                    onChange={(e) => setUserPassword(e.target.value)} />
                <Input type="submit" value={"Sign In"} />                      
            </Form>         
        </div>
    )    
}

export default SignIn;
