<template>
        <div class="header">
                <div class="header-first">
                    <img id="header-image" src="../assets/jBYLjAL8pa.png">
                    <div class="header-title">
                        <p class="header-title1">陕西大荔冬枣惠农网</p>
                        <p class="header-title2">shanxi dali winter dates cnhnb</p>
                    </div> 
                </div>
                <div class="header-second">
                    <ul>
                        <li>
                            <a href="/#/login">登录</a>
                        </li>
                        <li>
                            <a href="/#/register">注册</a>
                        </li>
                        <li>
                            <img src="../assets/img/index/wechat.png" alt="">
                        </li>
                        <li>
                            <img src="../assets/img/index/sinablog.png" alt="">
                        </li>
                    </ul>
                </div>
        </div>
</template>
<style >
 .header{
        border: 1px solid #afabab;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        background-color: #404040;
        color: #fff;
    }
    .header-first{ 
        margin-left: 191px;
        width: 360px;
        display: flex;
        justify-content: space-between;
    }
    .header-title1{
        margin-top: 20px;
        margin-bottom: 0;
        font-family: "Microsoft YaHei";
        font-size: 27px;
    }
    .header-title2{
        margin-top: 5px;
        padding-left: 6px;
        font-family: 'Courier New';
        font-size: 13px;
    }
    #header-image{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid #000;
    }
    #header-image:hover{
        transform:scale(1.1);
    }
    .header-second{
        margin: 20px 191px 30px 0px;
    }
    .header-second1{
        color: #ecf6ff;

    }
   .header-second>ul{
       list-style: none;
   }
   li{
           float:left;
       margin-right: 10px;
   }
   li>a{
       color: #fff;
         text-decoration: none;
   }
</style>