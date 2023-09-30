import {keywords_py} from "./keywords";

export const intelisens = (editor) => {
    editor.languages.registerCompletionItemProvider('python_custom', {
        //@ts-ignore
        provideCompletionItems: (model, position) => {
            const sugg = [
                ...keywords_py.map(k => {
                    return {
                        label: k,
                        kind: editor.languages.CompletionItemKind.Keyword,
                        insertText: k
                    }
                })
            ]

            return {
                suggestions: sugg
            }
        }
    })
}