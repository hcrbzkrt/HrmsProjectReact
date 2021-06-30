import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {Table,Button, Header,Icon} from "semantic-ui-react";
import JobAdvertisementService from '../services/jobAdvertisementService';


export default function JobAdvertisements() {

  const [jobAdvertisements, setJobAdvertisements] = useState([]);


  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getJobAdvertisements().then((result) => setJobAdvertisements(result.data.data));
  }, []);


  return (
    <div style={{marginTop:"0.3em"}} >
      <Header  as="h2">
        <Icon name="bullhorn" />
        <Header.Content>Employers</Header.Content>
      </Header>

      <Table  color="black" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max Salary</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements?.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobTitle.title}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minSalary} ₺</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxSalary} ₺</Table.Cell>
            
              <Table.Cell>
                <Button as={Link} to={`/jobadvertisements/${jobAdvertisement.id}`}
                    content="Details see"
                    icon="right arrow"
                    labelPosition="right"
                  />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
     
    </div>
  )
}