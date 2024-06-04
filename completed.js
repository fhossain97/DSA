//Warmup
//Contains Duplicate
const containsDuplicates = (nums) => {
  return Array.from(new Set(nums)).length !== nums.length;
};
console.log(containsDuplicates([1, 2, 3, 4]));

//Pangram (
const isPangram = (sentence) => {
  const acceptedChars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const unaccepted = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " "];

  const letters = sentence
    .toLowerCase()
    .split("")
    .filter((s) => !unaccepted.includes(s));

  return acceptedChars.every((char) => letters.includes(char));
};
console.log(isPangram("TheQuickBrownFoxJumpsOverTheLazyDog"));

//Sqrt
function mySqrt(num) {
  function formatNum(n) {
    return Math.abs(Math.floor(n));
  }
  if (num < 2) {
    return num;
  }

  for (let i = 1; i < num; i++) {
    if (i * i === num) {
      return i;
    } else if (i * i > num) {
      const mid = ((i - 1 + i) / 2).toFixed(5);

      if (mid * mid === num) {
        return formatNum(mid);
      } else if (mid * mid < num) {
        return formatNum(mid + 1);
      } else if (mid * mid > num) {
        return formatNum(i - 1);
      }
    }
  }
  return 1;
}

console.log(mySqrt(27));

//Number of Good Pairs
function goodPairs(nums) {
  let count = 0;
  for (let f = 0; f < nums.length; f++) {
    for (let h = f + 1; h < nums.length; h++) {
      if (nums[f] === nums[h] && f < h) {
        count++;
      }
    }
  }
  return count;
}
console.log(goodPairs([1, 2, 3, 1, 1, 3]));

//Reverse Vowels
function reverseVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const notVowel = [];
  const isVowel = [];

  for (let f = 0; f < word.length; f++) {
    if (vowels.includes(word[f].toLowerCase())) {
      isVowel.push(word[f]);
      notVowel.push("_");
    } else {
      notVowel.push(word[f]);
    }
  }
  for (const vowel of isVowel.reverse()) {
    notVowel.splice(notVowel.indexOf("_"), 1, vowel);
  }
  return notVowel.join("");
}

console.log(reverseVowels("DesignGUrus"));

//Valid Palindrome
const isPalindrome = (sentence) => {
  const alphanumeric = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  const onlyAlphanumeric = sentence
    .toLowerCase()
    .trim()
    .split("")
    .filter((s) => alphanumeric.includes(s));

  return onlyAlphanumeric.join("") === onlyAlphanumeric.reverse().join("");
};

console.log(isPalindrome("Was it a car or a cat I saw?"));

//Valid Anagram
function sortLetters(word) {
  return word.toLowerCase().trim().split("").sort().join("");
}

const isAnagram = (s, t) => {
  return sortLetters(s) === sortLetters(t);
};
console.log(isAnagram("rat", "car"));

//Shortest Word Distance
function getIndices(arr, word) {
  return arr
    .map((a, idx) => {
      if (a === word) {
        return idx;
      }
    })
    .filter((x) => x !== undefined);
}

const shortestWordDistance = (arr, s, t) => {
  const a = getIndices(arr, s);
  const b = getIndices(arr, t);
  let min = 0;
  for (const i of a) {
    for (const j of b) {
      min = Math.abs(Math.min(i - j));
    }
  }
  return min;
};
console.log(
  shortestWordDistance(
    ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"],
    "fox",
    "dog"
  )
);

//Two-pointers
//Pair with Target Sum
function search(arr, target) {
  for (let left = 0; left < arr.length; ) {
    for (let right = arr.length - 1; right < arr.length; ) {
      const sum = arr[left] + arr[right];

      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
    }
  }

  return [-1, -1];
}
console.log(search([0, 1, 2, 3, 4], 0));

//Find Non-Duplicate Number Instances
function moveElements(arr) {
  let uniqueIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[uniqueIndex] !== arr[i]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[i];
    }
  }
  return uniqueIndex + 1;
}

console.log(moveElements([2, 3, 3, 3, 6, 9, 9]));
console.log(moveElements([2, 2, 2, 11]));

//Squaring a Sorted Array
function makeSquares(arr) {
  return arr.map((a) => a * a).sort();
}

console.log(makeSquares([-3, -1, 0, 1, 2]));

//Triplet Sum to Zero
function searchForTriplets(arr) {
  const pairs = [];
  arr.sort((a, b) => a - b);
  for (let current = 0; current < arr.length; current++) {
    let left = current + 1;
    let right = arr.length - 1;
    let target = -arr[current];
    while (left < right) {
      const sum = arr[left] + arr[right];

      if (sum === target) {
        pairs.push([-target, arr[left], arr[right]]);
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return pairs;
}

console.log(searchForTriplets([-5, 2, -1, -2, 3]));

//Triplet Sum Close to Target
function searchTriplet(arr, target) {
  arr.sort((a, b) => a - b);
  const smallest = [];
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const difference = Math.abs(target - (arr[left] + arr[right] + arr[i]));
      if (difference === 0) {
        return sum;
      }
      smallest.push(difference);
      if (difference > 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return target - Math.min(...smallest);
}

console.log(searchTriplet([0, 0, 1, 1, 2, 6], 5));

//Triplets with Smaller Sum
function searchTriplets(arr, target) {
  let count = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum < target - arr[i]) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
}

console.log(searchTriplets([-1, 4, 2, 1, 3], 5));

// Subarrays with Product Less than a Target
function findSubarrays(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    let product = 1;
    while (j < arr.length) {
      product *= arr[j];
      if (product < target) {
        result.push(arr.slice(i, j + 1));
        j++;
      } else {
        break;
      }
    }
  }
  return result;
}
console.log(findSubarrays([8, 2, 6, 5], 50));

//Dutch National Flag Problem
function sortFlag(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let temp = 0;
      if (arr[i] > arr[j]) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}

console.log(sortFlag([2, 2, 0, 1, 2, 0]));

//Quadruple Sum to Target
function searchQuadruplets(arr, target) {
  const quadruplets = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let left = j + 1;
      let right = arr.length - 1;
      while (left < right) {
        const sum = arr[i] + arr[j] + arr[left] + arr[right];
        if (sum === target) {
          quadruplets.push([arr[i], arr[j], arr[left], arr[right]]);
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return quadruplets;
}
console.log(searchQuadruplets([4, 1, 2, -1, 1, -3], 1));

//Comparing Strings containing Backspaces
const applyBackspaces = (str) => {
  const arr = str.split("");
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === "#") {
      arr.splice(i, 1);
      if (i > 0) {
        arr.splice(i - 1, 1);
        i--;
      }
    } else {
      i++;
    }
  }
  return arr.join("");
};

function compareStrings(str1, str2) {
  return applyBackspaces(str1) === applyBackspaces(str2);
}
console.log(compareStrings("xp#", "xyz##"));
