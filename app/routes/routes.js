module.exports = function(application){
	application.get('/', function(req, res){
		application.app.controllers.index.index(application, req, res);
	});

	application.get('/home', function(req, res){
		application.app.controllers.home.home(application, req, res);
	});

	application.get('/cadastro', function(req, res){
		application.app.controllers.cadastro.cadastro(application, req, res);
	});

	application.get('/login', function(req, res){
		application.app.controllers.login.login(application, req, res);
	});

	application.get('/escola', function(req, res){
		application.app.controllers.escola.escola(application, req, res);
	});

}