let Hashtags = module.exports = {};

Hashtags.getHashTags = (headline) => {
    //Separate the words by splitting on whitespaces or punctuation
    // \s matches a whitespace
    // \p{P} unicode matches any punctuation
    // the /u flag enables full unicode matching, necessary to make the punctuation matching work
    let wordsArray = headline.split(/[\s\p{P}]/u);
    //Remove any empty strings returned from the regex split
    wordsArray = wordsArray.filter( (word) => {return !(word === '')} );
    //Make all the words lowercase for final return
    wordsArray = wordsArray.map( (word) => {
        return word.toLowerCase();
    });
    //Use a Set to remove duplicate words
    wordsArray = [...new Set(wordsArray)];
    //Sort the words in order of descending length
    wordsArray.sort( 
        (word1, word2) => {
            return word2.length - word1.length;
    });
    while(wordsArray.length > 3){
        wordsArray.pop();
    }
    return wordsArray.map( (word) => { return `#${word}` } );
}
