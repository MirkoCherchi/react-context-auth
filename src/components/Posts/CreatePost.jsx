import React from "react";
import axios from "axios";
import NewPostForm from "./NewPostForm";

const apiUrl = import.meta.env.VITE_BASE_API_URL;

const CreatePost = () => {
  const handleNewPostCreated = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NewPostForm onNewPostCreated={handleNewPostCreated} />
    </div>
  );
};

export default CreatePost;
