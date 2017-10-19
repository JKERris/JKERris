(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
   $scope.title=$stateParams.title;
   $scope.property=$stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      phone:'104987465465',
      createTime:'2017-9-28 10:10:10',
      name:'',
      ab:'',
      boss:'',
      email:'',
      shopPhone:''
    });
    $scope.save=function () {
      localStorageService.update('Shop',$scope.shop);
    }
  }])
})()
