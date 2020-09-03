function create_path(file_path, separator) {
    separator = separator ? separator : '/';
    file_path = file_path.split(separator);
    var drive_letter = file_path.shift();
    file_path.reduce(function (current_full_directory, current_directory) {
        current_full_directory += separator + current_directory;
        if (!fs.existsSync(current_full_directory)) {
            fs.mkdirSync(current_full_directory);
        }
        return current_full_directory;
    }, drive_letter);
}
