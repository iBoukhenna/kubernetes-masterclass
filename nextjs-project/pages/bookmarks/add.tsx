import type { NextPage } from 'next'
import React, {useState} from "react";
import {saveBookmark} from "../../services/api";

export default function Add() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState<string|null>(null);

  const handleSubmit = async (e: React.SyntheticEvent) => {
      e.preventDefault();
      if(!url) {
          alert("Please enter URL");
          return;
      }
      const payload = {
          title,
          url
      }
      const response = await saveBookmark(payload)
      console.log("SaveBookmark response: ", response)
      setTitle("");
      setUrl("");
      setMessage("Bookmark saved successfully")
  }

  return (
    <div>
      <div className="border rounded-lg shadow-lg">
        <div className="bg-gray-800 text-white text-center py-3">
          <h2>Create New Bookmark</h2>
        </div>
        <div className="p-4">
          {message && <div className="bg-blue-500 text-white py-2 px-4 mb-4 rounded-md">{message}</div>}
          <form onSubmit={e => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="url" className="block text-gray-800 font-semibold mb-1">URL</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    id="url" value={url} onChange={e => setUrl(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="block text-gray-800 font-semibold mb-1">Title</label>
              <input type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    id="title" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}