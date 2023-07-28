import axios, { AxiosResponse } from "axios"
import { BookmarksResponse } from "./models";

const API_BASE_URL = "http://localhost:8080"
export const fetchBookmarks = async (page: number, query: string): Promise<BookmarksResponse> => {
  const res = await axios.get<BookmarksResponse>(`${API_BASE_URL}/api/bookmarks?page=${page}&query=${query}`)
  return res.data
}

export const saveBookmark = async (bookmark: {title: string, url: string}) => {
  const res = await axios.post(`${API_BASE_URL}/api/bookmarks`, bookmark)
  return res.data
}
