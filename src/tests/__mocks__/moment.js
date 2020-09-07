const moment = require.requireActual('moment');

//lecture 121 mocking libraries, we force moment to always be 0
export default (timestamp = 0) => {
    return moment(timestamp);
};