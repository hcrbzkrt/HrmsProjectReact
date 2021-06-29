import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header, Image, Table, Button, Icon } from "semantic-ui-react";
import CvService from "../services/cvService";

export default function Cvs() {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getCvs().then((result) => setCvs(result.data.data));
  }, []);

  return (
    <div>
      <Table celled color={"black"}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employer</Table.HeaderCell>
            <Table.HeaderCell>Technologies</Table.HeaderCell>
            <Table.HeaderCell>Languages</Table.HeaderCell>
            <Table.HeaderCell>Link</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.id}>
              <Table.Cell>
                <Header as="h4" image>
                  <Image src={cv.images[0].imageUrl} rounded size="mini" />
                  <Header.Content>
                    {cv.candidate.firstName + " " + cv.candidate.lastName}
                    <Header.Subheader>
                      {cv.candidate.birtDate}
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>
                {cv.cvTechnology.map((technology) => (
                  <p key={technology.id}>{technology.name}</p>
                ))}
              </Table.Cell>

              <Table.Cell>
                {cv.cvForeignLanguage.map((lang) => (
                  <p key={lang.id}>{lang.foreignLanguageName + " Seviye: " + lang.languageLevel}</p>
                ))}
              </Table.Cell>

              <Table.Cell>
                <a href={cv.cvSocialMedia} target={"_blank"} rel="noopener noreferrer">
                  <Button color="social media">
                    <Icon name="social media" /> Link
                  </Button>
                </a>
              </Table.Cell>

              <Table.Cell>
                <Button animated as={Link} to={`/cvs/${cv.candidate.id}`}>
                  <Button.Content visible>Detayları Gör</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}