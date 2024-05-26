import { MainComponent } from "../main";
import { NavbarComponent } from "../navbar";

export function Home() {
    return(
        <div>
            <NavbarComponent/>
            <MainComponent/>
        </div>
    )
}