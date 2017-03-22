// var path = require("path")
// var mqtt = require("mqtt")
// var fs = require("fs")
// var KEY = fs.readFileSync(__dirname + '/client.key')
// var CERT = fs.readFileSync(__dirname + '/client.crt')
// var CAfile = [fs.readFileSync(__dirname + '/ca.crt')]
// var PORT = 8883;
// var HOST = '127.0.0.1';
// var options = {
//     host: HOST,
//     port: PORT,
//     protocol: 'mqtts',
//     protocolVersion: 3,
//     protocolId: 'MQIsdp',
//     ca: CAfile,
//     key: KEY,
//     cert: CERT,
//     rejectUnauthorized: false,
//     secureProtocol: 'TLSv1_method'
// };
// var client = mqtt.connect(options);
// client.on('connect', function () {
//     client.subscribe('messages');
//     client.publish('messages', 'Current time is: ' + new Date());
// });
// client.on('message', function(topic, message) {
//     console.log(message.toString());
// });


var mqtt  = require('mqtt');
//var client  = mqtt.connect('mqtt://test.mosca.io');
//var client  = mqtt.connect('mqtt://192.168.103.237');
//var client  = mqtt.connect('mqtt://m2m.vicbang.com',{
//    username:'13800000000',
//    password:'123456',
//    clientId:'app_13800000000'
//});
    var i = 0;
    var client  = mqtt.connect('mqtt://localhost',{
        username:'username',
        password:'password',
        clientId:'app_13800000000_'+i
    });
    client.on('connect', function() {
        console.log('connected.....');
        client.subscribe('responsers');
        client.publish('senders', 'Hello mqtt');
    });
    client.on('message', function (topic, message) {
        // message is Buffer
        console.log(message.toString());
        //client.end();
    });