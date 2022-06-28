import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { FormattedNumber } from "react-intl";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransaction,
  clearSingleTransaction,
  getTransactionById,
  updateTransaction,
} from "../../redux/testRecducer";

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("IDD", id);
  const [productData, setProductData] = React.useState({
    id: "",
    name: "",
    quantity: "",
    amount: "",
  });
  const [formData, setFormData] = React.useState({
    id: Math.floor(100000 + Math.random() * 900000),
    createdAt: moment().format("YYYY-MM-DD").toString(),
    seller: {
      sellerName: "",
      sellerAddress1: "",
      sellerAddress2: "",
      sellerEmail: "",
    },
    buyer: {
      buyerName: "",
      buyerAddress1: "",
      buyerAddress2: "",
      buyerEmail: "",
    },
    products: [],
    delivery: {
      note: "",
    },
  });
  const transactionData = useSelector(
    (state) => state.transactionsReducer.singleTransaction
  );

  const handleChange = (e) => {
    if (e.target.name.includes("seller")) {
      return setFormData((prev) => ({
        ...prev,
        seller: { ...prev.seller, [e.target.name]: e.target.value },
      }));
    }
    if (e.target.name.includes("buyer")) {
      return setFormData((prev) => ({
        ...prev,
        buyer: { ...prev.buyer, [e.target.name]: e.target.value },
      }));
    }

    return setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleProductsInput = (e) => {
    return setProductData((prev) => ({
      ...prev,
      id: formData.products.length + 1,
      [e.target.name]: e.target.value,
    }));
  };

  const handleProductAdd = () => {
    setFormData((prev) => ({
      ...prev,
      products: [...prev.products, productData],
    }));
    setProductData({
      id: "",
      name: "",
      quantity: "",
      amount: "",
    });
  };

  const handleProductDelete = (id) => {
    const newProductData = formData.products.filter(
      (product) => product.id != id
    );
    console.log("PRODUCTDELETE", id, newProductData, formData);
    setFormData((prev) => ({ ...prev, products: newProductData }));
  };

  const handleSubmit = () => {
    if (id && id != 0) {
      dispatch(clearSingleTransaction());
      dispatch(updateTransaction(formData));
    } else {
      dispatch(clearSingleTransaction());
      dispatch(addTransaction(formData));
    }
    navigate("/");
  };

  const handleClear = () => {
    setFormData({
      id: Math.floor(100000 + Math.random() * 900000),
      createdAt: moment().format("YYYY-MM-DD").toString(),
      seller: {
        sellerName: "",
        sellerAddress1: "",
        sellerAddress2: "",
        sellerEmail: "",
      },
      buyer: {
        buyerName: "",
        buyerAddress1: "",
        buyerAddress2: "",
        buyerEmail: "",
      },
      products: [],
      delivery: {
        note: "",
      },
    });
  };

  React.useEffect(() => {
    if (id && id == 0) {
      dispatch(clearSingleTransaction());
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (transactionData.length > 0) {
      setFormData(transactionData[0]);
    }
  }, [transactionData]);

  console.log("FORMDATA", formData);

  return (
    <div className={"home-transactions"}>
      <div className={"home-transactions_heading"}>
        <h2 className={"text-2xl font-bold"}>
          {id && id != 0 ? "Update Transaction" : "Create Transaction"}
        </h2>
        <div>
          Invoice Id:{" "}
          {id && id != 0
            ? formData.id
            : Math.floor(100000 + Math.random() * 900000)}
        </div>
      </div>
      <div className={"mt-4"}>
        <div className={"flex flex-col border-b pb-3"}>
          <div className={"mb-3 flex justify-between items-center"}>
            <span>Basic Details</span>
            <button className={"action-button secondary"} onClick={handleClear}>
              Clear
            </button>
          </div>
          <DesktopDatePicker
            label="Created At"
            inputFormat="yyyy-MM-dd"
            value={formData.createdAt}
            onChange={(value) =>
              handleChange({
                target: {
                  name: "createdAt",
                  value: moment(value).format("YYYY-MM-DD").toString(),
                },
              })
            }
            renderInput={(params) => (
              <TextField variant={"filled"} {...params} />
            )}
          />
          <TextField
            label="Seller Name"
            variant="filled"
            size={"medium"}
            name={"sellerName"}
            value={formData.seller.sellerName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Seller Address 1"
            variant="filled"
            size={"medium"}
            name={"sellerAddress1"}
            value={formData.seller.sellerAddress1}
            onChange={handleChange}
            required
          />
          <TextField
            label="Seller Address 2"
            variant="filled"
            size={"medium"}
            name={"sellerAddress2"}
            value={formData.seller.sellerAddress2}
            onChange={handleChange}
            required
          />
          <TextField
            label="Seller Email"
            variant="filled"
            size={"medium"}
            type={"email"}
            name={"sellerEmail"}
            value={formData.seller.sellerEmail}
            onChange={handleChange}
            required
          />
          <TextField
            label="Buyer Name"
            variant="filled"
            size={"medium"}
            name={"buyerName"}
            value={formData.buyer.buyerName}
            onChange={handleChange}
            required
          />
          <TextField
            label="Buyer Address 1"
            variant="filled"
            size={"medium"}
            name={"buyerAddress1"}
            value={formData.buyer.buyerAddress1}
            onChange={handleChange}
            required
          />
          <TextField
            label="Buyer Address 2"
            variant="filled"
            size={"medium"}
            name={"buyerAddress2"}
            value={formData.buyer.buyerAddress2}
            onChange={handleChange}
            required
          />
          <TextField
            label="Buyer Email"
            variant="filled"
            size={"medium"}
            type={"email"}
            name={"buyerEmail"}
            value={formData.buyer.buyerEmail}
            onChange={handleChange}
            required
          />
        </div>
        <div className={"pt-3 border-b"}>
          <div
            className={"mb-3 flex justify-between items-center border-b pb-2"}
          >
            <div>Product Details</div>
            <button
              className={"action-button secondary"}
              onClick={handleProductAdd}
            >
              Add Product
            </button>
          </div>
          <div>
            <div className={"flex gap-10 mb-4"}>
              <TextField
                label="Product Name"
                variant="filled"
                size={"medium"}
                name={"name"}
                value={productData.name}
                onChange={handleProductsInput}
                required
              />
              <TextField
                label="Product Quantity"
                variant="filled"
                size={"medium"}
                name={"quantity"}
                value={productData.quantity}
                onChange={handleProductsInput}
                required
              />
              <TextField
                label="Product Amount"
                variant="filled"
                size={"medium"}
                name={"amount"}
                value={productData.amount}
                onChange={handleProductsInput}
                required
              />
            </div>
            <div>
              {formData.products.map((product) => {
                return (
                  <div className={"flex justify-between items-center mb-2"}>
                    <span>
                      {product.name} (
                      {
                        <FormattedNumber
                          value={product.amount}
                          style={"currency"}
                          currency={"INR"}
                        />
                      }{" "}
                      x{product.quantity})
                    </span>
                    <button
                      className={"action-button delete"}
                      onClick={() => handleProductDelete(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={"mt-7"}>
        <button className={"action-button primary"} onClick={handleSubmit}>
          {id && id != 0 ? "Update Transaction" : "Create Transaction"}
        </button>
      </div>
    </div>
  );
};

export default Form;
