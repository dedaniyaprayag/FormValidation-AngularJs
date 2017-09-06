var app = angular.module('FormValidation',[]);

app.controller('FormValidationController',function($scope){
    var self = this;
    // -----------------------------------------------------------------------
    // Function: init
    //  Used initialize default values
    //
    // Parameters:
    //  None
    //  
    // Returns:
    //  None
    // -----------------------------------------------------------------------
    self.init = function() {
		self.success = false;
    }

    // -----------------------------------------------------------------------
    // Function: submitForm
    //  Used save all the input Fields
    //
    // Parameters:
    //  isValid - Used to check the form validity 
    //  
    // Returns:
    //  None
    // -----------------------------------------------------------------------
   	self.submitForm = function(isValid) {
   		console.log("-----------");
   		if(isValid){
   			self.success = true;
   		}
   	};
   
    // -----------------------------------------------------------------------
    // Function: cancel
    //  Used to clear all the input fields
    //
    // Parameters:
    //  None
    //  
    // Returns:
    //  None
    // -----------------------------------------------------------------------
   	self.cancel = function() {
   		self.name = "";
   		self.email = "";
   		self.age = "";
   		self.userName = "";
      $scope.frmValidation.$setPristine();
   	};

   	self.init();
});