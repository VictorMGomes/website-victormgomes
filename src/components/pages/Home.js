import Card from "../layout/Card";
import Person from "../layout/Person";

export default function Home() {
    return(
        <main>
            <Card id="person-card" content={<Person/>}/>
        </main>
    )    
}
