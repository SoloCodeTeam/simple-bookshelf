import "./style.css"

export function NavbarComponent() {
    return(
        <div className="Navbar">
            <h1>BookShelf</h1>
            <button>add</button>
            <form className="modal">
                <h2>New Book!</h2>
                <input type="text" />
                <input type="text" />
                <input type="text" />
            </form>
        </div>
    )
}