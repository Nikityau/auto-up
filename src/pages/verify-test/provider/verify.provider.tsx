import React from 'react';
import {observer} from "mobx-react-lite";

import {SolutionStatus, useVerify} from "../helpers/hooks/use-verify";
import {TaskRes} from "../../task/provider/task.provider";
import {FType} from "../../../shared/helpers/types/f-types";

type Props = {
} & React.PropsWithChildren

interface IVerifyContext {
    task: TaskRes,
    solution: null | any,
    onSetStatus: FType<SolutionStatus, any>
}

export const VerifyContext = React.createContext<IVerifyContext>(null)

const VerifyProvider = observer(({children}: Props) => {

    const {task, solution, onSetStatus} = useVerify()

    return (
        <VerifyContext.Provider value={{
            task,
            solution,
            onSetStatus
        }}>
            {children}
        </VerifyContext.Provider>
    );
});

export default VerifyProvider;