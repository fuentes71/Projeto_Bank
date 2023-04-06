import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import GridContainerWelcome from './components/GridContainerWelcome';

interface WelcomeLayoutProps {
  component: React.FC;
}

const WelcomeLayout: React.FC<WelcomeLayoutProps> = ({ component: Component }) => {
  return (
    <GridContainerWelcome container alignItems="center">
      <Grid item xs={12}>
        <Container>
          <Component />
        </Container>
      </Grid>
    </GridContainerWelcome>
  );
};

export default WelcomeLayout;
