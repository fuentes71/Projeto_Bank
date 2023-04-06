import React from 'react';
import { Avatar, Typography, Grid,Divider } from '@mui/material';

interface TransactionProps {
  mode: 'input' | 'output';
  value: number;
  description: string;
}

const Transaction: React.FC<TransactionProps> = ({ mode, value, description }) => {
  return (
    <>
      <Grid container direction='row' alignItems='center' paddingY={1}>
        <Grid item mr={1}>
          <Avatar  sx={{ bgcolor: mode === 'input' ? '#7ED957': '#FF5757' }}>{mode === 'input' ? 'E' : 'S'}</Avatar>
        </Grid>
        <Grid item> 
          {mode === 'input'? (<Typography variant='h5'>Depósito</Typography>) : (<Typography variant='h5'>Saque</Typography>)}
          <Typography mt='-8px' ml='2px' variant='subtitle1'>{description}: R$ {`${value.toFixed(2)}`}</Typography>
        </Grid>
      </Grid>
      <Divider  variant="middle"/>
    </> );
};


export default Transaction;
