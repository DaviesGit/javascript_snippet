class Callback_once {
    constructor(times, callback) {
        if ('function' !== typeof callback) {
            callback = function() {};
        }
        var callback_times = times,
            callback_count = 0,
            is_called = false;
        if (!callback_times) {
            callback_times = 1;
        }
        var callback_once = function(param) {
            if (!is_called) {
                ++callback_count;
                if (param && param.error) {
                    is_called = true;
                    callback(param);
                }
                if (callback_count >= callback_times) {
                    is_called = true;
                    callback(param);
                }
            }
        }
        callback_once.reset = function(times, _callback) {
            is_called = false;
            callback_count = 0;
            if (0 < times) {
                callback_times = times;
            }
            if (_callback) {
                callback = _callback;
            }
        }
        callback_once.set_times = function(times) {
            callback_times = times;
        }
        callback_once.get_times = function() {
            return callback_times;
        }
        callback_once.add_times = function(times) {
            callback_times += times;
        }
        callback_once.get_count = function() {
            return callback_count;
        }
        callback_once.callback = function(param) {
            callback(param);
        }
        callback_once.end_callback = function(param) {
            is_called = true;
            callback(param);
        }

        return callback_once;
    }
}