import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { FormattedNumber } from "react-intl";
import { useReactToPrint } from "react-to-print";

const GenerateInvoice = () => {
  const params = useParams();
  const componentRef = React.useRef();

  const data = useSelector(
    (state) => state.transactionsReducer.singleTransaction
  );
  const totalAmount = data[0]?.products.reduce(
    (acc, product) => acc + Number(product.amount) * Number(product.quantity),
    0
  );

  const InvoiceHTML = (
    <div className="invoice-box" ref={componentRef}>
      <table cellPadding="0" cellSpacing="0">
        <tr className="top">
          <td colSpan="2">
            <table>
              <tr>
                <td className="title">
                  <img
                    src="https://www.sparksuite.com/images/logo.png"
                    style={{ width: "100%", maxWidth: "300px" }}
                  />
                </td>

                <td>
                  Invoice #: {data[0].id}
                  <br />
                  Created:{" "}
                  {moment(data[0].createdAt).format("YYYY-MM-DD").toString()}
                  <br />
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr className="information">
          <td colSpan="2">
            <table>
              <tr>
                <td>
                  {data[0].seller.sellerName}
                  <br />
                  {data[0].seller.sellerAddress1}
                  <br />
                  {data[0].seller.sellerAddress2}
                  <br />
                  {data[0].seller.sellerEmail}
                </td>

                <td>
                  {data[0].buyer.buyerName}
                  <br />
                  {data[0].buyer.buyerAddress1}
                  <br />
                  {data[0].buyer.buyerAddress2}
                  <br />
                  {data[0].buyer.buyerEmail}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        {/*<tr class="heading">*/}
        {/*  <td>Payment Method</td>*/}

        {/*  <td>Check #</td>*/}
        {/*</tr>*/}
        {/*<tr class="details">*/}
        {/*  <td>Check</td>*/}

        {/*  <td>1000</td>*/}
        {/*</tr>*/}

        <tr className="heading">
          <td>Item</td>

          <td>Price xQuantity</td>
        </tr>
        {data[0].products.map((product) => {
          return (
            <tr className="item">
              <td>{product.name}</td>

              <td>
                {
                  <FormattedNumber
                    value={product.amount}
                    style={"currency"}
                    currency={"INR"}
                  />
                }{" "}
                x{product.quantity}
              </td>
            </tr>
          );
        })}

        <tr className="total">
          <td></td>

          <td>
            Total:{" "}
            {
              <FormattedNumber
                value={totalAmount}
                style={"currency"}
                currency={"INR"}
              />
            }
          </td>
        </tr>
      </table>
    </div>
  );

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className={"home-transactions_heading mb-7"}>
        <h2 className={"text-2xl font-bold"}>All Transactions</h2>
        <button
          className={"action-button secondary mb-1"}
          onClick={handlePrint}
        >
          Download
        </button>
      </div>
      {InvoiceHTML}
    </>
  );
};

export default GenerateInvoice;
