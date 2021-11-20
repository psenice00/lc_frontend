export const  escapeSpecialCharsFromString = (stringWithSpecialChars) => {
    let queryString = stringWithSpecialChars;
    queryString = queryString.toLowerCase().replace(/\./g, '');
    var convMap = {
        "ě": "e",
        "š": "s",
        "č": "c",
        "ř": "r",
        "ž": "z",
        "ý": "y",
        "á": "a",
        "í": "i",
        "é": "e",
        "ú": "u",
        "ů": "u",
        "ň": "n",
        "ď": "d",
        "ť": "t",
        " ": "-"
    }
    for (var i in convMap) {
        queryString = queryString.replace(new RegExp(i, "g"), convMap[i]);
    }
    return queryString;
}