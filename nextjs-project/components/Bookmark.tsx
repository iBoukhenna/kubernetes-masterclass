import { Bookmark, BookmarksResponse } from '@/services/models';
import Link from 'next/link';
import React from 'react';

interface BookmarkProps {
    bookmark: Bookmark
}

const Bookmark: React.FC<BookmarkProps> = ({ bookmark }) => (
    <div>
        <div className="mt-4 bg-blue-500 text-white px-4 py-3 rounded-md shadow-md">
            <h5>
                <Link href={bookmark.url} target="_blank" className="text-white text-decoration-none">
                    {bookmark.title}
                </Link>
            </h5>
        </div>
    </div>
)

export default Bookmark;