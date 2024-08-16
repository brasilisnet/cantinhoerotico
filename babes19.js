//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_Fv2sCFdr-XHUEQI5nujWsOcGRRSFviVnC83ncdcWwZDc5DMJ25XIX6J1Z6cIFtvR9D1zic_H49mrcbfM03U1OskgdhtiWzYYHWAKLJqoJFk1CBop9kny7yWnPHzcedRvH724LETWRtjZqpo1_5X6YBTzskzDatotJVwJ5R_beVilaIZmYObrdWAsH8g/s1024/homemade-baes-055.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrVQGB-KgXh0kbdv673LE1nfhvr681ke5MLp5vAxa3ndf4eW3xiI_-pkHJ-gC5YQP_fKpGtO-bKS_hAf4NmUd9KXa7G1uKHcUAS4cYh6KtUGslWnOHnw73nEZ7tdH4REg3RGfKFfh1bHABlLvufLZPKCqW_d1w5jdoW2h_oVl_lUsifjsWVpuk2xXxeK4/s1024/homemade-baes-056.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjseJopUU9qRcveDdBXbZAQZ9-RD7a-CuYIVRR7902-kaxFU58EhEA_OOKsRy6psfAPpDSTbnlw3Bke9glsV4kNJrATHI61a7AIsajZUh4o1QuItESZJfT0b38kmZsI4mwFQSMhYXBLLEkfY6TVmad-L2bG1EaXz3r4fIKZnMNIhn8IRGZ6VpSIh7TZUec/s1024/homemade-baes-057.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
