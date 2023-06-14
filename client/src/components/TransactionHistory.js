import { useState, useEffect } from "react";
import Pages from "./Pages";

const TransactionHistory = () => {
  /*const transactions = [
    {
      key: 1,
      id: "1234567890",
      senderAccount: "1234567890",
      senderName: "Nazmun Nahar Tui",
      status: "Recieved",
      balance: "+1050tk",
    },
    {
      key: 1,
      id: "1234567890",
      senderAccount: "1234567890",
      senderName: "Nazmun Nahar Tui",
      status: "Recieved",
      balance: "+1050tk",
    },
    {
      key: 1,
      id: "1234567890",
      senderAccount: "1234567890",
      senderName: "Nazmun Nahar Tui",
      status: "Sent",
      balance: "+1050tk",
    },
    {
      key: 1,
      id: "1234567890",
      senderAccount: "1234567890",
      senderName: "Nazmun Nahar Tui",
      status: "Sent",
      balance: "+1050tk",
    },
    {
      key: 1,
      id: "1234567890",
      senderAccount: "1234567890",
      senderName: "Nazmun Nahar Tui",
      status: "Sent",
      balance: "+1050tk",
    },
  ];*/

  const [data, setData] = useState([]);
  const bank_account_id = localStorage.getItem("bank_account_id");
  useEffect(() => {
    const paginationFunc = async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/transaction?account_id=${bank_account_id}`
      );
      const data = await res.json();
      // console.log(data.data);
      setData(data.data);
      //console.log(data);
    };
    paginationFunc();
  }, []);

  /*const arrayDataItems = transactions.map((Element) => (
    <div className="list-tile">
      <div className="list-content">
        <div className="row-1">
          <p>
            <div className="id">ID:{Element.id} </div>
            <br />
            <div className="sender">
              Sender Account: <br />
              {Element.senderAccount}
            </div>
          </p>
          <p className="date">(27/7/23 7:15pm)</p>
        </div>

        <p className="sender-name">
          Sender Name:
          <br />
          {Element.senderName}
        </p>
        <p>
          <div className="status">{Element.status} </div>
          <br />
          <div className="cost">{Element.balance}</div>
        </p>
      </div>
    </div>
  ));*/
  // if (!data) return <p>Loading...</p>;
  return (
    //<Pages data={data} />
    <>{data && data.length > 0 ? <Pages data={data} /> : <p>Loading...</p>}</>
    /*<div className="history">
      <p className="title">Transactions</p>
      <ul>{arrayDataItems}</ul>
    </div>*/
  );
};

export default TransactionHistory;
