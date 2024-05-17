import React, {FC} from 'react';

type Props = {
    text: string,
    text2: string
}

const CubeData: FC<Props> = (
    {
        text2,
        text

    }) => {
    return (
        <div className={'cube-data'}>
            <span>{text}</span>
            <span>{text2}</span>
        </div>
    );
};

export default CubeData;