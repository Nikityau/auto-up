import React from 'react';

type Props = {

} & React.PropsWithChildren

const MonthProvider = ({children}:Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default MonthProvider;