import React from "react";
import { useParams } from "react-router-dom";

function PostPage() {
  const { id } = useParams();
  return <section className='pb-5'>PostPage id= {id}</section>;
}

export default PostPage;
