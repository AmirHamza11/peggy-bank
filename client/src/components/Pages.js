import Pagination from "@mui/material/Pagination";
import usePagination from "../hooks/usePaginations";
import { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@mui/material";

const Pages = ({ data }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#EA8A8A",
      },
    },
  });
  const bank_account_id = localStorage.getItem("bank_account_id");
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex, // eslint-disable-line
    displayPage,
  ] = usePagination(Math.min(5, data.length), data.length);
  //console.log({ totalPages, startPageIndex, endPageIndex });
  //const items = data.slice(0, 5);

  //console.log(items);
  //return null;
  return (
    <div>
      {
        <div className="history">
          <div className="title">Transactions</div>
          <ul>
            {(() => {
              const displayTransactions = [];
              for (let i = startPageIndex; i <= endPageIndex; i++) {
                // console.log(data[0]);
                // console.log(i);

                const formattedDate = new Date(
                  data[i].created_at.seconds * 1000
                ).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                });

                console.log(data[i].sender_id);
                console.log(bank_account_id);

                displayTransactions.push(
                  <div key={data[i].transaction_id}>
                    <div className="list-tile">
                      <div className="list-content">
                        <div className="row-1">
                          <div>
                            <div className="id">
                              ID:{data[i].transaction_id}{" "}
                            </div>
                            <br />
                            <div className="sender">
                              Sender Account: <br />
                              {data[i].sender_id}
                            </div>
                          </div>
                          <p className="date">({formattedDate})</p>
                        </div>
                        <div>
                          <p className="sender-name">
                            Sender Name:
                            <br />
                            {data[i].sender_name}
                          </p>
                        </div>
                        <div>
                          <div>
                            <div className="status">
                              {bank_account_id === data[i].sender_id
                                ? "Sent"
                                : "Received"}
                            </div>
                            <br />
                            <div className="cost">
                              {bank_account_id === data[i].sender_id
                                ? "- "
                                : "+ "}
                              {data[i].amount} tk
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return displayTransactions;
            })()}
            {/* <Pagination
              color="secondary"
              count={totalPages}
              onChange={(event, value) => displayPage(value)}
              className="pagination"
            /> */}
          </ul>
        </div>
      }
      <ThemeProvider theme={theme}>
        <div className="pagination">
          <Pagination
            color="primary"
            count={totalPages}
            onChange={(event, value) => displayPage(value)}
          />
        </div>
      </ThemeProvider>
    </div>
  );
};

// const Pages = ({ data }) => {
//   const [
//     totalPages,
//     startPageIndex,
//     endPageIndex,
//     currentPageIndex,
//     displayPage,
//   ] = usePagination(5, data.length);
//   const currentPageData = data.slice(startPageIndex, endPageIndex + 1);
//   console.log({
//     totalPages,
//     startPageIndex,
//     endPageIndex,
//     currentPageIndex,
//     displayPage,
//   });
//   return (
//     <div>
//       <ul>
//         {currentPageData.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//       <div>
//         Page {currentPageIndex} of {totalPages}
//       </div>
//       <div>
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNo) => (
//           <button
//             key={pageNo}
//             onClick={() => displayPage(pageNo)}
//             disabled={currentPageIndex === pageNo}
//           >
//             {pageNo}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Pages;
