const axios = require("axios");
module.exports = async function (context, req) {
     let value = req.query.value;
    if (value == 1) {
        v = "21000";
    } else if (value == 2) {
        v = "55000";
    } else if (value == 3) {
        v = "87000";
    } else {
        v = 0;
    }
    axios.post(
        'https://api.particle.io/v1/devices/' + process.env["DeviceID"] + '/setPosition?access_token=' + process.env["AccessCode"], 
        {
            args: v
        });
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Good"
    };
}