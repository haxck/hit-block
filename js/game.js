    // 场景相关
    var Game = function(){
        var g = {
            actions: {},
            keydowns: {}
        }
        // 获取 Canvas
        var canvas = document.querySelector("#id-canvas")
        var context = canvas.getContext("2d")
        g.canvas = canvas
        g.context = context

        //  
        window.addEventListener("keydown", function(event){
            g.keydowns[event.key] = true
        })
        
        window.addEventListener("keyup", function(event){
            g.keydowns[event.key] = false
        })

        // 注册事件
        g.registerAction = function(key, callback){
            g.actions[key] = callback
        }

        // drawImage
        g.drawImage = function(img){
            g.context.drawImage(img.image, img.x, img.y)
        }
        setInterval(function(){
            // 执行注册过的事件
            var actions = Object.keys(g.actions)
            for (var i = 0; i < actions.length; i++) {
                var key = actions[i];
                if(g.keydowns[key]){
                    g.actions[key]()
                }
                
            }

            // updata
            g.updata()
            // clear
            context.clearRect(0,0,canvas.width,canvas.height)
            // draw
            g.draw()
        },1000/30)
        return g
    }