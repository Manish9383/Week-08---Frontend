let numbers = [];
for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100;
    numbers.push(randomNum);
}

console.log("Generated Numbers:", numbers);

function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }

        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    console.log("2nd Largest Number:", secondLargest);
    console.log("2nd Smallest Number:", secondSmallest);
}

findSecondLargestAndSmallest(numbers);
