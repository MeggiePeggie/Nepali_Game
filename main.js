var canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_w=30;
block_h=30;

var player_obj="";
var block_obj="";

function player_update()
{
    fabric.Image.fromURL("Alex-Minecraft.png", function(Img)
    {
        player_obj=Img;

        player_obj.scaleToWidth(150);
        player_obj.scaleToHeight(140);
        player_obj.set({top:player_y, left:player_x});
        canvas.add(player_obj);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
        block_obj=Img;

        block_obj.scaleToWidth(block_w);
        block_obj.scaleToHeight(block_h);
        block_obj.set({top:player_y, left:player_x});
        canvas.add(block_obj);

    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("shift & p pressed together");
        block_w = block_w + 10;
        block_h = block_h + 10;
        document.getElementById("current_w").innerHTML = block_w;
        document.getElementById("current_h").innerHTML = block_h;
    }

    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("shift & m pressed together");
        block_w = block_w - 10;
        block_h = block_h - 10;
        document.getElementById("current_w").innerHTML = block_w;
        document.getElementById("current_h").innerHTML = block_h;
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '66')
    {
        new_image("blue.png");
        console.log("b");
    }

    if(keyPressed == '87')
    {
        new_image("white.jpg");
        console.log("w");
    }

    if(keyPressed == '82')
    {
        new_image("red.png");
        console.log("r");
    }
}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_h;
        console.log("Block image height is = " + block_h);
        console.log("when up arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_obj);
        player_update();
    }

}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_h;
        console.log("Block image height is = " + block_h);
        console.log("when down arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_obj);
        player_update();
    }

}

function left()
{
    if(player_x >=0)
    {
        player_x = player_x - block_w;
        console.log("Block image width is = " + block_w);
        console.log("when left arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_obj);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_w;
        console.log("Block image width is = " + block_w);
        console.log("when right arrow key is pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_obj);
        player_update();
    }

}
