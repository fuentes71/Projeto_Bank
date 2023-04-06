import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { selectAllTransactions } from '../store/modules/TransactionsSlice';



function ResponsiveAppBar() {
  const transactions = useAppSelector(selectAllTransactions);

const sold = transactions.map(item => {
  return item
}).reduce((total, currentValue) => {
  if(currentValue.type === 'input'){
  return total += currentValue.value;
  }else{
      return total -= currentValue.value;
  }
},0);
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Meu Extrato
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: { md: 'flex-end' },color: 'white' }}
          >
            <Typography variant='h6'>
              Saldo Total: R$ {transactions.length? sold.toFixed(2) : 0}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
