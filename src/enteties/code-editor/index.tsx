import React, {useContext, useRef} from "react";
import Editor, {Monaco} from "@monaco-editor/react";
import {register} from "./helpers/code-editor-language/python/register";
import {FType} from "../../shared/helpers/types/f-types";

import "./style/index.scss";
import cn from "classnames";
import {ThemeContext} from "../../app/provider/with-theme";

type Props = {
    code?: string
    readOnly?: boolean
    onChange: FType<string, void>
    classNames?: string[] | string
}

const CodeEditor = ({code, onChange, classNames, readOnly = false}:Props) => {

    const monacoRef = useRef<Monaco>(null);
    const {theme} = useContext(ThemeContext)

    return (

        <Editor
            className={cn("code-editor", classNames)}
            language={'python_custom'}
            theme={theme == 'light' ? 'vs' : 'vs-dark'}
            value={code}
            options={{
                readOnly: readOnly
            }}
            onMount={(editor, monaco) => {
                monacoRef.current = monaco;

                register(monacoRef.current)
            }}
            onChange={(value, ev) => {
                onChange?.(value)
            }}
            onValidate={(markers) => {

            }}
        />
    );
};

export default CodeEditor;