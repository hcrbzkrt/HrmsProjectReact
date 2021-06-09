import React from 'react';
import JobList from "../pages/JobTitleList";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList"


export default function Section() {
    return (
        <div>
        {/* 
       <EmployerList></EmployerList> 
        <CandidateList></CandidateList>
        <JobTitleList></JobTitleList> */}
        <JobAdvertisementList></JobAdvertisementList>
       
        </div>
    )
}