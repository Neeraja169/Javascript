function reverse(statement){
    let words = statement.split('')
    let revWords = words.reverse();
    let revSentence = revWords.join('')
    return revSentence
}
let statement1 = "This is my cloudvadhana assessment work"
let reversed = reverse(statement1)
console.log(reversed);