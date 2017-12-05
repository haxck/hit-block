// 类似精灵一样的东西
var Block = function(path){
    var image = new Image()
    image.src = path
    var o = {
        image : image,
        x:150,
        y:150,
        alive:true
    }
    o.kill = function(){
        o.alive = false
    }
    return o
}
