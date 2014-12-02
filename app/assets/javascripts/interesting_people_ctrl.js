(function() {
  "use strict"

  angular.module("app").controller("interestingPeopleCtrl", function($scope) {

    $scope.people = [
      {
        name: "Janet",
        interestingInfo: "Deep v you probably haven't heard of them scenester Tonx irony taxidermy, hashtag Truffaut lo-fi kitsch mixtape banjo hella. Kickstarter wayfarers cliche, pork belly irony freegan drinking vinegar kale chips. Meh wayfarers post-ironic, chambray bitters yr umami +1 food truck banjo Echo Park cold-pressed. Master cleanse actually brunch 90's, seitan retro pickled cray Helvetica health goth slow-carb selvage photo booth. Quinoa scenester umami, cred Shoreditch disrupt iPhone. Quinoa forage yr leggings, plaid Austin seitan. Cray salvia flexitarian, health goth biodiesel Truffaut Marfa kogi swag quinoa try-hard brunch mlkshk selvage.",
        hideInfo: true
      },
      {
        name: "Kyle",
        interestingInfo: "Fixie blog YOLO, bitters fashion axe quinoa Helvetica mumblecore cornhole Cosby sweater. Retro trust fund gastropub, XOXO distillery mlkshk Portland organic photo booth cliche. Salvia lumbersexual raw denim, sartorial XOXO Vice narwhal Etsy put a bird on it tofu. Semiotics normcore lumbersexual, church-key trust fund PBR health goth pickled seitan. Master cleanse locavore irony DIY. Ethical occupy iPhone narwhal Intelligentsia lumbersexual small batch meggings. Readymade salvia VHS retro, McSweeney's hashtag kale chips.",
        hideInfo: true
      },
      {
        name: "Mark",
        interestingInfo: "Cold-pressed heirloom farm-to-table, authentic 8-bit fanny pack cardigan mumblecore Austin Kickstarter Williamsburg kitsch Brooklyn polaroid brunch. Crucifix pour-over farm-to-table yr, irony mlkshk Shoreditch taxidermy Etsy beard art party. Whatever kale chips Marfa Intelligentsia Etsy, Thundercats tilde small batch Bushwick. Try-hard McSweeney's you probably haven't heard of them kogi. Sustainable put a bird on it hoodie post-ironic. Photo booth gastropub Godard taxidermy, selfies shabby chic master cleanse Pinterest selvage try-hard bespoke. Gastropub pug raw denim mlkshk roof party YOLO Tumblr.",
        hideInfo: true
      },
      {
        name: "Matt",
        interestingInfo: "Lumbersexual readymade locavore, leggings roof party master cleanse 8-bit keffiyeh PBR&B brunch biodiesel iPhone messenger bag mixtape. Tote bag pour-over wayfarers freegan four dollar toast umami Godard trust fund bitters Pitchfork, Marfa beard semiotics. Neutra trust fund swag next level, listicle hoodie leggings XOXO direct trade farm-to-table Vice tote bag butcher Pinterest actually. Fingerstache synth Godard, health goth hoodie selfies pickled cornhole Shoreditch Tonx pork belly. Actually DIY Intelligentsia kale chips Odd Future, Carles flannel brunch fashion axe seitan tilde twee you probably haven't heard of them pork belly scenester. Fashion axe shabby chic brunch health goth, XOXO mumblecore art party distillery raw denim. Health goth quinoa before they sold out you probably haven't heard of them direct trade narwhal.",
        hideInfo: true
      }
    ];

    $scope.toggleInfo = function(person) {
      person.hideInfo = !person.hideInfo;
    }

    $scope.addPerson = function(person, info) {
      var createPerson = {
        name: person,
        interestingInfo: info,
        hideInfo: true
      }

      if(createPerson.name) {
        $scope.people.push(createPerson);
        $scope.newPerson = null;
      }
    };

    $scope.numberOfInterestingPeople = function() {
      var count = $scope.people.length
      return count;
    }

    $scope.deletePerson = function(person) {
      var position = $scope.people.indexOf(person);
      $scope.people.splice(position, 1);
    }

    window.scope = $scope;

  });
}());