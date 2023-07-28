import Link from "next/link"

const NavBar = () => (
    <header>
        <nav className="bg-black">
            <div className="px-4 py-2 flex items-center justify-between">
            <div>
                <Link href="/bookmarks"><span className="text-white text-xl font-bold">Bookmarker</span></Link>
            </div>
            <div className="flex items-center">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link href="/bookmarks/add"><span className="text-white">Add Bookmark</span></Link>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </header>
);

export default NavBar;