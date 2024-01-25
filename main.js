function addNumbers(...nums) {
    return nums.reduce((sum, num) => {
        return sum += num;
    }, 0);
}