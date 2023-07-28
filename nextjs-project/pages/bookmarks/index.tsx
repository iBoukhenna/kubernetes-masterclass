import { fetchBookmarks } from "@/services/api";
import { BookmarksResponse } from "@/services/models";
import { GetServerSideProps } from "next";

interface HomeProps {
  bookmarks: BookmarksResponse;
}
export default function Home({bookmarks}: HomeProps) {
    return (
      <div>
          <h1>Bookmarks</h1>
          { bookmarks.data.map(bookmark => <h2 key={bookmark.id}>{bookmark.title}</h2>) }
      </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1, query = "" } = context.query;
  const bookmarks = await fetchBookmarks(parseInt(String(page)), String(query))
  return {
    props: { 
      bookmarks
    }
  }
}