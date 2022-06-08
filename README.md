##Describe: offensiveWords()
###Test: "It should return 0 offensive words for an  empty string."
*Code:*
const text = "";
const word = "zoinks";
offensiveWords(word, text);
Expected Output: 0

###_Test: " It should return 1 offensive word when the word and the text are the same."_
*_Code:_* 
_const text = "zoinks";_
_const word = "zoinks";_
_offensiveWords(word, text);_
_Expected Output: 1_

###_Test: "It should return 0 offensive word when the word and the text are different."_
*_Code:_* 
_const text = "zoinks";_
_const word = "hello";_
_offensiveWords(word, text);_
_Expected Output: 0_

###_Test: "It should return the number of offensive word."_
*_Code:_*
_const text = "zoinks zoinks zoinks hello good.";_
_const word = "zoinks";_
_offensiveWords(word, text);_
_Expected Output: 3_

###_Test: "It should return a word match regardless of case."_
*_Code:_*
_const text = "zoinks Zoinks ZOINKS ZoiNkS HELLO";_
_const word = "zoinks";_
_offensiveWords(word, text);_
_Expected Output: 4_

###_Test: "It should return a word match regardless of punctuation."_
*_Code:_*
_const text = "zoinks. zoinks! zoinks?";_
_const word = "zoinks";_
_offensiveWords(word, text);_
_Expected Output: 3_

###_Test: "It should return zoinks as one offensive word."_
*_Code:_*
_const text = "zoinks muppeteer biffaroni loopdaloop";_
_offensiveWords(text);_
_Expected Output: 1_

###_Test: "It should return 4 offensive words"_
*Code:*
_const text = "zoinks muppeteer biffaroni loopdaloop";_
_offensiveWords(text);_
_Expected Output: 4_

###_Test: "It should return the index of the offensive word as well as the count."_
*Code:*
_const text = "hello zoinks"_
_offensiveWords(text);_
_Expected Output: 1 , 1_