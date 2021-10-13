let IngExtractor = module.exports = {};

IngExtractor.extract = (input) => {
    //Split if we find a space or comma, prevents commas from being in returned words
    const wordsArray = input.split(/[\s|,]/g);
    //Regular expression matching to determine if a word should be added to return array
        // .* denotes 0 or more of any character 
        // [aeiou] matches a single instacne of any of these vowels, used to determine if the 
        // word has more than one syllable
        // ing matches exactly
        // /i flag denotes this regular expression is case-insensitive
    const regex = /.*[aeiou].*ing/i;
    let result = [];

    for(word of wordsArray){      
        if(regex.test(word)){
            result.push(word);
        }
    }

    return result;
}

// let words = IngExtractor.extract("coming bringing Letting sing");
// console.log(words);