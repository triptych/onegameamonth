// Create a YUI sandbox on your page.
YUI().use('node', 'event', function (Y) {
    // The Node and Event modules are loaded and ready to use.
    // Your code goes here!

    Y.log("js is working!");
    //Y.one("#canvas").setContent("YUI is loaded and working");

    Y.namespace("game");

    Y.game = {
        canvas: null,
        score: 0,
        init: function(){
        Y.log("init called!");
            Y.game.canvas = Y.one("#canvas");
            Y.game.addBox();
            
            Y.game.canvas.one("#scoreval").setContent(Y.game.score.toString());
        },
        addBox: function(){
            Y.log(this.canvas);
            this.canvas.append("<div class='box'></div>");
            Y.game.canvas.one(".box").setStyles({
                top: Math.floor(Math.random() * 260),
                left: Math.floor(Math.random() * 260)
            });
            Y.game.canvas.one(".box").on("click", function(e){
                Y.game.removeBox();
            });
        },
        removeBox: function(){
            Y.log("removing box");
            this.canvas.removeChild(Y.one(".box"));
            Y.game.addScore();
            Y.game.addBox();
        },
        addScore: function(){
            Y.game.score = Y.game.score + 10;
            Y.game.canvas.one("#scoreval").setContent(Y.game.score.toString());
        }
    };


    Y.on("domready", function(){
        Y.game.init();
    });
});

