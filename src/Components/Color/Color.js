import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const Color = ({ rgb, weight, type }) => {
  const [copied, setCopied] = useState(false);
  const hex = rgbToHex(...rgb);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(hex);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      className={`color-box ${type === "shade" && "shade"}`}
      style={{ backgroundColor: `${hex}` }}
      onClick={handleCopy}
    >
      <p>{weight}%</p>
      <p>{hex}</p>
      {copied && (
        <>
          <p style={{ marginTop: "0.5rem", fontFamily: "monospace" }}>
            -COPIED TO CLIPBOARD-
          </p>
        </>
      )}
    </div>
  );
};

export default Color;
