import React, { useContext } from "react";
import Navbar from "./Navbar";
import HistoryContext from "../context/HistoryContext";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import React, { useContext } from "react";
import { useSelector } from 'react-redux';
import React, { useContext } from "react";

/* export default function History() {

    const history = useSelector((state) => state.history.history)
    return (
        <div className="history">
            <h1>Searched History</h1>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        <a> {item.word} </a>
                    </li>
                ))}
            </ul>

        </div>
    );
} */

const HistoryPage = () => {
    const { history, _ } = useContext(HistoryContext);
  
    return (
      <>
        <Navbar />
        <div className="flex flex-col">
          {history &&
            history.map((search, idx) => (
              <Link
                to={`/${search}`}
                key={idx}
                className="underline mx-4 my-2 text-blue-700 w-min"
              >
                {search}
              </Link>
            ))}
        </div>
      </>
    );
  };
  
  export default HistoryPage;
  
