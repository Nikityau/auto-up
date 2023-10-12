import React from 'react';
import {TaskDescProps} from "../index";
import Markdown from "react-markdown";

type Props = {
    
} & Pick<TaskDescProps, 'description'>

const Description = (
    {
        description
    }:Props) => {
    return (
        <div className={'task-description__description'}>
            {/*{
                description.map((d,i) => (
                    <span key={i}>{d}</span>
                ))
            }*/}
            <Markdown
                className={"task-description__md"}
            >
                {description}
            </Markdown>
        </div>
    );
};

export default Description;