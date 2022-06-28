import { createSlice } from "@reduxjs/toolkit";

const transactions = createSlice({
  name: "transactions",
  initialState: {
    transactions: [
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12345,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12346,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
        delivery: {
          note: "Do this this way",
        },
      },
      {
        id: 12344,
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
          { name: "Product1", quantity: 3, amount: 300 },
          { name: "Product2", quantity: 4, amount: 300 },
          { name: "Product3", quantity: 6, amount: 300 },
          { name: "Product4", quantity: 8, amount: 300 },
          { name: "Product5", quantity: 9, amount: 300 },
          { name: "Product6", quantity: 2, amount: 300 },
          { name: "Product7", quantity: 1, amount: 300 },
          { name: "Product8", quantity: 2, amount: 300 },
        ],
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
      state.transactions = state.transactions.push(action.payload);
    },
    updateTransaction: (state, action) => {
      state.transactions = state.transactions.map((transaction) => {
        return {
          ...transaction,
          ...action.payload,
        };
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
  },
});

export const {
  updateTransaction,
  deleteTransaction,
  getTransactionById,
  getAllTransactions,
} = transactions.actions;

export default transactions.reducer;
