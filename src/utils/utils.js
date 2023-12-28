const englishWords = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

export function convertIntToWord(number){
    const englishWord = englishWords[number-1];

    if(!englishWord){
        throw new Error('Function[convertIntToWord]: Invalid number input');
    }

    return englishWord;
}
