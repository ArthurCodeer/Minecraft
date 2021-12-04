canvas = new fabric.Canvas("myCanvas")

blockHeight= 30;

blockWidth= 30;

playerX= 10

playerY= 10;

playerObject= "";

blockObject= "";

function playerUpdate(){
fabric.Image.fromURL("player.png", function(img){
    playerObject= img
    playerObject.scaleToWidth(150)
    playerObject.scaleToHeight(140)

    playerObject.set({
        top: playerY,
        left: playerX
    })

    canvas.add(playerObject)
})
}

function blockUpdate(getBlock){
    fabric.Image.fromURL(getBlock, function(img){
        blockObject= img
        blockObject.scaleToWidth(blockWidth)
        blockObject.scaleToHeight(blockHeight)
    
        blockObject.set({
            top: playerY,
            left: playerX
        })
    
        canvas.add(blockObject)
    })
    }

    window.addEventListener("keydown", my_keypress);

    function my_keypress(e){
        keyNumber= e.keyCode
        console.log(keyNumber)

        if(e.shiftKey && keyNumber == '80'){
            blockHeight = blockHeight+10
            blockWidth = blockWidth+10
            document.getElementById("currentHeight").innerhtml=blockHeight   
            document.getElementById("currentWidth").innerHTML=blockWidth
            console.log("shift & p")
         }

         if(e.shiftKey && keyNumber == '77'){
            blockHeight = blockHeight-10
            blockWidth = blockWidth-10
            document.getElementById("currentHeight").innerhtml=blockHeight   
            document.getElementById("currentWidth").innerHTML=blockWidth
            console.log("shift & m")
         }

         if(keyNumber == '38'){
             up()
             console.log("up")
         }

         if(keyNumber == '40'){
            down()
            console.log("down")
        }

        if(keyNumber == '37'){
            left()
            console.log("left")
        }

        if(keyNumber == '39'){
            right()
            console.log("right")
        }

        if(keyNumber == '67'){
            blockUpdate("cloud.jpg")
            console.log("c")
        }

        if(keyNumber == '68'){
            blockUpdate("dark_green.png")
            console.log("d")
        }

        if(keyNumber == '71'){
            blockUpdate("ground.png")
            console.log("g")
        }

        if(keyNumber == '76'){
            blockUpdate("light_green.png")
            console.log("l")
        }

        if(keyNumber == '82'){
            blockUpdate("roof.jpg")
            console.log("r")
        }

        if(keyNumber == '84'){
            blockUpdate("trunk.jpg")
            console.log("t")
        }

        if(keyNumber == '85'){
            blockUpdate("unique.png")
            console.log("u")
        }

        if(keyNumber == '87'){
            blockUpdate("wall.jpg")
            console.log("w")
        }

        if(keyNumber == '89'){
            blockUpdate("yellow_wall.png")
            console.log("y")
        }
    }

    function up()
    {
        if(playerY > 0){
            playerY= playerY - blockHeight
            console.log("blockHeight = " + blockHeight)
            console.log("when up is pressed , x =" + playerX + ", y =" + playerY)
            canvas.remove(playerObject)
            playerUpdate()
        }
    }

    function down()
    {
        if(playerY < 650){
            playerY= playerY + blockHeight
            console.log("blockHeight" + blockHeight)
            console.log("when down arrow is pressed , x =" + playerX + ", y =" + playerY)
            canvas.remove(playerObject)
            playerUpdate()
        }
    }

    function right()
    {
        if(playerX < 940){
            playerX = playerX + blockWidth
            console.log("blockWidth" + blockWidth)
            console.log("when right arrow is clicked , x =" + playerX + ", y =" + playerY)
            canvas.remove(playerObject)
            playerUpdate()
        }
    }

    function left()
    {
        if(playerX > 0){
            playerX = playerX - blockWidth
            console.log("blockWidth" + blockWidth)
            console.log("when left arrow is clicked , x =" + playerX + ", y =" + playerY)
            canvas.remove(playerObject)
            playerUpdate()
        }
    }