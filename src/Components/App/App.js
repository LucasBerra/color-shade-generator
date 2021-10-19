import "./App.css";
import { useState } from "react";
import Color from "../Color/Color";
import Values from "values.js";

const App = () => {
  const [color, setColor] = useState("#2fcc56");
  const [isError, setIsError] = useState(false);
  const [colorList, setColorList] = useState(new Values("#2fcc56").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setColorList(colors);
    } catch (error) {
      setIsError(true);
      console.log(error);
      return;
    }
    setIsError(false);
  };

  return (
    <>
      <header className="flex-align">
        <h1>Color Generator</h1>
        <form className="flex-align" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={isError ? "error" : null}
          />
          <button type="submit">Submit</button>
        </form>
      </header>
      <section className="color-container">
        {colorList &&
          colorList.map((colorItem, index) => {
            return <Color key={index} {...colorItem} index={index} />;
          })}
      </section>
    </>
  );
};

export default App;
