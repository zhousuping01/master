// 食物-构造函数
function Food() {
  this.x = 0; // 食物对象的横向位置
  this.y = 0; // 食物对象的纵向位置
  this.element = $('<div class="food"></div>').appendTo('#map');
};
const getRandomColor = function(){
    setTimeout(function(){
        $(".food")[0].style.backgroundColor = '#'+('00000'+ (Math.random()*0x1000000<<0).toString(16)).substr(-6);
    }, 3);

}
// 食物随机位置功能
Food.prototype.randomLocation = function () {
  this.x = Math.floor(Math.random() * ($('#map').width() / 14)) * 14; // 设置食物对象的位置
  this.y = Math.floor(Math.random() * $('#map').height() / 14) * 14;
  this.element.css({ // 设置食物对应的元素的样式
    left: this.x,
    top: this.y
  })
    getRandomColor()
}


