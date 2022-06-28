import React from "react";
import TransactionList from "../components/transctionsList";

const AllTransactions = () => {
  return (
    <div className={"home-transactions"}>
      <div className={"home-transactions_heading"}>
        <h2 className={"text-2xl font-bold"}>All Transactions</h2>
        <button className={"action-button secondary mb-1"}>
          Create Transaction
        </button>
      </div>
      <div>
        <TransactionList />
      </div>
    </div>
  );
};

export default AllTransactions;
