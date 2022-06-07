function offensiveWords(text) {
  if (text.trim().length === 0) {
    return 0
  }
	const offensiveWordArray = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  const wordArray = text.split(" ");
  let wordPosition = 

  
	offensiveWordArray.forEach(function(word){
		wordArray.forEach(function(element) {
		if (element.toLowerCase().includes(word.toLowerCase())) {
   
		let wordPosition = wordArray.indexOf(element)
  }
	});
});
  
	return wordPosition;
}


// Business Logic



function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
		if (!Number(element)){
			wordCount++;
		}
	});
  return wordCount;
}

wordCounter("            ");

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}