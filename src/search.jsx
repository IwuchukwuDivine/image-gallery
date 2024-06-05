import { useState } from "react";

export default function SearchBar({setTerm}) {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setTerm(searchTerm);
        setSearchTerm('')
      };
    return(
        <div className="searchfixed">
            <form className="searchBar" onSubmit={handleSubmit}>
            <input type="text" placeholder="search for images" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button>Search</button>
            </form>
        </div>
    )
}