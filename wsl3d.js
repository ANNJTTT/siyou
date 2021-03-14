if ($request.url.indexOf("/vesal-jiepao-prod//v1/app/struct/homeRecommendation") != -1) {
  re('"is_charge":"yes"', '"is_charge":"no"')
}
if ($request.url.indexOf("/json/home/v360/IosGetHomeStruct.json") != -1) {
  re('"is_charge": "yes"', '"is_charge": "no"')
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
