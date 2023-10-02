export const theme = (editor) => [
    editor.editor.defineTheme('py-theme', {
        colors: [
            '#f54'
        ],
        base: 'vs-dark',
        rules: [
            {
                token: 'keyword',
                foreground: '#F54'
            },
            {
                token: 'comment',
                foreground: '#20B57F'
            },
            {
                token: 'string',
                foreground: '#FF5544'
            },
            {
                token: 'variable',
                foreground: '#000'
            }
        ]
    })
]