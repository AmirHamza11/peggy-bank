import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("bank_account_id");
    localStorage.removeItem("bank_balance");
    history.push("/");
  };

  return (
    <div className="nav-bar">
      <p className="website-name">PEGGY BANK</p>
      <div className="button" onClick={handleClick}>
        <a href="#" className="logout">
          Log Out
        </a>
      </div>
    </div>
  );
};

export default NavBar;
