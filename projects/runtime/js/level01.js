var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:650,y:370},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'rect',x:1200,y:463}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        var enemy = game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = 1500;
        enemy.y = groundY-105;
        game.addGameItem(enemy);
        enemy.velocityX = -3;
        enemy.rotationalVelocity = 10;
        enemy.onPlayerCollision = function(){
            game.changeIntegrity(-20)
            
        }
        
        function createRect(x,y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var rect = game.createObstacle(hitZoneSize,damageFromObstacle);
            rect.x = x;
            rect.y = y;
            game.addGameItem(rect);
            var rectShape = draw.rect(30,60,"#873600","black",1);
            rect.addChild(rectShape);
            rectShape.x = -15;
            rectShape.y = -30;
            }
        function createSawBlade(x,y){
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        }
        for (var i=0;i<levelData.gameItems.length;i++){
            var gameItem = levelData.gameItems[i];
            if (gameItem.type === "sawblade"){
                createSawBlade(gameItem.x,gameItem.y);
            }
            else if (gameItem.type === "rect"){
                createRect(gameItem.x,gameItem.y);
            }
        }

    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}