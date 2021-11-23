import Card from "../layout/Card";
import Introduction from "../layout/Introduction";
import PageTitle from "../layout/PageTitle";
import Translator from "../i18n/Translator";

export default function About() {
    return(
        <main>
            <PageTitle content={<Translator path="17"/>}/>   
            <Card id="introduction-card" content={<Introduction/>} />
        </main>        
    )    
}
