import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import TransactionType from "../../types/TransactionType";

const adapter = createEntityAdapter<TransactionType>({
  selectId: (transaction) => transaction.id,
});

const slice = createSlice({
  name: "transactions",
  initialState: adapter.getInitialState(),
  reducers: {
    addTransaction: adapter.addOne,
  },
});

export const { selectAll: selectAllTransactions } = adapter.getSelectors(
  (state: RootState) => state.transactions
);
export const { addTransaction } = slice.actions;
export const TransactionsReducers = slice.reducer;
