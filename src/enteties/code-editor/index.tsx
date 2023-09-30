import React, {useRef} from "react";
import Editor, {Monaco} from "@monaco-editor/react";
import {register} from "./helpers/code-editor-language/python/register";
import {FType} from "../../shared/helpers/types/f-types";

import "./style/index.scss";

type Props = {
    code?: string
    onChange: FType<string, void>
}

const CodeEditor = ({code, onChange}:Props) => {

    const monacoRef = useRef<Monaco>(null);

    return (

        <Editor
            className={"code-editor"}
            language={'python_custom'}
            theme={'vs'}
            value={code}
            onMount={(editor, monaco) => {
                monacoRef.current = monaco;

                register(monacoRef.current)
            }}
            onChange={(value, ev) => {
                onChange(value)
            }}
            onValidate={(markers) => {

            }}
        />
    );
};

export default CodeEditor;