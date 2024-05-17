import React, {useState} from 'react';
import Button from "../../../shared/ui/button/button";

const Left = () => {

    const [state, setState] = useState<string>('')

    return (
        <div className={'file-upload'}>
            <span>Загрузка файла</span>
            <input
                value={state}
                placeholder={'Название приложения'}
                onChange={({target: {value}}) => setState(value)}
            />
            <p>добавить название приложения</p>
            <div className={'file-upload__uploader'}>
                <p>
                    Перетащите файл для загрузки сюда или&nbsp;
                    <span>выберите файл</span>
                </p>
            </div>
            <div className={'file-upload__btns'}>
                <Button
                    text={'Сохранить'}
                    onClick={() => {}}
                    classNames={'button-ui_theme_blue'}
                />
                <Button
                    text={'Отмена'}
                    onClick={() => {}}
                />
            </div>
        </div>
    );
};

export default Left;