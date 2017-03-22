var mosca = require('mosca');
var MqttServer = new mosca.Server({
    port: 1883
});
MqttServer.on('clientConnected', function(client){
    console.log('client connected', client.id);
});
MqttServer.on('clientDisconnected', function (client) {
    console.log('Client Disconnected: ', client.id);
});
/**
 * 监听MQTT主题消息
 **/
MqttServer.on('published', function(packet, client) {
    switch (packet.topic) {
        case 'senders':
            console.log("payload: ", packet.payload.toString());
            var msg = {
                topic: 'responsers',
                payload: '你好' + Math.floor(Math.random()*1000),
                qos: 0,
                retain: false
            };
            setInterval(function(){
                MqttServer.publish(msg, function () {
                    // console.log('repeat!');
                });
            }, 1000);
            break;
    }
});

MqttServer.on('ready', function(){
    console.log('mqtt is running...');
    //MqttServer.authenticate = authenticate;
});