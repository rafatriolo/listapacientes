pacientes.factory('PacientesSrv', function($resource){
    return $resource(
        'https://api-pacientes.herokuapp.com/pacientes'
    );
});