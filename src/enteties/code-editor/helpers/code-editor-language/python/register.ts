import {tokens} from "./tokens";
import {intelisens} from "./intelisens";
import {theme} from "./theme";

export const register = (editor) => {
    editor.languages.register({
        id: 'python_custom'
    })

    tokens(editor)
    intelisens(editor)
    theme(editor)
}