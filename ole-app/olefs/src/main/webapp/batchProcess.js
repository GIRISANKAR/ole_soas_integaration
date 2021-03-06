var batchProcessAPP = angular.module('batchProcessAPP', []);

batchProcessAPP.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

batchProcessAPP.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function ($scope, file, profileId, profileName, batchType, outputFormat, numOfRecordsInFile, uploadUrl) {
        var fd = new FormData();
        fd.append('profileId', profileId);
        fd.append('profileName', profileName);
        fd.append('batchType', batchType);
        fd.append('numOfRecordsInFile', numOfRecordsInFile);
        fd.append('outputFormat', outputFormat);
        fd.append('file', file);

        $scope.batchProcessStatus = "Batch process job initiated....";
        angular.element(document.getElementById('run'))[0].disabled = true;
        angular.element(document.getElementById('file'))[0].disabled = true;
        angular.element(document.getElementById('profileId'))[0].disabled = true;
        doPostRequestWithMultiPartData($scope, $http, uploadUrl, fd, function (response) {
            var data = response.data;
            var filePathName = data.filePathName;
            var interval = setInterval(function(){
                doGetRequest($scope, $http, OLENG_CONSTANTS.BATCH_STATUS, {"filePathName": filePathName}, function (response) {
                    var data = response.data;
                    var status = data.status;
                    if(status === 'COMPLETED') {
                        var totalTime = data.timeSpent;
                        var report = "Job successfully completed.\nTotal time taken : " + totalTime;
                        $scope.batchProcessStatus = report;
                        clearInterval(interval);
                    }else if(status === 'FAILED') {
                        $scope.batchProcessStatus = "Job failed.";
                        clearInterval(interval);
                    }
                });
            }, 3000);
        }, function () {
            $scope.batchProcessStatus = "Job failed.";
        });
    }
}]);

batchProcessAPP.controller('batchProfileController', ['$scope', 'fileUpload','$http', function($scope, fileUpload,$http){

    $scope.init = function() {
        if (sessionStorage.getItem("batchType") != null && sessionStorage.getItem("batchType") != "undefined") {
            $scope.batchType = sessionStorage.getItem("batchType");
            $scope.populationProfileNames();
            if (sessionStorage.getItem("profileId") != null && sessionStorage.getItem("profileId") != "undefined") {
                $scope.profileId = sessionStorage.getItem("profileId");
                $scope.profileName = sessionStorage.getItem("profileName");
                if (sessionStorage.getItem("exportInputFile") != null && sessionStorage.getItem("exportInputFile") != "undefined") {
                    console.log("Input session : " + sessionStorage.getItem("exportInputFile"));
                    $scope.exportInputFile = sessionStorage.getItem("exportInputFile");
                }
            }
        }
    };

    $scope.batchProcessTypes = BATCH_CONSTANTS.PROFILE_TYPES;

    $scope.outputFormats = BATCH_CONSTANTS.OUTPUT_FORMATS;
    $scope.outputFormat = 'Marc';

    $scope.profileNames = [];
    var url = "rest/batch/upload";
    $scope.uploadFile = function(){
        var file = $scope.selectedFile;
        var profileId = $scope.profileId;
        var profileName = $scope.profileName;
        var batchType = $scope.batchType;
        var outputFormat = $scope.outputFormat;
        var numOfRecordsInFile = $scope.numOfRecordsInFile;
        console.log('file is ' );
        console.log('Profile Name is '  + profileName);
        console.dir(file);
        fileUpload.uploadFileToUrl($scope,file,profileId,profileName,batchType,outputFormat,numOfRecordsInFile, url);
    };

    $scope.populationProfileNames = function() {
        doGetRequest($scope, $http, OLENG_CONSTANTS.PROFILE_GET_NAMES, {"batchType": $scope.batchType}, function(response) {
            var data = response.data;
            $scope.profileNames = data;
        });
    };

    $scope.setSessionData = function() {
        sessionStorage.setItem("batchType", $scope.batchType);
        sessionStorage.setItem("profileName", $scope.profileName);
        sessionStorage.setItem("profileId", $scope.profileId);
        sessionStorage.setItem("exportInputFile", $scope.exportInputFile);
    };

    $scope.checkToEnableInputFile = function(profileId) {
        angular.forEach($scope.profileNames, function (profile) {
            if (profile.profileId == profileId) {
                $scope.exportInputFile = profile.exportInputFile;
                return;
            }
        }, "");
    };

}]);
