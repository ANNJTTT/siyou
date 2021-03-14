//这是路径，为每个路径匹配独立的规则
//key("键1@键2@键3……", [值1, 值2, 值3……])

//JavaScript中的正则表达式
//var 变量 = /要匹配的内容支持正则如\d+或.+等/g 这是以字面量的方式定义了一个正则表达式，可选标志g代表全局匹配，还有标志i代表不区分大小写，另一个m表示多行模式，先知道一下就行。

//re('ipsubexp=@ipsub=\\d', 'ipsubexp=1646033923@ipsub=1')
 // 以设计让用户录入re('匹配1@匹配2@匹配3……', '替1@替2@替3……')，匹配中如果用到\d、\w等正则就以双斜杠出现。只替换一个则re('匹配1', '替1')

// 匹配里若需用到正则的反斜杠语句像\d+、\w+时请用双反斜杆\\d+、\\w+


  re('is_vip":0@vip_expire":"0@remain_download":"', 'is_vip":1@vip_expire":"4834460678@remain_download":"88')











//以下不动
function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
}




