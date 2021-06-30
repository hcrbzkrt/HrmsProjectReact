import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Header, Icon, Table, Button, Grid, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function JobAdvertisementDetail() {
  let { id } = useParams();

  const [jobAdvertisement, setJobAdvertisement] = useState({});

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService.getByJobAdvertisementId(id).then((result) => setJobAdvertisement(result.data.data));
  }, [id]);

  return (
    <div>
      <Card fluid color={"black"}>
        <Card.Content header="Açıklama" />
        <Card.Content>
            {jobAdvertisement.description}
        </Card.Content>
      </Card>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Table celled color={"black"} stackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>İş veren</Table.HeaderCell>
                  <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="building" />
                        Şirket Adı
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvertisement.employer?.companyName}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="mail" />
                        Email
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvertisement.employer?.email}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="phone" />
                        Telefon
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvertisement.employer?.phoneNumber}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="world" />
                        Web Sitesi
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvertisement.employer?.website}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="list ul" />
                        Detaylar
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    <Button animated as={Link} to={`/employers/${jobAdvertisement.employer?.id}`}>
                      <Button.Content visible>Detaylara Git</Button.Content>
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={10}>
            <Table celled fixed singleLine color={"black"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>İş İlanı</Table.HeaderCell>
                  <Table.HeaderCell>Detaylar</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>İş Pozisyonu</Table.Cell>
                  <Table.Cell>{jobAdvertisement.jobTitle?.title}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Şehir</Table.Cell>
                  <Table.Cell>{jobAdvertisement.city?.name}</Table.Cell>
                </Table.Row>

                
                <Table.Row>
                  <Table.Cell>Minimum Maaş</Table.Cell>
                  <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Maksimum Maaş</Table.Cell>
                  <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                </Table.Row>

              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      
    </div>
  );
}