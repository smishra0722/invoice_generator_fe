import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import { FormattedNumber } from "react-intl";

const ShowDetails = () => {
  const params = useParams();
  console.log("PARAMS", params);
  const data = useSelector(
    (state) => state.transactionsReducer.singleTransaction
  );
  const totalAmount = data[0]?.products.reduce(
    (acc, product) => acc + Number(product.amount) * Number(product.quantity),
    0
  );
  console.log("DATA", data);
  return (
    <div class="invoice-box">
      <table cellpadding="0" cellspacing="0">
        <tr class="top">
          <td colspan="2">
            <table>
              <tr>
                <td class="title">
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

        <tr class="information">
          <td colspan="2">
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

        <tr class="heading">
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

        <tr class="total">
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
};

export default ShowDetails;
