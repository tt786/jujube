//加载express模块
const express = require('express');
//加载CORS模块
const cors = require('cors');
//加载Mysql模块
const mysql = require('mysql');
//创建express对象

// 加载body-parser模块
const bodyParser = require('body-parser');
const app = express();

//使用CORS模块
app.use(cors({
    origin:['http://127.0.0.1:8080','http://localhost:8080']
}));
//将bodyParser作为Server的中间件
app.use(bodyParser.urlencoded({
    extended: false
  }));
//创建MySQL连接池
const pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:'root',
    password:'',
    database:'jujube',
    charset:'utf8',
    connectionLimit:20
});

//指定监听端口
app.listen(3000,()=>{
    console.log('server is  running');
})

app.post('/login',(req,res)=>{
    let sql = 'select * from jj_user ';
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        if(results.length !== 0){
            res.send({message:"登录成功",code:1})
        }else{
            res.send({message:"登录失败",code:0})
        }
    })
})

 app.post("/register",(req,res)=>{
     let phone= req.body.username;
     let upwd = req.body.password;
     //以当前用户名为条件进行查找，如果没有找到，插入用户表，需要讲密码md5
     let sql = "select phone,upwd from jj_user where phone=?";
     pool.query(sql,[phone],(err,results)=>{
         if(err)throw err;
         if(results.length == 0){
             sql = "insert into jj_user(phone,upwd) values(?,MD5(?))";
             //根据用户信息写入用户表（京密码编程md5
            pool.query(sql,[phone,upwd],(err,results)=>{
                if(err)throw err;
                res.send({message:"注册成功",code:1});
            })
        }else{
            res.send({message:"用户名已存在",code: 0});
        }
    })
})
app.get("/mintitle",(req,res)=>{
    let sql = "select mt_id,mt_name from jj_mintitle";
    pool.query(sql,(err,results)=>{
        if (err) throw err;
        res.send(results);
        // console.log(results);
    })
})
app.get("/mindetail",(req,res)=>{
    var pid = req.query.id == "" ? 1 :req.query.id;
    let sql = "select de_id,de_name,de_detail from jj_detail where de_id = ?";
    pool.query(sql,[pid],(err,results)=>{
        // console.log(results)
        if(err) throw err;
        res.send(results);
    })
});

app.get("/rule",(req,res)=>{
    let sql = "select co_id,co_name,co_description,co_img from jj_com";
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        res.send(results);
        // console.log(results);
    })
})

app.get("/detail",(req,res)=>{
    let id = req.query.id;//query获取？的形态
    // console.log(id);
    let sql = "select co_id,co_name,co_img,co_price1,co_price2 from jj_com where co_id=?";
    pool.query(sql,[id],(err,results)=>{
        if(err) throw err;
        res.send(results);
    })

})

app.get("/center",(req,res)=>{
    let sql = "select * from jj_personal";
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        res.send(results);
    })
})  
app.get("/navName",(req,res)=>{
    let sql = "select * from family";
    pool.query(sql,(err,results)=>{
        if(err)throw err;
        res.send(results);
    })
})
app.get("/knowladge",(req,res)=>{
    //1.接受脚手架参数
    var kn_id = req.query.id == "" ? 1 :req.query.id;
    var sql = "select kn_id,kn_content1 from jj_knowledge where kn_id=?";
    pool.query(sql,[kn_id],(err,results)=>{
        res.send(results);
        // console.log(results)
    })
})
app.get("/news",(req,res)=>{
    console.log(1)
    var sql = "select ne_id,ne_title,ne_smalltitle from jj_news";
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        // console.log(results)
        res.send(results);
    })
})