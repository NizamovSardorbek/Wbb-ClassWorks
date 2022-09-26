import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
const getSize = (props) => {
  switch (props.size) {
    case "large":
      return "200px";
    case "medium":
      return "150px";
    case "small":
      return "100px";
    default:
      return "150px";
  }
};
export const Box1 = styled.div`
  text-align: center;
  border: 1px solid red;
  width: 20%;
  height: ${getSize};
  color: ${(props) =>
    props.color === "green"
      ? "green"
      : props.color === "red"
      ? "red"
      : props.color === "yellow"
      ? "yellow"
      : "blue"};
  font-size: 50px;
`;
