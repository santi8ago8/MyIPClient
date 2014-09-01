/**
 * Created by Santiago on 01/09/2014.
 */


var needle = require('needle');
var config = require("./config");

console.log("sending data to server every " + parseInt(config.delay / 1000) + " secs.");
var tick = function () {

    //console.log("sending data to server");

    needle.put(config.serverUrl, config.publicData, {json: true}, function (err, resp) {
        if (err) {
            console.log("error sending data " + err);
        }

        else {
            //console.log("sended data, resp: "+JSON.stringify(resp.body));
        }
    });


};


tick();


setInterval(tick, config.delay);