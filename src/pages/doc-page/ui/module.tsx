import React from 'react';
import cn from "classnames";
import {nanoid} from "nanoid";

import {DocModule} from '../helpers/hooks/interface';

import InfoBlock from '../../../enteties/info-block';
import TaskBlock from '../../../enteties/task-block';
import AddonMaterial from '../../../enteties/addon-material';

type Props = {
    courseId: string
    module: DocModule,
    number: number
}

const DocModule = ({module, number, courseId}: Props) => {
    console.log('md', module)
    return (
        <div className={cn(
            'doc-page__module'
        )}>
            <div className='doc-page__module-title'>
                <span>Модуль {number}. </span>
                <span>{module.title}</span>
            </div>
            <div className='doc-page__module-lessons'>
                {
                    module && module.lessons &&
                    module?.lessons?.map((l, i) => (
                        <InfoBlock
                            key={l.id}
                            classNames={[
                                'doc-page__l-title'
                            ]}
                            title={
                                <div className='doc-page__lesson-title'>
                                    <span>Урок {i + 1} </span>
                                    <span>{l.title}</span>
                                </div>
                            }
                        >
                            <div className='doc-page__lesson-container'>
                                <div className='doc-page__task-block'>
                                    <div className='dock-page__task-block-title'>
                                        <span>Задания</span>
                                    </div>
                                    {
                                        l && l?.tasks &&
                                        <TaskBlock
                                            path={'/skillget/lecturer/course/:courseId/lesson/:lessonId/task/:taskId'}
                                            key={nanoid()}
                                            groupId={null}
                                            taskBlock={l?.tasks}
                                            courseId={courseId}
                                            lessonId={l.id}
                                        />
                                    }
                                </div>
                                <AddonMaterial addon={l?.addonMaterial}/>
                            </div>
                        </InfoBlock>
                    ))
                }
            </div>
        </div>
    );
};

export default DocModule;