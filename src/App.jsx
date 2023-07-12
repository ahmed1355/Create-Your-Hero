import React, { useState } from "react";
import styles from "./app.module.css";
function App() {
  // let name = "john";

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [display, setDisplay] = useState(false);

  // const changename = () => {
  //   setName("ahmed");
  // };

  return (
    <>
      <h1 className={styles.heading}>Build a Hero</h1>
      <div className={styles.container}>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <label htmlFor="">height:</label>
        <input
          type="number"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <label htmlFor="">Super Power:</label>
        <input
          type="text"
          onChange={(e) => {
            setSuperpower(e.target.value);
          }}
        />
     
      </div>
      <div className={styles.box_2}>
      <button onClick={setDisplay}>display</button>
        <div>
          {display && (
            <ul>
              <li>{name}</li>
              <li>{age}</li>
              <li>{height}</li>
              <li>{superpower}</li>
            </ul>
          )}
        </div>
      </div>
    
    </>
  );
}

export default App;
