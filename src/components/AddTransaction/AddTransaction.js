import { useState, useContext } from "react";
import { GlobaContext } from "../../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobaContext);

  const handleClickAdd = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    addTransaction(newTransaction)
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleClickAdd}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text ..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br /> (negative-expense, positive-income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount ..."
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  );
};

export default AddTransaction;
