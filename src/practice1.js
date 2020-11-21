
const parseData = (input) => {
    const {data, column} = input;

    const parseDate =[];

    for (let itemData of data.values()){
        let myObject = {};
        for (let [index,item] of column.entries()){
            myObject[item.name] = itemData[index]
        }
        parseDate.push(myObject)
    }

    return parseDate

}
export { parseData };
