import React from "react";
import KPIs from "../../components/kpis";
import TransactionList from "../../components/transctionsList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <KPIs />
      <div className={"home-transactions"}>
        <div className={"home-transactions_heading"}>
          <h2 className={"text-2xl font-bold"}>Recent Transactions</h2>
          <Link to="/form/0" className={"action-button secondary mb-1"}>
            Create Transaction
          </Link>
        </div>
        <div>
          <TransactionList limit={10} />
        </div>
      </div>
    </div>
  );
};

export default Home;
