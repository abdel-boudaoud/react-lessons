// let names = ["abdel", "cesar"];

import NavBar from "./NavBar";
import Home from "./Home";
let App = () => {
  return (
    <>
      <NavBar />
      <div className="content">
        <Home />
      </div>
  
    </>
  );
};

export default App;
