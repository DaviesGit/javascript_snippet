class Wait_all_finish {
    constructor(times, callback, called) {
        if ('function' !== typeof callback) {
            callback = function() {};
        }
        if ('function' !== typeof called) {
            called = function() {};
        }
        var wait_times = times,
            wait_count = 0,
            is_called = false;
        if (!wait_times) {
      		is_called = true;
      		callback();
        }
        var wait_all_finish = function(param) {
            called(param);
            if (!is_called) {
                ++wait_count;
                if (wait_count >= wait_times) {
                    is_called = true;
                    callback(param);
                }
            }
        }
        wait_all_finish.reset = function(times, _callback) {
            is_called = false;
            wait_count = 0;
            if (0 < times) {
                wait_times = times;
            }
            if (_callback) {
                callback = _callback;
            }
        }
        wait_all_finish.set_times = function(times) {
            wait_times = times;
        }
        wait_all_finish.get_times = function() {
            return wait_times;
        }
        wait_all_finish.add_times = function(times) {
            wait_times += times;
        }
        wait_all_finish.get_count = function() {
            return wait_count;
        }
        wait_all_finish.callback = function(param) {
            callback(param);
        }
        wait_all_finish.end_callback = function(param) {
            is_called = true;
            callback(param);
        }

        return wait_all_finish;
    }
}