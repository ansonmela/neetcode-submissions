class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let currentCount = 0;

        for (var i = 0; i <= nums.length - 1; i++) {
            if (nums[i] === 1) {
                currentCount++;
                maxCount = Math.max(currentCount, maxCount)
            } else {
                currentCount = 0;
            }
        }

        return maxCount
    }
}
