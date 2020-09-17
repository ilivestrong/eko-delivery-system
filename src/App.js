import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import {
  Layout
} from "./containers";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Layout />
      </Box>
    </Container>
  );
}