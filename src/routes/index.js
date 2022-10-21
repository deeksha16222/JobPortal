
import { Route, Routes } from 'react-router-dom';
import { Headers } from '../Containers/Components/Header/Headers';
import { Home } from '../Containers/Pages/Home';
import JobListing from '../Containers/Pages/JobPosting/JobListing';
import Login from '../Containers/Pages/Login';


export const AppRoutes = () => {
return(
    <>
    <Headers/>
    <Routes>       
        <Route exact path="/job-listing" element={<JobListing/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
</>
)
};
