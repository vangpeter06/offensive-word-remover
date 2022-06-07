Describe: offensiveWords()
Test: "It should return 0 offensive words for an  empty string."
Code:
const text = "";
const word = "zoinks";
offensiveWords(word, text);
Expected Output: 0

Test: " It should return 1 offensive word when the word and the text are the same."
Code: 
const text = "zoinks";
const word = "zoinks";
offensiveWords(word, text);
Expected Output: 1

Test: "