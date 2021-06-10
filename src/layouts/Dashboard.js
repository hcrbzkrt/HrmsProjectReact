import React from "react";
import Filters from "./Filters";
import Section from "./Section";

import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import ApplicationDetail from "../pages/ApplicationDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Filters></Filters>
          </Grid.Column>
          <Grid.Column width={12}>
            <Section></Section>
            <Route exact path="/" component={CandidateList}/>
            <Route exact path="/candidates" component={CandidateList}/>
            <Route exact path="/candidates/:id" component={CandidateList}/>
            <Route path="/employers" component={EmployerList}/>
            <Route path="/jobAdvertisements" component={JobAdvertisementList}/>
            <Route path="/application" component={ApplicationDetail}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}