import { useState } from "react";

export default function SeeMore({
    defaultLength,
    color,
    padding,
    border,
    background,
    borderColor,
}) {
  const [collaps, setCollaps] = useState(true);
  
  const openCollaps = {
    width: `${defaultLength}px`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const seeMore = {
    margin : 0,
    padding : 0,
    display: "flex",
    cursor: "pointer",
    color: color,
  }

  const container ={
    border: `${border}px solid ${borderColor}`,
    background: background,
    padding: padding,
    borderRadius: "10px"
  }

  return (
    <p style={container}>
      <p style={collaps ? openCollaps : {}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        <p onClick={() => setCollaps(!collaps)} style={seeMore}>See More...</p>  
      </p>  
    </p>
  );
}
