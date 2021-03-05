class Game {
    constructor() {

    }

    getState() {
        //Reading from database : 
        //.ref -> which column in DB you want to refer too,  
        //.on-->opening a listener to read the dats from database 

        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) { gameState = data.val() })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }

    start() {
        if (gameState === 0) {
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
    }


}