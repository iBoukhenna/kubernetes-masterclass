import React from "react";
import Link from 'next/link'
import {BookmarksResponse} from "../services/models";

interface PaginationProps {
    bookmarks: BookmarksResponse
}

const Pagination: React.FC<PaginationProps> = ({bookmarks}) => {
    const path = "/bookmarks";
    const firstPage = {pathname: path, query: { page: 1 }}
    const previousPage = {pathname: path, query: { page: bookmarks.currentPage - 1 }}
    const nextPage = {pathname: path, query: { page: bookmarks.currentPage + 1 }}
    const lastPage = {pathname: path, query: { page: bookmarks.totalPages }}
    console.log(bookmarks.currentPage);
    console.log(bookmarks.totalPages);
    console.log(nextPage);
    console.log(lastPage);
    return(
        <div>
            <nav aria-label="Page navigation">
                <ul className="flex justify-center space-x-2">
                    <li className={`page-item ${!bookmarks.hasPrevious ? 'opacity-50 pointer-events-none' : ''}`}>
                        <Link href={firstPage} className="page-link">First
                        </Link>
                    </li>

                    <li className={`page-item ${!bookmarks.hasPrevious ? 'opacity-50 pointer-events-none' : ''}`}>
                        <Link href={previousPage} className="page-link">Previous
                        </Link>
                    </li>

                    <li className={`page-item ${!bookmarks.hasNext ? 'opacity-50 pointer-events-none' : ''}`}>
                        <Link href={nextPage} className="page-link">Next
                        </Link>
                    </li>

                    <li className={`page-item ${!bookmarks.hasNext ? 'opacity-50 pointer-events-none' : ''}`}>
                        <Link href={lastPage} className="page-link">Last
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;