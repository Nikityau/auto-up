import React from 'react';
import {observer} from "mobx-react-lite";
import {ErrorStore} from "../../local-store/error-store";
import ErrorBar from "./ui/error-bar";


import './style/index.scss'

type Props = {
    error: ErrorStore
}

const ErrorHandler = observer(({error}:Props) => {

    return (
        <>
            {
                error.errors.map((e, i) => (
                    <ErrorBar
                        key={e.id}
                        number={i}
                        title={e.title}
                        description={e.description}
                        id={e.id}
                        onClose={() => error.removeError(e)}
                    />
                ))
            }
        </>
    );
});

export default ErrorHandler;