var docHeight=$(document).height();$(".nav").css("height",docHeight),touch.on(".aList","tap",function(){return $(".nav").attr("style")?$(".nav").removeAttr("style"):$(".nav").css("transform","translate(50vw)"),!1}),touch.on(".top","tap",function(){$(".nav").removeAttr("style")}),touch.on(".bHome","tap",function(){window.location.href="../index.html"}),$(".inp").focus(function(){$(this).addClass("shadow")}),$(".inp").blur(function(){$(this).removeClass("shadow")}),touch.on("#check","tap",function(){0==$("#check").prop("checked")?($("#btn").prop("disabled",!0),$("#btn").css({opacity:.8})):($("#btn").prop("disabled",!1),$("#btn").css({opacity:1}),touch.on("#btn","tap",function(){var t=$("#text").val(),a=$("#pwd").val(),o=$("#sPwd").val(),n=/^\w{6,15}$/;""==o||""==t||""==a?alert("请输入完整信息！"):n.test(t)?n.test(a)?o!=a?(alert("两次密码不一致，请重新输入！"),$("#sPwd").val("")):$.ajax({url:"http://datainfo.duapp.com/shopdata/userinfo.php",data:{status:"register",userID:t,password:a},success:function(t){0==t?(alert("用户名已存在！"),$("#text").val("")):1==t?(alert("恭喜您注册已成功！"),window.location.href="login.html"):2==t&&alert("不好意思，出错了...")},error:function(t){console.log(t)}}):(alert("您输入的密码不符合要求，请重新输入！"),$("#pwd").val("")):(alert("用户名不符合要求，请重新输入！"),$("#text").val(""))}))});