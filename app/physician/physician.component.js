function PhysicianCtrl($http,$location, $anchorScroll){
	var ctrl = this;
	var baseURL = "http://physicians-env.us-east-1.elasticbeanstalk.com/";
	var baseURL_test = "http://localhost:8081/";

	ctrl.expanded = false;
	ctrl.searchHistory = [];
	ctrl.selectednpiNumber = 0;

	ctrl.npiNumber = "1134211576";

	ctrl.physicianDetail = function(value){

		if(value){
			ctrl.loader = true;
			ctrl.npiNumber = value;
			ctrl.searchHistory.indexOf(value) == -1 ? ctrl.searchHistory.push(value) : null;

			$http({
				    url: baseURL_test + 'np/query/' + value,
				    method: "GET",
				    crossDomain: true
				})
				.then(function(response) {
						ctrl.loader = false;
	                    ctrl.doctorDetail = response.data;
	                })
	                .catch(function(err) {
	                	ctrl.loader = false;
	                    console.log('Error getting doctor details:');
	                    console.log(err);
	                });
        }
	};

	ctrl.searchvalue = function(search){
		ctrl.dummy = "100";
	};
	ctrl.clear = function(){
		ctrl.dummy="";
	};

	ctrl.setNPINo = function(npi){
		ctrl.npiNumber = npi;
		$location.hash('top');
		$anchorScroll();
		ctrl.physicianDetail(npi);
	}
}


angular.module('myApp.physician')
        .component('physician', {
            templateUrl: 'physician/physician.template.html',
            controller: ['$http','$location','$anchorScroll',PhysicianCtrl]
            
        });