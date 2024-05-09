//Warmup
const containsDuplicates = (nums) => {
  return Array.from(new Set(nums)).length === nums.length;
};
console.log(containsDuplicates([1, 2, 3, 4]));

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

function sortLetters(word) {
  return word.toLowerCase().trim().split("").sort().join("");
}
const isAnagram = (s, t) => {
  return sortLetters(s) === sortLetters(t);
};
console.log(isAnagram("rat", "car"));

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
