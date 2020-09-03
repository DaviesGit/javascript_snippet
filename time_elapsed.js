class Time_elapsed {
    constructor() {
        var start_time = new Date().getTime();

        function start_count() {
            start_time = new Date().getTime();
        }

        function set_start_time(time) {
            start_time = time;
        }

        function get_time_elapsed() {
            var now_time = new Date().getTime();
            return now_time - start_time;
        }

        function get_time_elapsed_json() {
            var elapsed = get_time_elapsed();
            var temp = elapsed;
            var years = Math.floor(temp / (1000 * 60 * 60 * 24 * 365)),
                temp = temp % (1000 * 60 * 60 * 24 * 365),
                days = Math.floor(temp / (1000 * 60 * 60 * 24)),
                temp = temp % (1000 * 60 * 60 * 24),
                hours = Math.floor(temp / (1000 * 60 * 60)),
                temp = temp % (1000 * 60 * 60),
                minutes = Math.floor(temp / (1000 * 60)),
                temp = temp % (1000 * 60),
                seconds = Math.floor(temp / (1000)),
                temp = temp % (1000),
                milliseconds = Math.floor(temp / (1));
            return {
                years: years,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
                milliseconds: milliseconds
            };
        }

        function get_time_elapsed_formated() {
            var elapsed = get_time_elapsed_json();
            var str = '';
            delete elapsed.milliseconds;
            for (var property in elapsed) {
                if (elapsed[property]) {
                    str += elapsed[property]  + property[0] + ' ';
                }
            }
            return str;
        }


        return {
            start_count: start_count,
            set_start_time: set_start_time,
            get_time_elapsed: get_time_elapsed,
            get_time_elapsed_json: get_time_elapsed_json,
            get_time_elapsed_formated: get_time_elapsed_formated
        }
    }
}