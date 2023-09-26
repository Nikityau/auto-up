import React, { useRef } from "react";
import Editor, { Monaco } from "@monaco-editor/react";

import "./style/index.scss";


const keywords_py = [
  'and',
  'as',
  'assert',
  'break',
  'class',
  'continue',
  'def',
  'del',
  'elif',
  'else',
  'except',
  'exec',
  'finally',
  'for',
  'from',
  'global',
  'if',
  'import',
  'in',
  'is',
  'lambda',
  'None',
  'not',
  'or',
  'pass',
  'print',
  'raise',
  'return',
  'self',
  'try',
  'while',
  'with',
  'yield',

  'int',
  'float',
  'long',
  'complex',
  'hex',

  'abs',
  'all',
  'any',
  'apply',
  'basestring',
  'bin',
  'bool',
  'buffer',
  'bytearray',
  'callable',
  'chr',
  'classmethod',
  'cmp',
  'coerce',
  'compile',
  'complex',
  'delattr',
  'dict',
  'dir',
  'divmod',
  'enumerate',
  'eval',
  'execfile',
  'file',
  'filter',
  'format',
  'frozenset',
  'getattr',
  'globals',
  'hasattr',
  'hash',
  'help',
  'id',
  'input',
  'intern',
  'isinstance',
  'issubclass',
  'iter',
  'len',
  'locals',
  'list',
  'map',
  'max',
  'memoryview',
  'min',
  'next',
  'object',
  'oct',
  'open',
  'ord',
  'pow',
  'print',
  'property',
  'reversed',
  'range',
  'raw_input',
  'reduce',
  'reload',
  'repr',
  'reversed',
  'round',
  'set',
  'setattr',
  'slice',
  'sorted',
  'staticmethod',
  'str',
  'sum',
  'super',
  'tuple',
  'type',
  'unichr',
  'unicode',
  'vars',
  'xrange',
  'zip',

  'True',
  'False',

  '__dict__',
  '__methods__',
  '__members__',
  '__class__',
  '__bases__',
  '__name__',
  '__mro__',
  '__subclasses__',
  '__init__',
  '__import__'
]

const CodeEditor = () => {

  const monacoRef = useRef<Monaco>(null);

  return (
    <div className={"code-editor"}>
      <div className={"code-editor__container app-container"}>
        <Editor
          className={"code-editor__editor"}
          language={'python_custom'}
          onMount={(editor, monaco) => {
            monacoRef.current = monaco;

            monacoRef.current.languages.register({
              id: 'python_custom'
            })
            monacoRef.current.languages.setMonarchTokensProvider('python_custom', {
              keywords: keywords_py,
              tokenizer: {
                root: [
                  [/[a-zA-Z]\w*/, {
                    cases: {
                      '@keywords': 'keyword',
                      '@default': 'variable'
                    }
                  }],
                  { include: '@whitespace' },
                  { include: '@numbers' },
                  { include: '@strings' },

                  [/[,:;]/, 'delimiter'],
                  [/[{}\[\]()]/, '@brackets'],

                  [/@[a-zA-Z]\w*/, 'tag'],
                ],
                whitespace: [
                  [/\s+/, 'white'],
                  [/(^#.*$)/, 'comment'],
                  [/('''.*''')|(""".*""")/, 'string'],
                  [/'''.*$/, 'string', '@endDocString'],
                  [/""".*$/, 'string', '@endDblDocString']
                ],
                endDocString: [
                  [/\\'/, 'string'],
                  [/.*'''/, 'string', '@popall'],
                  [/.*$/, 'string']
                ],
                endDblDocString: [
                  [/\\"/, 'string'],
                  [/.*"""/, 'string', '@popall'],
                  [/.*$/, 'string']
                ],

                // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
                numbers: [
                  [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
                  [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
                ],

                // Recognize strings, including those broken across lines with \ (but not without)
                strings: [
                  [/'$/, 'string.escape', '@popall'],
                  [/'/, 'string.escape', '@stringBody'],
                  [/"$/, 'string.escape', '@popall'],
                  [/"/, 'string.escape', '@dblStringBody']
                ],
                stringBody: [
                  [/[^\\']+$/, 'string', '@popall'],
                  [/[^\\']+/, 'string'],
                  [/\\./, 'string'],
                  [/'/, 'string.escape', '@popall'],
                  [/\\$/, 'string']
                ],
                dblStringBody: [
                  [/[^\\"]+$/, 'string', '@popall'],
                  [/[^\\"]+/, 'string'],
                  [/\\./, 'string'],
                  [/"/, 'string.escape', '@popall'],
                  [/\\$/, 'string']
                ]
              }
            })
            monacoRef.current.languages.registerCompletionItemProvider('python_custom', {
              //@ts-ignore
              provideCompletionItems: (model , position) => {
                const sugg = [
                  ...keywords_py.map(k => {
                    return {
                      label: k,
                      kind: monacoRef.current.languages.CompletionItemKind.Keyword,
                      insertText: k
                    }
                  })
                ]

                return {
                  suggestions: sugg
                }
              }
            })
            /*
            * Nope
            * codeAction
            * codeLens
            * */

            /*monacoRef.current.languages.registerDeclarationProvider('python_custom', {
              provideDeclaration(model, position, token) {
                console.log(model, position, token);
                return null
              }
            })*/
          }}
          onChange={(value, ev) => {
            console.log(value, ev);

            //const a = monacoRef.current.editor.
            console.log(monacoRef.current);
          }}
          onValidate={(markers) => {
            console.log('validation');
            console.log(markers);
              markers.map(m => {
                console.log(m.message);
              })
          }}
        />
      </div>
    </div>
  );
};

export default CodeEditor;