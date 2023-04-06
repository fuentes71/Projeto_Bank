/* /* import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import TitlePage from '../components/TitlePage';
import { useAppDispatch } from '../store/hooks';

import Transaction from './Home/components/Transactionprops';

export const addTransaction: React.FC = () => {
  const dispatch = useAppDispatch();

  const [description, setDescription] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [value, setValue] = useState<number| null>(null);
  const [valueError, setValueError] = useState<boolean>(false);


  useEffect(() => {
    if (description.length) {
      if (description.length < 3) {
        setNameError(true);
      } else {
        setNameError(false);
      }
    } else {
      setNameError(false);
    }
  }, [description]);

  useEffect(() => {
    if (value.length) {
      if (value.length < 0) {
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
    setValue(null);
  };

  const handleAdd = () => {
    if (!description.length) {
      setNameError(true);
      return;
    }

    if (!value.length) {
      setPhoneError(true);
      return;
    }

    dispatch(addContact({ description, value }));
    handleClean();
  };

  return (
    <>
    <Grid container spacing={2}>
      <TitlePage title="Adicionar uma transação" />
      <Grid item xs={12}>
        <TextField
          error={nameError}
          value={name}
          onChange={event => setDescription(event.target.value)}
          helperText={nameError ? 'Digite uma descrição.' : ''}
          fullWidth
          id="description"
          label="descrição"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          error={phoneError}
          onChange={event => setvalue(event.target.value)}
          helperText={phoneError ? 'Digite um valor válido.' : ''}
          fullWidth
          id="value"
          label="valor"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6}></Grid>
        <Button onClick={handleClean} fullWidth variant="outlined">
          Limpar
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={handleAdd} disabled={nameError || phoneError} fullWidth variant="contained">
          Cadastrar
        </Button>
      </Grid>
    </>
    );
};  */



export {}