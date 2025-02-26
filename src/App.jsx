import Search from "./components/Search.jsx";
import {useState} from "react";

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')

    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <header>
                    <img src="../public/hero.png" alt="hero banner"/>
                    <h1>Find <span className="text-gradient">Movies</span> You&#39;ll Enjoy Without the Hassle</h1>
                </header>

                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

        </main>
    )
}
export default App
