export const stringUtils = {
    capitalize: (input) => input.charAt(0).toUpperCase() + input.slice(1),
    trim: (input) => input.trim(),
    repeat: (input, times) => input.repeat(times),
    toSnakeCase: (input) => input
        .replace(/\s+/g, "_")
        .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
        .replace(/^_/, "")
        .toLowerCase(),
    toUpperCase: (input) => input.toUpperCase(),
    toLowerCase: (input) => input.toLowerCase(),
    isEmpty: (input) => input.trim().length === 0,
    reverseString: (input) => input.split("").reverse().join(""),
    truncate: (input, length) => input.length <= length ? input : input.slice(0, length) + "...",
    removeSpaces: (input) => input.replace(/\s+/g, ""),
    countWords: (input) => input.trim().split(/\s+/).length,
    startsWith: (input, start) => input.startsWith(start),
    endsWith: (input, end) => input.endsWith(end),
    replaceAll: (input, search, replace) => input.split(search).join(replace),
};
