import { CopyBlock, dracula } from "react-code-blocks";

function CodeBlock({ code, language = "json", showLineNumbers = true }) {
    <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={dracula}
        codeBlock
    />;
}
export default CodeBlock;
