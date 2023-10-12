import React, {useContext} from 'react';
import CodeEditor from "../../../enteties/code-editor";
import {VerifyContext} from "../provider/verify.provider";

const Code = () => {

    const {task,solution} = useContext(VerifyContext)

    console.log('s', solution)

    return (
        <>
          <CodeEditor
              classNames={[
                  'verify__code-editor'
              ]}
              readOnly={true}
              code={
              solution
                  ? solution
                  :
                task?.code_examples?.[0]?.code
              }
              onChange={null}
          />
        </>
    );
};

export default Code;