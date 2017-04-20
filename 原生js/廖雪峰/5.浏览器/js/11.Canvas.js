//绘制笑脸
var canvas = document.getElementById('test-canvas');
var ctx = canvas.getContext('2d');

ctx.clearRect(0, 0, 200, 200); // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
ctx.fillStyle = '#dddddd'; // 设置颜色
ctx.fillRect(10, 10, 130, 130); // 把(10,10)位置大小为130x130的矩形涂色
// 利用Path绘制复杂路径:
var path = new Path2D();
path.arc(75, 75, 50, 0, Math.PI * 2, true);
path.moveTo(110, 75);
path.arc(75, 75, 35, 0, Math.PI, false);
path.moveTo(65, 65);
path.arc(60, 65, 5, 0, Math.PI * 2, true);
path.moveTo(95, 65);
path.arc(90, 65, 5, 0, Math.PI * 2, true);
ctx.strokeStyle = '#0000ff';
ctx.stroke(path);


//绘制文字
var canvas = document.getElementById('test-text-canvas'),
    ctx = canvas.getContext('2d');
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlur = 2;
ctx.shadowColor = '#666666';
ctx.font = '24px Arial';
ctx.fillStyle = '#333333';
ctx.fillText('带阴影的文字', 20, 40);

//练习

//请根据从163获取的JSON数据绘制最近30个交易日的K线图，数据已处理为包含一组对象的数组：

window.loadStockData = function(r) {
    var
        NUMS = 30,
        data = r.data;
    if (data.length > NUMS) {
        data = data.slice(data.length - NUMS);
    }
    data = data.map(function(x) {
        return {
            date: x[0],
            open: x[1],
            close: x[2],
            high: x[3],
            low: x[4],
            vol: x[5],
            change: x[6]
        };
    });
    window.drawStock(data);
}

window.drawStock = function(data) {
    canvas = document.getElementById('stock-canvas'),
        width = canvas.width,
        height = canvas.height,
        ctx = canvas.getContext('2d');
    console.log(JSON.stringify(data[0])); // {"date":"20150602","open":4844.7,"close":4910.53,"high":4911.57,"low":4797.55,"vol":62374809900,"change":1.69}
    ctx.clearRect(0, 0, width, height);
    ctx.fillText('Test Canvas', 10, 10);

}
var js = document.createElement('script');
js.src = 'http://img1.money.126.net/data/hs/kline/day/history/2015/0000001.json?callback=loadStockData&t=' + Date.now();
document.getElementsByTagName('head')[0].appendChild(js);