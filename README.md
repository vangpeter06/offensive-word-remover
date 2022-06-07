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

Test: "It should return 0 offensive word when the word and the text are different."
Code: 
const text = "zoinks";
const word = "hello";
offensiveWords(word, text);
Expected Output: 0

Test: "It should return the number of offensive word."
Code:
const text = "zoinks zoinks zoinks hello good.";
const word = "zoinks";
offensiveWords(word, text);
Expected Output: 3

Test: "It should return a word match regardless of case."
Code:
const text = "zoinks Zoinks ZOINKS ZoiNkS HELLO";
const word = "zoinks";
offensiveWords(word, text);
Expected Output: 4

Test: "It should return a word match regardless of punctuation."
Code:
const text = "zoinks. zoinks! zoinks?";
const word = "zoinks";
offensiveWords(word, text);
Expected Output: 3

Test: "It should return zoinks as one offensive word."
Code:
const text = "zoinks muppeteer biffaroni loopdaloop";

offensiveWords(text);
Expected Output: 1

Test: "It should return 4 offensive words"
Code:
const text = "zoinks muppeteer biffaroni loopdaloop";
offensiveWords(text);
Expected Output: 4

Test: "It should return the index of the offensive word as well as the count."
Code:
const text = "hello zoinks"
offensiveWords(text);
Expected Output: 1 , 1