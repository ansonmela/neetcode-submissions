class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let maxSoFar = -1;

        for (var j = arr.length - 1; j >= 0; j--) {
            let curr = arr[j];

            arr[j] = maxSoFar;

            maxSoFar = Math.max(maxSoFar, curr)
        }

        return arr;
    }
}
