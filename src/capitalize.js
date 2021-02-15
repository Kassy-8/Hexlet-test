const capitalize = (text) => {
    const [firstElement = '', ...restElements] = text;
    return  `${firstElement.toUpperCase()}${restElements.join('')}`;
};

export default capitalize;