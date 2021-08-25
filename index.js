var express        = require("express"); //웹서버사용
var mongoose       = require("mongoose");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");
var app = express();
var fs = require('fs'); // 파일 로드 사용
var http = require('http').Server(app);
var io = require('socket.io')(http);
var count = 0;

// DB setting
//mongoose.connect(process.env.MONGO_DB, {useNewUrlParser:true});
mongoose.connect('mongodb://localhost:27017/local' || process.env.MONGO_DB);

var db = mongoose.connection;
db.once("open", function(){
  console.log("DB connected");
});
db.on("error", function(err){
  console.log("DB ERROR : ", err);
});

// Other settings
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// Routes
app.use("/", require("./routes/home"));
app.use("/posts", require("./routes/posts"));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/about.ejs');
});


// Port setting
var port = 3000
http.listen(port, function(){
  console.log("server on! http://localhost:"+port);
});

io.on('connection', function(socket){
  console.log('user connected: ', socket.id);
  var name = "user" + count++;
  io.to(socket.id).emit('change name',name);

  socket.on('disconnect', function(){
    console.log('user disconnected: ', socket.id);
  });

  socket.on('send message', function(name,text){
    var msg = name + ' : ' + text;
    console.log(msg);
    io.emit('receive message', msg);
  });
});
