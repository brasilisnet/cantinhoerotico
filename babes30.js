//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBmyIDz9OfQdxZxmN_I1oP18AjwkncjZ_eudodtw2dbLZ4779yNwSgXN-aBcrwKH7TVds8HTQm9mKeAi6q2I6A4bZ4TWm1D_FQRKvc8FqBmpVLnYlbWVAo8BGNsBJAprnkFaW8MC5QV2UxzeJ1uISNEk7KPyf0wq4H1By1oaRmbc7sBYAnIyuILUpeT4Y/s1024/homemade-baes-088.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjonS5iK0670p7Hoyve1487zn8vk3SQ-s5TaXTKJuF16QX1ceF0MCgxF3-Uz5zPZMnAkK56dti1JWOTb8kwLQ1LbAiaXD5-EJK0vda9wbieGCjuQQCxvxgaykHdO5nkM2D57fUlub8FXFTOlDTYBG-Xj6MS4vdLx-e773MdOjpuDUq1MAkcVwieeA8SWe8/s1024/homemade-baes-089.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvDj2w05qRHxq4v4ckgOs7ho960wsytzxTGPmYwSmqRb6htBhxFPBuKfUysn8YFnEGwUT-RCXpPpY9sFd284-dXJuQ4XffLTzAEDRnScTKWdCaKQPspPsmJLdJHjDlx0PVKebnohBzz-Sjbx1dPWYsiIDWE2SLb7rfrTK6tbqVsqR2EGRHZVBxf1IwZdQ/s1024/homemade-baes-090.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
