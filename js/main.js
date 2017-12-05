// 主游戏函数
var __main = function(){
    var paddle = Paddle('./img/paddle.png')
    var ball = Ball('./img/ball.png')
    var block = Block('./img/block.png')
    var game = Game()

    game.registerAction('a',function(){
        paddle.moveLeft()
    })
    game.registerAction('d',function(){
        paddle.moveRight()
    })
    game.registerAction('f',function(){
        ball.fire()
    })
    game.updata = function(){
        ball.move()
        if(rectint(paddle,ball)){
            ball.speedX *= -1
            ball.speedY *= -1
        }
        if(rectint(block,ball)){
            block.kill()
            ball.speedX *= -1
            ball.speedY *= -1
        }
    }
    game.draw = function(){
        game.drawImage(paddle)
        game.drawImage(ball)
        if(block.alive){
            game.drawImage(block)
        }
        
    }
}
__main()