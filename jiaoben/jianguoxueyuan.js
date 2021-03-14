var obj = JSON.parse($response.body);
obj.data=[{"id":0,"squirrelCourseId":0,"squirrelCourse":{"price":0,"id":0},"role":2}];
$done({body: JSON.stringify(obj)});
