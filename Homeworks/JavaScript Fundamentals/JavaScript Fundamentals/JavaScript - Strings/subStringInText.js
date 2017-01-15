function solve(args) {
    let searchedString = args[0].toLowerCase(),
        searchInString = args[1].toLowerCase(),
        count = 0,
        index = -1;
    let i = 0;

    while (i < searchInString.length) {
        index = searchInString.search(searchedString);
        if (index > -1) {
            count += 1;
        } else {
            break;
        }
        searchInString = searchInString.substr(index + 1);
    }

    return count;
}
