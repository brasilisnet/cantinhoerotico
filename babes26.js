//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjosJ_qT_51izHTAUZP9nOLHVok43yvV1aHt67s6aFCSo1BBgY4kkPchHNPEN_MKGRXUfzrXXKU2TbxKVOvWM7Ro8VXCXEGwzd4rTTexmCKOZY5DIR0rSKK1FeAE-01ZRzNF6VW3SYaJemRFpAh7LkshFte8rWw0qfuI4cXyRRgbRT0mSn5r76m1fckhIM/s1024/homemade-baes-076.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimSpCLkQ6EY7c54MU1LEUX9-cCBZF-qUhSep1QqBupcSwU6ShLKUtKpbadD7XWuh_StthZ2nalloUwi48tw6EeSkxOUDsx_tyV6NM_V6rTYSjvL-WZfbjEpObpNswvh5GjE29GNCfSU-7x3n8fjx6bf-Zl7W9IFA0TRSH-Y05jHDb2tL_4iwSRHGm4NZc/s1024/homemade-baes-077.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhP-xE3IWFH2HgvWmrjLe7GTIYqYTZufjYSk3y6bOSHh5QTXVNTq6cShpVJT6-ZY-aH2ks4WWgVq_Uqx_MRMvU6NQSF6oV_CSuraaoXk7PZ64NvIJx9ki2ecAIXt-4f5Nbj_y0jZdD7ZNUEALYmf1igC-85BU68-qDOxuoCXNhoRRo89F1mwP_OM_hzeEk/s1024/homemade-baes-078.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
