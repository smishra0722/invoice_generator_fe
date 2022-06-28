import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiFillDelete } from "react-icons/ai";

const TransactionsList = () => {
  const dummyData = [
    {
      id: "#12345",
      title: "Neelansh Equipments and MAchines",
      products: "Abc, xyz, etc",
      address: "Abc, xyz, etc",
    },
    {
      id: "#12345",
      title: "Neelansh Equipments and MAchines",
      products: "Abc, xyz, etc",
      address: "Abc, xyz, etc",
    },
    {
      id: "#12345",
      title: "Neelansh Equipments and MAchines",
      products: "Abc, xyz, etc",
      address: "Abc, xyz, etc",
    },
    {
      id: "#12345",
      title: "Neelansh Equipments and MAchines",
      products: "Abc, xyz, etc",
      address: "Abc, xyz, etc",
    },
  ];
  return (
    <div className={"transaction-list"}>
      {dummyData.map((data) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <div>
                <span className={"mr-3"}>{data.id}</span>
                <span className={"font-bold"}>{data.title}</span>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className={"transaction-accordion-details"}>
                <div>
                  <span className={"font-bold"}>Products: </span>
                  <span>{data.products}</span>
                </div>
                <div>
                  <span className={"font-bold"}>Address: </span>
                  <span>{data.address}</span>
                </div>
              </div>
              <div className={"transaction-accordion-action"}>
                <div>
                  <button className={"action-button  delete"}>
                    <AiFillDelete />
                  </button>
                </div>
                <div>
                  <button className={"action-button regular mr-1"}>
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
