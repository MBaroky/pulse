import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import dataJson from "../blog.json";
import BlogItem from "../components/BlogItem";

function BlogPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataJson.posts);
  }, []);
  return (
    <>
      <PageHeader
        heading={"Blogs"}
        desc={`
Embark on an enlightening journey through our extensive collection of  captivating and insightful blog posts, where you'll discover a treasure  trove of thought-provoking articles, expert analyses, and cutting-edge  insights into the latest trends shaping our industry and beyond.
`}
      />
      <section className='mt-5 pt-3 pb-5'>
        <div className='container-fluid '>
          <div className='row'>
            {data?.map(item => (
              <BlogItem key={item.post_id} data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPage;
