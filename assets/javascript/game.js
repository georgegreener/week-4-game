$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var targetNum;
    var score;

    initializeGame();
    addEventListeners();

     function initializeGame() {
        targetNum = randNum(19, 120);
        score = 0;
        $("#target-num").html(targetNum);
        $("#score").html(score);
        $("#blueRupee").attr("value", randNum(1, 12));
        $("#redRupee").attr("value", randNum(1, 12));
        $("#yellowRupee").attr("value", randNum(1, 12));
        $("#greenRupee").attr("value", randNum(1, 12));
     };

     function gameCheck() {
         if (score === targetNum) {
             wins += 1;
             $("#wins").html(wins);
             initializeGame();
         }
         else if (score > targetNum) {
             losses += 1;
             $("#losses").html(losses);
             initializeGame();
         } else {
            $("#score").text(score);
         }
     };

      function addEventListeners() {

          $("#blueRupee").on("click", function () {
            score += parseInt($(this).val());
            gameCheck();     
         });
    
         $("#redRupee").on("click", function () {
             score += parseInt($(this).val());
              gameCheck();
         });
    
         $("#yellowRupee").on("click", function () {
             score += parseInt($(this).val());
              gameCheck();
         });
    
         $("#greenRupee").on("click", function () {
             score += parseInt($(this).val());
              gameCheck();
         });

     };

     function randNum(min, max){
        return Math.floor(Math.random() * max) + min;
    }

});