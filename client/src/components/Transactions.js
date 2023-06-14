import Balance from "./Balance";
import NavBar from "./NavBar";
import TransactionHistory from "./TransactionHistory";

const Transactions = () => {
  return (
    <div className="body">
      <NavBar />
      <Balance />
      <TransactionHistory />
    </div>
  );
};

export default Transactions;
