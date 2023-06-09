import db from "../db.js"

const getDashboardData = async (req, res) => {
  res.json({ message: "Dashboard" });
};

export { getDashboardData };
