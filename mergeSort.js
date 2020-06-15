const split = (arr) => {
    const middle = Math.floor(arr.length / 2);
    return [arr.slice(0, middle), arr.slice(middle)];
}

const mergeSortedList = (listLeft, listRight) => {
    if (!listLeft.length) {
        return listRight;
    } else if (!listRight.length) {
        return listLeft;
    }

    let indexLeft = indexRight = 0;
    let mergedList = [];

    while(indexLeft < listLeft.length && indexRight < listRight.length) {
        mergedList.push(
            listLeft[indexLeft] < listRight[indexRight]
            ? listLeft[indexLeft++]
            : listRight[indexRight++]
        )
    }
    return [
        ...mergedList,
        ...listLeft.slice(indexLeft),
        ...listRight.slice(indexRight),
    ]
}

const mergeSort = (inputList) => {
    if (inputList.length <= 1) {
        return inputList;
    } else {
        const [ left, right ] = split(inputList);
        return mergeSortedList(mergeSort(left), mergeSort(right));
    }
}
