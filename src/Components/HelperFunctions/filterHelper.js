export const filterByKeyWord = ( dataElements, keyword,propertyName ) => {
    return dataElements.filter(data => data[propertyName] === keyword)
}