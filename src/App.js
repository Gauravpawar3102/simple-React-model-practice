import Modaal from "./Modaal.js";
import "./styles.css";
import "./index.css";
import { useState } from "react";
export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(!showModal);
  };
  console.log(showModal);
  return (
    <div className="App">
      <h1>HAAAAAAAAAAAA!!!!!!!!!!!!!</h1>
      <button onClick={handleClose}>Show Modal</button>
      {showModal && (
        <Modaal handleClose={handleClose}>
          <h1>!00% ON</h1>
          <p>
            Andariki namaskaram ee dasara pandugaki maro panduga 100% ON/OFF
            sale !!!!!!!!!!!!!!!
          </p>
          <a href=".co">click to grab the coupun</a>
        </Modaal>
      )}
    </div>
  );
}
