    var Ball = function(path){
        var image = new Image()
        image.src = path
        var o = {
            image : image,
            x:100,
            y:200,
            speedX:7,
            speedY:7,
            fired: false
        }
        o.fire = function(){
            o.fired = true
        }
        o.move = function(){
            if(o.fired){
                if(o.x+o.image.width < 0 || o.x+o.image.width > 400){
                    o.speedX = -o.speedX
                }
                if(o.y+o.image.height < 0 || o.y+o.image.height > 300){
                    o.speedY = -o.speedY
                }
                o.x += o.speedX
                o.y += o.speedY
            }

        }

        return o
    }
