import { Grid,Box ,Stack,IconButton} from '@mui/material';
import React, { useEffect } from 'react';
import TitlePage from '../../components/TitlePage';
import Transaction from './components/Transactionprops';
import AddchartRoundedIcon from '@mui/icons-material/AddchartRounded';
import { useAppSelector } from '../../store/hooks';
import {  TransactionType, selectAllTransactions } from '../../store/modules/TransactionsSlice';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  const transactions = useAppSelector(selectAllTransactions);
const sold = transactions.map((t)=>
  {if(t.type === 'input'){
    return t.value
  }}, 
)
  console.log(sold);
  console.log(transactions);
  
const soma = transactions.map(item => {
  return item
}).reduce((total, currentValue) => {
  if(currentValue.type === 'input'){
  return total += currentValue.value;

  }
  else{
      return total -= currentValue.value;
  }

},0);

console.log(soma);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item>
          <TitlePage title="Transações" />
        </Grid>
        <Grid item xs={12}>
          {transactions?.map((t) => (
            <Transaction key={t.id} mode={t.type} description={t.descripition} value={t.value}/>
          
          ))}
        </Grid>
      </Grid>
      <Box position='fixed' ml='60%' sx={{bottom: '5vh'}}>
        <Stack direction="row" spacing={1}> 
        <Link to='/add'>
          <IconButton  aria-label="transacao">
            <AddchartRoundedIcon sx={{cursor: 'pointer'}}/>
          </IconButton>      
        </Link>
        </Stack>
      </Box>
    </>
  );
};

export default Home;
