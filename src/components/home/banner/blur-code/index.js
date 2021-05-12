import React from "react";

const BlurCode = () => {
  const blurStyle = {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "15px",
    textTransform: "uppercase",
    background:
      "linear-gradient(83.75deg, #DBA360 13.35%, rgba(219, 163, 96, 0) 71.89%)",
  };

  return (
    <div style={blurStyle}>
      # Python program to check if the input number is odd or even.<br></br>
      <br></br># A number is even if division by 2 gives a remainder of 0.
      <br></br>
      <br></br># If the remainder is 1, it is an odd number.<br></br>
      <br></br>
      num = int(input("Enter a number: "))<br></br>
      <br></br>
      if (num % 2) == 0:<br></br>
      <br></br>
      print("{0} is Even".format(num))<br></br>
      <br></br>
      else:<br></br>
      <br></br>
      print("{0} is Odd".format(num))<br></br>
      <br></br>
    </div>
  );
};

export default BlurCode;
