import React, { useEffect, useState } from "react";
import { Button, Card } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function Employers() {
  const [employer, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService.getEmployers().then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        {employer.map((employer) => (
          <Card fluid key={employer.id} color={"black"}>
            <Card.Content>
              <Card.Header>{employer.companyName}</Card.Header>
              <Card.Meta>{employer.website}</Card.Meta>
              <Card.Description>
                <p><b>Email: </b>{employer.email}</p>
                <p><b>Phone: </b>{employer.phoneNumber}</p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <div className="ui two buttons">
                
                <Button basic color="blue">
                  <a href={"https://"+employer.website} target={"_blank"} rel="noopener noreferrer">Website</a>                  
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
}