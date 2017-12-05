    // 主游戏函数
    var __main = function(){
        var paddle = Paddle('./img/paddle.png')
        var ball = Ball('./img/ball.png')
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
            if(paddle.collide(ball)){
                ball.speedX *= -1
                ball.speedY *= -1
            }
        }
        game.draw = function(){
            game.drawImage(paddle)
            game.drawImage(ball)
        }
    }
        __main()