import React from "react";
import TransactionList from "../components/transctionsList";
import { Link } from "react-router-dom";

const AllTransactions = () => {
  return (
    <div className={"home-transactions"}>
      <div className={"home-transactions_heading"}>
        <h2 className={"text-2xl font-bold"}>All Transactions</h2>
        <Link to="/form/0" className={"action-button secondary mb-1"}>
          Create Transaction
        </Link>
      </div>
      <div>
        <TransactionList />
      </div>
    </div>
  );
};

export default AllTransactions;
