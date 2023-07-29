import Bookmarks from "@/components/Bookmarks";
import SearchForm from "@/components/SearchForm";
import { fetchBookmarks } from "@/services/api";
import { BookmarksResponse } from "@/services/models";
import { GetServerSideProps } from "next";

interface HomeProps {
  bookmarks: BookmarksResponse
  query?: string
}
export default function Home(props: HomeProps) {
    return (
      <div>
          <h1>Bookmarks</h1>
          <SearchForm />
          <Bookmarks bookmarks={props.bookmarks} query={props.query} />
      </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1, query = "" } = context.query;
  const bookmarks = await fetchBookmarks(parseInt(String(page)), String(query))
  return {
    props: { 
      bookmarks,
      query
    }
  }
}