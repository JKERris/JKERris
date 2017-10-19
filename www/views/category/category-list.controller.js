(function () {
  'use strict'
  angular.module('starter.controllers')
    .controller('CategoryListCtrl',['$scope','$ionicActionSheet','$ionicHistory','CategoryService','productService','popupService', function ($scope,$ionicActionSheet,$ionicHistory,CategoryService,productService,popupService) {
      $scope.$on('$stateChangeSuccess',function (event,toState,toParams,fromState,fromParams) {
        $scope.showInfo='无小分类进入大分类';
        if(fromState.name=='app.product-list'){
          $scope.showInfo='全部商品';
        }
      });
      $scope.categories = [
        {
          ID: 1,
          Name: '手机数码',
          Children: [
            {
              ID: 11,
              Name: 'APPLE/苹果',
              Children: []
            },
            {
              ID: 12,
              Name: '华为',
              Children: []
            },
            {
              ID: 13,
              Name: '三星',
              Children: []
            },
            {
              ID: 14,
              Name: '小米',
              Children: []
            }
          ]
        },
        {
          ID: 2,
          Name: '3C数码配件',
          Children: [
            {
              ID: 21,
              Name: '手机保护壳',
              Children: []
            },
            {
              ID: 22,
              Name: '移动电源',
              Children: []
            },
            {
              ID: 23,
              Name: '手机数据线',
              Children: []
            },
            {
              ID: 24,
              Name: '读卡器',
              Children: []
            }
          ]
        },
        {
          ID: 3,
          Name: '数码相机',
          Children: [
            {
              ID: 31,
              Name: '专业单反',
              Children: []
            },
            {
              ID: 32,
              Name: '单反镜头',
              Children: []
            },
            {
              ID: 33,
              Name: '数码摄像机',
              Children: []
            },
            {
              ID: 34,
              Name: '拍立得',
              Children: []
            }
          ]
        },
        {
          ID: 4,
          Name: '电脑',
          Children: [
            {
              ID: 41,
              Name: '平板电脑',
              Children: []
            },
            {
              ID: 42,
              Name: '台式机',
              Children: []
            },
            {
              ID: 43,
              Name: '联想',
              Children: []
            },
            {
              ID: 44,
              Name: 'ThinkPad',
              Children: []
            }
          ]
        },
      ];
      $scope.activeCategory = {};
      $scope.activeSubCategory = {};
      if ($scope.categories.length > 0) {
        $scope.activeCategory = $scope.categories[0];
      }
      $scope.seleCategory = function (index) {
        if ($scope.activeCategory.ID != $scope.categories[index].ID) {
          $scope.activeCategory = $scope.categories[index];
        }
      };
      $scope.selectSubCategory = function (data) {
        console.log(data);
        $scope.activeSubCategory = data;
        $ionicHistory.goBack();
      };
      $scope.showActionSheet = function () {
        $ionicActionSheet.show({
          buttons:[
            {
              text:'<b>新增小分类</b>'
            },
            {
              text:'编辑分类'
            }
          ],
         cancelText:'取消',
          buttonClicked:function (index) {
            switch(index){
              case 0:
                    $scope.gotoCategoryAdd();
                    break;
              case 1:

                    break;
            }
          },
          titleText:'更多操作'
        });
      };
      $scope.gotoCategoryAdd=function () {
        location.href='#/app/category-add/' +$scope.activeCategory.ID + '/' +$scope.activeCategory.Name;
      }
      $scope.$watch('activeSubCategory',function (newValue,oldValue) {
        if(newValue.ID){
          CategoryService.updateCategory($scope.activeSubCategory);
        }
      })
    }
    ]);
})();

