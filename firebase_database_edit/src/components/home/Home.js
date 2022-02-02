import { collection, onSnapshot } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../../firebase";
import { handleclick } from "../utils";
function Home() {
  const [stored, SetStored] = useState([]);
  useEffect(() => {
    const datas = onSnapshot(collection(db, "database_new"), (itemsdata) => {
      SetStored(
        itemsdata.docs.map((datas) => ({
          ...datas.data(),
          id: datas.id,
        }))
      );
    });
    return datas;
  }, []);

  return (
    <div>
      <button onClick={handleclick}>new</button>
      {stored.map((provide) => {
        return (
          <div key={provide.id}>
            <ul>
              <li>
                {provide.name}:<span>{provide.value}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
