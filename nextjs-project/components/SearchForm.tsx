import React, {useState} from "react";
import { useRouter } from 'next/router'

const SearchForm: React.FC = () => {
    const router = useRouter()
    const [query, setQuery] = useState("");

    const handleSearch = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if(query === "") {
            await router.push(`/bookmarks`)
            return;
        }
        await router.push(`/bookmarks?page=1&query=${query}`)
    };
    return (
        <div className="pb-3">
            <form method="get" onSubmit={handleSearch}>
                <div className="flex items-center">
                    <input
                        className="border border-gray-300 rounded-md px-4 py-2 mr-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex-grow"
                        type="search"
                        name="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}/>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;