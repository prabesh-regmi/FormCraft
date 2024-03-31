import ReactJson from "react-json-view";

function CodeBlock({ code }) {
  return (
    <ReactJson
      src={code}
      theme="monokai"
      collapsed={false}
      displayDataTypes={false}
    />
  );
}
export default CodeBlock;
