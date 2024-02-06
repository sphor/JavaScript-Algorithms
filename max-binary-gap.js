// A binary gap is defined as the maximum sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of the number.
// This function takes a value "N", and determins the binary gap. 

function binaryGap(N) {
    let binaryString = N.toString(2); // Converts N to a binary string
    let maxGap = 0;
    let currentGap = 0;
    let counting = false;

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            if (!counting) {
                counting = true;
            } else {
                maxGap = Math.max(maxGap, currentGap);
            }
            currentGap = 0;
        } else {
            if (counting) {
                currentGap++;
            }
        }
    }

    return maxGap;
}

// Test case #1: 234949
// Returned value: 3

// Test case #2: 5945
// Returned value: 2

// Test case #3: 12
// Returned value: 0
