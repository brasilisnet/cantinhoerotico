//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilZ9B5p42-LnIbvnTvVLoP025UIOhuvy8VlKqCKLn3N2c4539v2nMwXxiT_TlPOoBbjukoKjxwpKi2u0GEyzo4FCNyW3dGEjmXT8wY8q-bwTqAGExXoNILAYNorL_2ZYNMkus2MzTq-6HrhCnzMjfbysN-XtRp7LomtWX65Kc4ZzK_cH55dVlyTvi4jBI/s1024/homemade-baes-061.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8ITMMgSLx4gbLOfwuL6dAbwp4lgIiw9qVk1Lf2fXzYvd9onElnS3eLa3WtKDMY34E-R58B9wr7s7ObOYO699dAI991El889GL0pfFuhaInkutfZgJb8B6BW16V94lwuqB86jp9qIqrpWdOETmVGDT06mBahQD383pZLPeWrZV9-6CbfE2PvToWRzFC3Y/s1024/homemade-baes-062.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizwv6jGnBamLJUJgFwIPYNLHYleud8qYXquRPNFQgybxHxjKpzed6dZaNue99UZ7xK9T8WeKa-q3v5v13re-lFyudg0m60GDZGmbD2xDN6Yf2JvkSoiEj7ZCsbUqEqVpaHhNqonuK6S5gyGRRdjE08nD4r96HWwgnCm7GMtG0HLLoDcTG7F4S3mb8LReQ/s1024/homemade-baes-063.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
