function merge(arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;

    
    function nextGap(gap) {
        if (gap <= 1) return 0;
        return Math.floor((gap / 2) + (gap % 2));
    }

    let gap = nextGap(m + n);

    while (gap > 0) {
        let i, j;

        
        for (i = 0; i + gap < m; i++) {
            if (arr1[i] > arr1[i + gap]) {
                [arr1[i], arr1[i + gap]] = [arr1[i + gap], arr1[i]];
            }
        }

        
        for (j = gap > m ? gap - m : 0; i < m && j < n; i++, j++) {
            if (arr1[i] > arr2[j]) {
                [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
            }
        }

        
        if (j < n) {
            for (j = 0; j + gap < n; j++) {
                if (arr2[j] > arr2[j + gap]) {
                    [arr2[j], arr2[j + gap]] = [arr2[j + gap], arr2[j]];
                }
            }
        }

        gap = nextGap(gap);
    }
}


let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];

merge(arr1, arr2);

console.log("arr1:", arr1); 
console.log("arr2:", arr2); 
