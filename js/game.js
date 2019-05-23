// 游戏 - 构造函数
function Game() {
  this.snake = new Snake(); // 蛇对象
  this.food = new Food(); // 食物对象
  this.food.randomLocation(); // 食物随机位置
  this.snake.showSnake(); // 展示一条蛇
    if($(".snake-body").length>0){
        const snakeColor = window.localStorage.getItem('snakeColor');
        if(snakeColor == 0){
            $(".snake-body").css("background"," #c9b82f");
            $(".snake-body").css("borderColor","#e6d544");
        }
        if(snakeColor == 1){
            $(".snake-body").css("background","lime");
            $(".snake-body").css("borderColor","#27e959");
        }
        if(snakeColor == 2){
            $(".snake-body").css("background","#4221ed");
            $(".snake-body").css("borderColor","#4530b3");
        }
        if(snakeColor == 3){
            $(".snake-body").css("background","#af1f0c");
            $(".snake-body").css("borderColor","#971b0a");
        }
    }

};

let timer;
let timer1;
let n = 0;
let j = 1;
Game.prototype.start = function () {

  window.clearInterval(timer);
    let speedValue;
  const speed = window.localStorage.getItem('speedValue')
  if(speed=== null){
     speedValue = 200;
  }else{
      speedValue = speed
  }
  const that = this; // 把this暂存到that
    if(n===0){
                timer = window.setInterval(function () { // 开始一个定时器,让蛇不断的动起来
                    that.snake.move();
                    let dead = that.snake.isDead(); // 检测是否死亡
                    if (dead) {
                        clearInterval(timer);
                        n++;
                    };
                    let eat = that.snake.isEat(that.food);
                    if (eat) {
                        that.food.randomLocation();
                        that.snake.insertNewHead();
                    }
                }, speedValue);
            }
            $(document).keydown(function (e) {

                let code = e.keyCode;
                if(code === 13) {
                    timer1 = window.setInterval(function () { // 开始一个定时器,让蛇不断的动起来
                        that.snake.move();
                        let dead1 = that.snake.isDead();
                        if (dead1) {
                            clearInterval(timer1);
                            $('.dead').show(500); // 显示提示信息
                        }
                        let eat = that.snake.isEat(that.food);
                        if (eat) {
                            that.food.randomLocation();
                            that.snake.insertNewHead();
                        }
                    }, speedValue);
                }
        });


  // 键盘可以控制蛇移动的方向
  $(document).keydown(function (e) {
    let code = e.keyCode; // 键码值    37  38  39 40
    if (code === 37) { // 判断按键
      that.snake.direction = 'left';
    } else if (code === 38) {
      that.snake.direction = 'top'
    } else if (code === 39) {
      that.snake.direction = 'right'
    } else if (code === 40) {
      that.snake.direction = 'bottom'
    };
  });
};

Game.prototype.stop = function () {
  window.clearInterval(timer);
  window.clearInterval(timer1);
};

Game.prototype.reStart = function () {
    const userName = document.getElementById("input").value;
    if(userName == ""){
        alert("用户昵称不能为空，请重输！")
    }else{
        let rank = [];
        let score = {};
        let flag = 0;
        score={userName:userName,maxScore:num};
        if(window.localStorage.getItem("rank")==="null"||window.localStorage.getItem("rank")==null){
            rank.push(score);
            flag++;
        }else {
            flag = 0;
            rank = JSON.parse(window.localStorage.getItem("rank"));
            for(let n = 0;n<rank.length;n++){
                if(rank[n].userName === userName){
                    if(rank[n].maxScore>num){
                        rank[n].maxScore = rank[n].maxScore;
                    }else{
                        rank[n].maxScore = num
                    }
                    flag++;
                }
            }
        }

        if(flag === 0){
            rank.push(score);
        }
        window.localStorage.setItem('rank',JSON.stringify(rank))
        location.reload();
    }
    };