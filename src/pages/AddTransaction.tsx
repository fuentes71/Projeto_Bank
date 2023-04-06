import { Grid, TextField, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import React, {useState, useEffect} from 'react';
import TitlePage from '../components/TitlePage';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { selectAllTransactions, addTransaction } from '../store/modules/TransactionsSlice';
import { TypeTransaction } from '../types/TypeTransaction';

const AddTransiction: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<boolean>(false);
  const [value, setValue] = useState<number >(0);
  const [valueError, setValueError] = useState<boolean>(false);
  const [typeError, setTypeError] = useState<boolean>(false);
  const [type, setType] = useState<TypeTransaction>(null);
  const transactions = useAppSelector(selectAllTransactions);
  const dispatch = useAppDispatch();


// useEffect(()=>{
//   console.log(type);
  
// },[type])

  useEffect(() => {
    if(description.length) {
      if (description.length < 3) {
        setDescriptionError(true);
      } else {
        setDescriptionError(false);
      }
    } else {
      setDescriptionError(false);
    }
  }, [description]);

  useEffect(() => {
    if(value) {
      if (value < 0) {
        setValueError(true);
      } else {
        setValueError(false);
      }
    } else {
      setValueError(false);
    }
  }, [value]);

  const handleClean = () => {
    setDescription('');
    setValue(0);
  }

  const handleAdd = () => {
    if (!description.length) {
      setDescriptionError(true);
      return;
    }
    if (!type) {
      
      return;
    }
    if (!value) {
      setValueError(true);
      return;
    }

    dispatch(addTransaction({ id: Date.now(), descripition: description, type: type, value:value  }));
    console.log('bombou')
    
  }

  return (
      <>
      <Grid container spacing={2}>
        <TitlePage title="Adicionar uma transação" />
        <Grid item xs={12}>
          <TextField 
          error={descriptionError}
          value={description || ''}
            helperText={descriptionError ? 'Digite uma descrição válida.' : ''}
            fullWidth
            type='text'
            id="description"
            label="descrição"
            variant="outlined"
            onChange={(e)=>{setDescription(e.target.value)}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          error={valueError}
            value={value || ''}
            type='number'
            helperText={valueError ? 'Digite um valor.' : ''} 
            fullWidth
            id="value"
            label="valor"
            variant="outlined"
            onChange={(e)=>{setValue(Number(e.target.value))}}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Tipo:</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="input"
              name="radio-buttons-group"
              onChange={({target})=>{setType(target.value)}}
            >
              <FormControlLabel value='input' control={<Radio />} label="Depósito" />
              <FormControlLabel value='output'  control={<Radio />} label="Saque" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth variant="outlined" onClick={handleClean}>
            Limpar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth onClick={handleAdd} variant="contained">
            Cadastrar
          </Button>
        </Grid>
        </Grid>
      </>
  );
};
export default AddTransiction
