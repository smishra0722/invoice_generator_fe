import { createSlice } from "@reduxjs/toolkit";

const transactions = createSlice({
  name: "transactions",
  initialState: {
    transactions: [
      {
        id: 1,
        createdAt: "2022-03-21",
        seller: {
          sellerName: "Neelansh Equipments and machines",
          sellerAddress1: "12345 Sunny Road",
          sellerAddress2: "Sunnyville, CA 12345",
          sellerEmail: "seller@email.com",
        },
        buyer: {
          buyerName: "Neelansh Equipments and machines",
          buyerAddress1: "12345 Sunny Road",
          buyerAddress2: "Sunnyville, CA 12345",
          buyerEmail: "buyer@gmail.com",
        },
        products: [
          { id: 1, name: "Product1", quantity: 3, amount: 300 },
          { id: 2, name: "Product1", quantity: 3, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 2,
        createdAt: "2022-03-21",
        seller: {
          sellerName: "Neelansh Equipments and machines",
          sellerAddress1: "12345 Sunny Road",
          sellerAddress2: "Sunnyville, CA 12345",
          sellerEmail: "seller@email.com",
        },
        buyer: {
          buyerName: "Neelansh Equipments and machines",
          buyerAddress1: "12345 Sunny Road",
          buyerAddress2: "Sunnyville, CA 12345",
          buyerEmail: "buyer@gmail.com",
        },
        products: [{ id: 1, name: "Product1", quantity: 3, amount: 300 }],
        delivery: {
          note: "Do this this way",
        },
      },
    ],
    singleTransaction: {},
  },
  reducers: {
    getAllTransactions: (state) => {
      state.transactions = state.transactions;
    },
    addTransaction: (state, action) => {
      const newState = [...state.transactions, action.payload];
      console.log("ADD TRANSCATIONS", action.payload, newState);
      state.transactions = newState;
    },
    updateTransaction: (state, action) => {
      state.transactions = state.transactions.map((transaction) => {
        if (transaction.id == action.payload.id) {
          return {
            ...transaction,
            ...action.payload,
          };
        }
        state.singleTransaction = {};
        return transaction;
      });
    },
    deleteTransaction: (state, action) => {
      console.log("IDDD", action.payload);
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
    },
    getTransactionById: (state, action) => {
      state.singleTransaction = state.transactions.filter((transaction) => {
        return transaction.id === action.payload;
      });
    },
    clearSingleTransaction: (state, action) => {
      state.singleTransaction = {};
    },
  },
});

export const {
  updateTransaction,
  deleteTransaction,
  getTransactionById,
  getAllTransactions,
  addTransaction,
  clearSingleTransaction,
} = transactions.actions;

export default transactions.reducer;
