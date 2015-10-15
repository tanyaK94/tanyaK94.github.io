var StydentApp=angular.module("StydentApp",[])
StydentApp.controller("table",function($scope){
  $scope.items=[
    {name:"Michail", quarter1:10,  quarter2:12.6,  quarter3:9.7,  quarter4:9.5,     },
    {name:"Tolya",   quarter1:3,   quarter2:6,     quarter3:7,    quarter4:5.5,     },
    {name:"Tanya",   quarter1:10,  quarter2:16,    quarter3:7.7,  quarter4:10.5,    },
    {name:"Olya",    quarter1:8,   quarter2:9.6,   quarter3:4.7,  quarter4:9.5,     },
    {name:"Katya",   quarter1:7,   quarter2:11.6,  quarter3:3.3,  quarter4:8,       }];
    $scope.save=function(){
     $scope.items.push({
     name: $scope.new_name,
     quarter1: $scope.new_quarter1,
     quarter2: $scope.new_quarter2,
     quarter3: $scope.new_quarter3,
     quarter4: $scope.new_quarter4,
     });
         $scope.new_name="";
         $scope.new_quarter1="";
         $scope.new_quarter2="";
         $scope.new_quarter3="";
         $scope.new_quarter4="";
     };
     $scope.checked=[];
});

   
