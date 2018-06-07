pacientes.controller('ListaPacientes', function($scope, PacientesSrv){
   
    $scope.load = function(){
        $scope.registros = PacientesSrv.query();
    }
});