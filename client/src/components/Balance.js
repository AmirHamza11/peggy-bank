const Balance = () => {
  const balance = localStorage.getItem("bank_balance");
  return (
    <div className="balance-card">
      <div className="title">
        BALANCE <br />
        <div className="balance">{balance}</div>
      </div>
    </div>
  );
};

export default Balance;
