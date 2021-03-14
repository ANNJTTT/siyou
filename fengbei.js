
var obj = JSON.parse($response.body);
obj.response.user.is_vip = "1";
obj.response.user.vip_expired = "1";
$done({body: JSON.stringify(obj)});