import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { FeedContext } from "../context/FeedContext";
import { client } from "../utils";

const DeletePost = ({ postId, closeModal, goToHome }) => {
  const { feed, setFeed } = useContext(FeedContext);
  const history = useHistory();

  const handleDeletePost = () => {
    closeModal();

    if (goToHome) {
      history.push(`/`);
    }

    setFeed(feed.filter((post) => post._id !== postId));
    toast.success("Your post has been deleted successfully");
    client(`/post/${postId}`, { method: "DELETE" });
  };

  return (
    <span className="danger" onClick={handleDeletePost}>
      Delete Post
    </span>
  );
};

export default DeletePost;
