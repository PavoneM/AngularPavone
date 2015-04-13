'use strict';

// compteur pour le premier
var compteur=0

angular.module('showcaseApp')

  // Directive pour masquer le contenu de mes descriptions
  .directive('cacherContenu', function() {
    return function(scope, element, attrs) {
      angular.element(element).css('display','none');
    };
  })

  // Directive pour afficher le contenu de mes descriptions
  .directive('afficherContenu', function() {
    return function(scope, element, attrs) {
      angular.element(element).css('display','block');
    };
  })

  // Directive pour masquer le contenu de mes descriptions
  .directive('afficherLevel', function() {
    return function(scope, element, attrs) {
      var bar = $(angular.element(element));
      var level = scope.matiere.niveau
      bar.width(0);
      bar.animate({
        width: level+'%'
      }, 800);
    };
  })

  .directive('binderLeClick', function() {
    return function(scope, element, attrs) {

      compteur = compteur +1;
      if(compteur == 1){
        $(angular.element(element)).removeClass("hide");
        $(angular.element(element)).find(".description").slideDown(1000);
        setTimeout($(angular.element(element)).addClass("show"), 1000);
      }

      angular.element(element).click(function(){
        var speed = 600;
        console.log("Je suis appelé")
        if ($(this).hasClass("show")) {
          $(this).removeClass("show");
          $(this).find(".description").slideUp(speed);
          setTimeout($(this).addClass("hide"), speed);
        }
        else if ($(this).hasClass("hide")) {
          $(this).removeClass("hide");
          $(this).find(".description").slideDown(speed);
          setTimeout($(this).addClass("show"), speed);
        }
      })
    };
  })

  .controller('CVCtrl', function ($scope,$http) {

    $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
    $http.get("model.json").success(function(data) {
      $scope.modele = data;
      $scope.progAlgo = data.progAlgo;
      $scope.progWeb = data.progWeb;
      $scope.prog = $scope.progAlgo.concat($scope.progWeb);
      $scope.expPro = data.experienceProfessionelle;
      $scope.formation = data.formation;
    })

    /* ---------------------------------------------------------------------- */
    /*	Progressbar load page
     /* ---------------------------------------------------------------------- */
    $(".progressbar > span").each(function() {
      var bar = $(this);
      var level = $(this).attr('level');
      bar.width(0);
      bar.animate({
        width: level+'%'
      }, 800);
    });

    /* ---------------------------------------------------------------------- */
    /*	ProgressBar Show/Hide Description
     /* ---------------------------------------------------------------------- */

    $(".roll-with-description.hide").each(function(){
      $(this).each(function(){
        $(this).find(".description").css('display','none')
      })
    });

    $(".roll-with-description.show").each(function(){
      $(this).each(function(){
        $(this).find(".description").css('display','block')
      })
    });

    $(".roll-with-description").each(function(){
      $(this).click(function(){
        var speed = 600;
        if ($(this).hasClass("show")) {
          $(this).removeClass("show");
          $(this).find(".description").slideUp(speed);
          setTimeout($(this).addClass("hide"), speed);

        }
        else if ($(this).hasClass("hide")) {
          $(this).removeClass("hide");
          $(this).find(".description").slideDown(speed);
          setTimeout($(this).addClass("show"), speed);
        }
      })
    });
    /* ---------------------------------------------------------------------- */
    /*	Block Show/Hide Description
     /* ---------------------------------------------------------------------- */
    $(".hidden").each(function(){
      $(this).each(function(){
        $(this).find(".block-content").css('display','none')
      })
    });

    $(".showing").each(function(){
      $(this).each(function(){
        $(this).find(".block-content").css('display','block')
      })
    });
  });
