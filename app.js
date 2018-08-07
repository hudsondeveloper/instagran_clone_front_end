/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar a porta de escuta */
var server_port = process.env.YOUR_PORT || process.env.PORT || 8000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});
