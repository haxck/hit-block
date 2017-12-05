var rectint = function(a,b){
    // if(a.x+a.image.width)/2-(b.x+b.image.width)/2
    // a 在 b 右边
    if(a.x >= b.x && a.x >= b.x + b.image.width){
        return false
    // a 在 b 左边
    }else if(a.x <= b.x && a.x + a.image.width <= b.x){
        return 
    // a 在 b 的下边
    }else if(a.y >= b.y && a.y >= b.y + b.image.height){
        return false
    // a 在 b 的上边
    }else if(a.y <= b.y && a.y + a.image.height <= b.y){
        return false
    }
    return true
}