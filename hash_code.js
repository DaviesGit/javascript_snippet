function hash_code_enhance(string, length, obfuscate_string) {
    length = length ? length : 64;
    obfuscate_string = obfuscate_string ? obfuscate_string : '|';
    function hash_code(string) {
        var hash = 0, i, chr;
        for (i = 0; i < string.length; i++) {
            chr = string.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
    var segment = 10;
    var hash = [];
    for (var i = 0, times = Math.ceil(string.length / segment); i < times; ++i) {
        hash.push(hash_code(string.substr(i * segment, segment)));
    }
    hash = hash.join(obfuscate_string);
    do {
        hash = btoa(hash);
        hash = hash.substr(0, hash.length - 2 < length ? hash.length : length);
    } while (hash.length !== length || hash[hash.length - 1] === '=');
    return hash;
}

