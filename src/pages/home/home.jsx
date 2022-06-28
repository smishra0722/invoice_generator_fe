import React from "react";
import KPIs from "../../components/kpis";
import TransactionList from "../../components/transctionsList";
const Home = () => {
  return (
    <div className="home">
      <KPIs />
      <div className={"home-transactions"}>
        <div className={"home-transactions_heading"}>
          <h2 className={"text-2xl font-bold"}>Recent Transactions</h2>
          <button className={"action-button secondary mb-1"}>
            Create Transaction
          </button>
        </div>
        <div>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default Home;
