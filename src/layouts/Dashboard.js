import React from "react";import Navi from './Navi'
import { Route } from 'react-router';
import Cvs from '../pages/Cvs';
import Employers from '../pages/Employers';
import Categories from './Categories'
import Candidates from '../pages/Candidates';
import JobAdvertisements from '../pages/JobAdvertisements';
import { Container, Grid } from 'semantic-ui-react';

export default function Dashboard() {
  return (
    <div >
        <Navi />
            <Container style={{marginTop:"0.5em"}} className="main">                
                <Grid stackable>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column style={{marginTop:"0.5em"}} width={12}>
                        <Route exact path="/cvs" component={Cvs}/>
                        <Route exact path="/employers" component={Employers}/>
                        <Route exact path="/candidates" component={Candidates}/>
                        <Route exact path="/jobadvertisemenets" component={JobAdvertisements}/>
                    </Grid.Column>
                </Grid>
            </Container>
            </div>
  );
}