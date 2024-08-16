//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMiKony4uApa8sLPlw7lRgB3GaTnIXFyJOWh9jbn_BRmWhIJ2GmyfgSnESrolw0QmQsc77sVC6SmPf-zV9Voz6_fanGW0iR0Yg-VjR1pQ8JN5ybEjjbdm7Nw8E9UjdA1PJrHQlVM-fr4COJDIx66uZlcyreMIwEHQQrxXXSxIQQQmO0Tkl-wPOmMCJVRU/s1024/homemade-baes-094.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4LwCwMiZVvBf9whwe0TL5zTLi1W341kox-GBVoUY3KTvp-Vyn8dv6YjRg1M2r3vdZLss77tbObrSo63xySf6HxlgmaiLZdxBzw9sht-r_ipitwe-WcKTGtKm08Ps-1-op9GvzcgfsUSXc0Nur4MtP8Xv_biKeGdL5LBneRUjnmHloNzGvXFPBJs8QR2k/s1024/homemade-baes-095.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVnXSoXdbrMRBP33HqcufmPYZuWwP-ZYA5NzrXMY7WHdcWz8LsjP-FNl-yVaehcWL_dxyl-RNmcQ3EL0qxlBT1IYyoFJf47RVkUEFkUy47CoeU20OTRkgqc1jAREryMEYKGPM8z_ddYoFpKWsjqC5b26cRJlgV5T2H7PZFtIefa_S5y3bXXGRgs1hyhKM/s1024/homemade-baes-096.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
