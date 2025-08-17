function findDuplicate(arr) {
    
    let slow = arr[0];
    let fast = arr[0];

    do {
        slow = arr[slow];       
        fast = arr[arr[fast]];  
    } while (slow !== fast);

  
    slow = arr[0];
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }

    return slow;
}


const arr = [3, 1, 3, 4, 2];
console.log("Duplicate number:", findDuplicate(arr));
