import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CvService from "../services/CvService";
import { Card, Image, Table, Header, Button, Icon } from "semantic-ui-react";

export default function CvDetail() {
  let { id } = useParams();

  const [cv, setCv] = useState({});

  useEffect(() => {
    let cvService = new CvService();
    cvService.getByCandidateId(id).then((result) => setCv(result.data.data));
  }, [id]);


  return (
    <div>
      <Card.Group>
        <Card fluid color={"black"}>
          <Card.Content>
            {cv.images?.map((image) => (
              <Image
                floated="left"
                size="small"
                src={image?.imageUrl}
                circular
                key={image?.id}
              />
            ))}

            <Card.Header>
              {cv.candidate?.firstName + " " + cv.candidate?.lastName}
            </Card.Header>
            <Card.Meta>
              <strong>{cv.biography}</strong>
            </Card.Meta>
            <Card.Description>
              <Table celled color={"black"}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>User</Table.HeaderCell>
                    <Table.HeaderCell>Informations</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>First Name</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{cv.candidate?.firstName}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Last Name</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{cv.candidate?.lastName}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Doğum Tarihi</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{cv.candidate?.birtDate}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Email</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{cv.candidate?.email}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>
                          <a
                            href={cv.cvSocialMedia}
                            target={"_blank"}
                            rel="noopener noreferrer"
                          >
                            <Button secondary>
                              <Icon name="link" /> Social Media Links
                            </Button>
                          </a>
                        </Header.Content>
                      </Header>
                      </Table.Cell>
                    <Table.Cell>{cv.cvSocialMedia}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card.Description>
          </Card.Content>
          <Card.Content extra></Card.Content>
        </Card>
      </Card.Group>
      <Card fluid color={"black"}>
        <Card.Content header="Biyografi" />
        <Card.Content description={cv.biography} />
      </Card>

      <Card fluid color={"black"}>
        <Card.Content header="University" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>University Name</Table.HeaderCell>
              <Table.HeaderCell>Department</Table.HeaderCell>
              <Table.HeaderCell>Start Date</Table.HeaderCell>
              <Table.HeaderCell>End Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cv.educationInformation?.map((education) => (
              <Table.Row key={education.id}>
                <Table.Cell>{education.universityName}</Table.Cell>
                <Table.Cell>{education.universityDepartmentName}</Table.Cell>
                <Table.Cell>{education.startDate}</Table.Cell>
                <Table.Cell>{education.endDate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Card fluid color={"black"}>
        <Card.Content header="Foreign Language" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Language Level</Table.HeaderCell>
              <Table.HeaderCell>Level min:1 max:5</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cv.cvForeignLanguage?.map((language) => (
              <Table.Row key={language.id}>
                <Table.Cell>{language.foreignLanguageName}</Table.Cell>
                <Table.Cell>{language.languageLevel}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Card fluid color={"black"}>
        <Card.Content header="Technologies" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Technology Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cv.cvTechnology?.map((technology) => (
              <Table.Row key={technology.id}>
                <Table.Cell>{technology.technologyName}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    </div>
  );
}