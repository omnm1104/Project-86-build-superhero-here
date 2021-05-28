var canvas = new fabric.Canvas('myCanvas') ;
player_x = 10 ;
player_y = 10;
block_img_width = 30 ;
block_img_height = 30 ;
var player_object = "" ;
var block_object = "" ;

function new_image(get_image) {
    fabric.Image.fromURL(get_image , function(IMG){
        block_object = IMG ;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object) ;
    });
}


window.addEventListener("keydown" , myKeyDown);
function myKeyDown(e) {
    keypress = e.keyCode ;
    if(e.shiftKey == true && keypress == '80') {
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById('current-width').innerHTML = block_img_width;
        document.getElementById('current-height').innerHTML = block_img_height;
    }
    if(e.shiftKey == true && keypress == '77') {
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById('current-width').innerHTML = block_img_width;
        document.getElementById('current-height').innerHTML = block_img_height;
    }
    if(keypress == '38'){
        up();
    }
    if(keypress == '40'){
        down();
    }
    if(keypress == '37'){
        left();
    }
    if(keypress == '39'){
        right();
    }
    
        if(keypress == '90'){
        canvas.remove(block_object); 
    }
}


    function drp() {
    if(document.getElementById('drpdwn').value == 'Spiderman Face') {
        new_image('spider man face.jpg');
    }
    if(document.getElementById('drpdwn').value == 'Spiderman Body') {
        new_image('spiderman body.jpg');
    }
    if(document.getElementById('drpdwn').value == 'Spiderman Legs') {
        new_image('spider man legs.jpg');
    }
    if(document.getElementById('drpdwn').value == 'Spiderman Right Hand') {
        new_image('spiderman right hand.jpg');
    }
    if(document.getElementById('drpdwn').value == 'Spiderman Left Hand') {
        new_image('spiderman left hand.jpg');
    }
    
        if(document.getElementById('drpdwn').value == 'Thor Face') {
            new_image('thor face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Thor Body') {
            new_image('thor body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Thor Legs') {
            new_image('thor legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Thor Right Hand') {
            new_image('thor right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Thor Left Hand') {
            new_image('thor left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Iron man Face') {
            new_image('iron man face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Iron man Body') {
            new_image('Iron man body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Iron man Legs') {
            new_image('iron man legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Iron man Right Hand') {
            new_image('iron man right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Iron man Left Hand') {
            new_image('iron man left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Hulk Face') {
            new_image('hulk face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Hulk Body') {
            new_image('hulk body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Hulk Legs') {
            new_image('hulk legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Hulk Right Hand') {
            new_image('hulk right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Hulk Left Hand') {
            new_image('hulk left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Captain America Face') {
            new_image('captain america face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Captain America Body') {
            new_image('captain america body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Captain America Legs') {
            new_image('captain america legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Captain America Right Hand') {
            new_image('captain america right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Captain America Left Hand') {
            new_image('captain america left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Doctor Strange Face') {
            new_image('doctor strange face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Doctor Strange Body') {
            new_image('doctor strange body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Doctor Strange Legs') {
            new_image('doctor strange legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Doctor Strange Right Hand') {
            new_image('doctor strange right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Doctor Strange Left Hand') {
            new_image('doctor strange left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Black Panther Face') {
            new_image('black panther face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Black Panther Body') {
            new_image('black panther body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Black Panther Legs') {
            new_image('black panther legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Black Panther Right Hand') {
            new_image('black panther right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Black Panther Left Hand') {
            new_image('black panther left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Captain Marvel Face') {
            new_image('captain marvel face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Captain Marvel Body') {
            new_image('captain marvel body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Captain Marvel Legs') {
            new_image('captain marvel legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Captain Marvel Right Hand') {
            new_image('captain marvel right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Captain Marvel Left Hand') {
            new_image('captain marvel left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Hawkeye Face') {
            new_image('hawkeye face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Hawkeye Body') {
            new_image('hawkeye body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Hawkeye Legs') {
            new_image('hawkeye legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Hawkeye Right Hand') {
            new_image('hawkeye right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Hawkeye Left Hand') {
            new_image('hawkeye left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Vision Face') {
            new_image('vision face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Vision Body') {
            new_image('vision body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Vision Legs') {
            new_image('vision legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Vision Right Hand') {
            new_image('vision right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Vision Left Hand') {
            new_image('vision left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Black Widow Face') {
            new_image('black widow face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Black Widow Body') {
            new_image('black widow body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Black Widow Legs') {
            new_image('black widow legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Black Widow Right Hand') {
            new_image('black widow right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Black Widow Left Hand') {
            new_image('black widow left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Falcon Face') {
            new_image('Falcon face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Falcon Body') {
            new_image('Falcon body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Falcon Legs') {
            new_image('Falcon legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Falcon Right Hand') {
            new_image('Falcon right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Falcon Left Hand') {
            new_image('Falcon left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Antman Face') {
            new_image('antman face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Antman Body') {
            new_image('antman body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Antman Legs') {
            new_image('antman legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Antman Right Hand') {
            new_image('antman right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Antman Left Hand') {
            new_image('antman left hand.jpg');
        }

        if(document.getElementById('drpdwn').value == 'Wasp Face') {
            new_image('wasp face.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Wasp Body') {
            new_image('wasp body.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Wasp Legs') {
            new_image('wasp legs.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Wasp Right Hand') {
            new_image('wasp right hand.jpg');
        }
        if(document.getElementById('drpdwn').value == 'Wasp Left Hand') {
            new_image('wasp left hand.jpg');
        }
}
download_img = function(el) { 
    var superhero_name = window.prompt("Superhero name:-");
    document.getElementById("download").download = superhero_name + ".jpg";
    var image = canvas.toDataURL("image/jpg"); el.href = image; 
};