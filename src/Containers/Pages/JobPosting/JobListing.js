import React, { useState, useEffect } from 'react';
import { useJobs } from './api.js';
import Pagination from "./Pagination.js";
import '../../../style/JobListing.css';
import '../../App.css';

export default function JobListing() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch('https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=2')
  //     .then((response) => {
  //       if (response.ok) return response.json();
  //       throw new Error('something went wrong while requesting posts');
  //     })
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError(error.message));
  // }, []);
  const {getJobs, jobList, isLoading, error} = useJobs()
React.useEffect(() => {
  getJobs(2)
},[])
  if (error) return <h1>{error}</h1>;
 console.log(jobList, "joblist")
  return( 
  <>
  <div className='bg-dark background__wrap'></div>
  <div className='container'>
  {jobList?.data?.length > 0 ? (
        <>
          <Pagination
            data={jobList.data}
            RenderComponent={Post}
            title="Jobs posted by you"
            pageLimit={1}
            dataLimit={12}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}
      </div>
  </>
  );
}

function Post(props) {
    const { id, title, location, description } = props?.data;
    console.log(props, "props")
    return (
       <div className="post">
        <h1 className='card-title'>{title}</h1>
        <p className='card-description'>{description}</p>
        <small className='card-location'>{location}</small>
        <button className='card-button'> View Applications </button>
        </div> 
    );
  }
    