function replaceWhiteSpaces(text){
    let input = text[0];
    text = input.replace(/ /g, '&nbsp;');
    console.log(text);
}

replaceWhiteSpaces(['hello world']);