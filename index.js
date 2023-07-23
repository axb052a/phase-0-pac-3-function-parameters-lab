function introduction(name) {
    return "Hi, my name is " + name + ".";
}
function introductionWithLanguage(name, language) {
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    const programs = {
        "JavaScript": "Hi, my name is " + name + " and I am learning to program in " + language + ".",
        "Python": "Hi, my name is " + name + " and I am learning to program in " + language + ".",
        "C++": "Hi, my name is " + name + " and I am learning to program in " + language + ".",
        "HTML": "Hi, my name is " + name + " and I am learning to program in " + language + "."
    };
    if (language in programs) {
        return programs[language];
    } else {
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}
}
