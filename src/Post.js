import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Post() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
    };

    try {
      await axios.post('http://localhost:8000/api/addPost', newPost, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Post Added Successfully');
      navigate('/confirmation', {
        state: { message: 'Your post has been successfully submitted!' },
      });
    } catch (err) {
      alert('Error adding post: ' + err.response?.data?.message || err.message);
    }
  };

  return (
    <div>
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-white bg-opacity-90">
        <h2 className="mb-5 text-2xl font-semibold">Add New Post</h2>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <label htmlFor="title" className="block mb-2 text-sm font-medium">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="content" className="block mb-2 text-sm font-medium">Content:</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full max-w-sm py-2 bg-[#003d73] text-white rounded-md text-lg hover:bg-[#0056a3]">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}
