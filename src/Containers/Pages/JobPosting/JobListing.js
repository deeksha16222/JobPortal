import React, { useState, useEffect } from 'react';
import Pagination from "./Pagination.js";
import '../../../style/JobListing.css';

export default function JobListing() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=2')
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;

  return( 
  <>
  {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="Jobs posted by you"
            pageLimit={1}
            dataLimit={12}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
  </>
  );
}

function Post(props) {
    const { id, title, location, description } = props.data;
    return (
      <div className="post">
        <h1>{title}</h1>
        <small>{location}</small>
        <p>{description}</p>

      </div>
    );
  }
    