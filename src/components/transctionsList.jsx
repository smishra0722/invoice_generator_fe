import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTransaction,
  getAllTransactions,
  getTransactionById,
} from "../redux/testRecducer";
import { useNavigate } from "react-router-dom";

const TransactionsList = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const transactionData = useSelector(
    (state) => state.transactionsReducer.transactions
  );

  const handleDelete = (id) => {
    dispatch(deleteTransaction(id));
    // dispatch(getAllTransactions);
  };
  const handleShowDetails = (id) => {
    dispatch(getTransactionById(id));
    history("/details/" + id, { replace: true });
  };

  const getProductNames = (products) => {
    return products.reduce((acc, data, index, array) => {
      if (index === 0) {
        return (acc = acc + ",");
      }
      if (index <= 3) {
        return (acc = acc + "," + data.name);
      }
      if (index === array.length - 1) {
        return (acc = acc + ", etc.");
      }
      return (acc = acc + ",....");
    }, "");
  };
  return (
    <div className={"transaction-list"}>
      {transactionData.map((data) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div>
                <span className={"mr-3"}>{data.id}</span>
                <span className={"font-bold mr-2"}>{data.buyer.buyerName}</span>
                <span>({data.createdAt})</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={"transaction-accordion-details"}>
                <div>
                  <span className={"font-bold"}>Products: </span>
                  <span>{getProductNames(data.products)}</span>
                </div>
                <div>
                  <span className={"font-bold"}>Address: </span>
                  <span>
                    {data.buyer.buyerAddress1 + "," + data.buyer.buyerAddress2}
                  </span>
                </div>
              </div>
              <div className={"transaction-accordion-action"}>
                <div>
                  <button
                    className={"action-button  delete"}
                    onClick={() => handleDelete(data.id)}
                  >
                    <AiFillDelete />
                  </button>
                </div>
                <div>
                  <button
                    className={"action-button regular mr-1"}
                    onClick={() => handleShowDetails(data.id)}
                  >
                    Show Details
                  </button>
                  <button className={"action-button regular mr-1"}>
                    Edit Transaction
                  </button>
                  <button className={"action-button primary"}>
                    Generate Invoice
                  </button>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default TransactionsList;
