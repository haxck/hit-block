// 类似精灵一样的东西
var Paddle = function(path){
    var image = new Image()
    image.src = path
    var o = {
        image : image,
        x:100,
        y:280,
        speed:12,
    }
    o.moveLeft = function(){
        if(o.x > 0){
            o.x -= o.speed
        }else{
            o.x = 0
        }
    }
    o.moveRight = function(){
        if(o.x + o.image.width < 400){
            o.x += o.speed
        }else{
            o.x = o.x
        }
    }
    return o
}
