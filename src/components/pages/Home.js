import Card from "../layout/Card";
import Person from "../layout/Person";

export default function Home() {
    return(
        <main>
            <Card id="person-card" content={<Person/>} customClass="full_width"/>
            <Card id="person-card"  customClass="full_width"/>
        </main>
    )    
}
