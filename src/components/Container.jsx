import React from 'react';

const MyContainer = ({ children }) => { /* children — специальное свойство, которое содержит элементы, переданные в компонент между открывающим и закрывающим тегами */
    return <div className="my-container">{children}</div>;
};

export default MyContainer;