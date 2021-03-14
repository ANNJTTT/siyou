var obj = JSON.parse($response.body);
obj.data.marketPrice = 0;
obj.data.sellingPrice = 0;
$done({body: JSON.stringify(obj)});
