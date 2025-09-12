function Indexs(arr, target){
    let n = arr.length;
    for (let i = 0; i < n; ++i){
        if(arr[i] == target){
            return i;
        }
    }
    return -1
}

let arrz = [10, 20, 30, 40, 50];
console.log(Indexs(arrz, 30),);