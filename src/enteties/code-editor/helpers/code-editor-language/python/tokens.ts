import {keywords_py} from './keywords'

export const tokens = (editor) => {
    editor.languages.setMonarchTokensProvider('python_custom', {
        keywords: keywords_py,
        tokenizer: {
            root: [
                [/[a-zA-Z]\w*/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'variable'
                    }
                }],
                {include: '@whitespace'},
                {include: '@numbers'},
                {include: '@strings'},

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
}