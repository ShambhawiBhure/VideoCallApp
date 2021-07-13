//The moment-timezone package is required to use the timezone related functions.
import moment from 'moment';

export const formatDate = (timestamp) => {
    return moment(timestamp).format("h:mm A");
};