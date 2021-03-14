
if ($request.url.indexOf("/nowapi.navoinfo.cn/my_vip") != -1) {
  re('"vip_type":""@"vip_forever":"false"', '"vip_type":"1"@"vip_forever":"true"')
}


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