import React from "react";

const Posts = ({ posts, setClick }) => {
  return (
    <>
      <button value="users" onClick={(e) => setClick(e.target.value)}>
        users
      </button>
      <button value="posts" onClick={(e) => setClick(e.target.value)}>
        posts
      </button>
      <button value="comments" onClick={(e) => setClick(e.target.value)}>
        comments
      </button>
      <main>
        {posts.length ? (
          <ul>
            {posts.map((post) => (
              <ul key={post.id}>
                {JSON.stringify(post)}
                <br />
                <br />
              </ul>
            ))}
          </ul>
        ) : (
          <p>no posts</p>
        )}
      </main>
    </>
  );
};

export default Posts;
