//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvGqmL15Ad6x1Q16wZ6uSaV82RJP8R_wQuxznRRbK7qSZkXaAGghXUm8t8eX6zcQVKkkRUTZ4CZBQwNk_gA4z8tvK70nOp1oh9x57cvfjvjAIPUVQTY23mpdbk2cUkn7HxThbSMkVf2YE_7aDuwG2XIJ_9j8HBrObwM1779xi54ZsJs1VKJEkAl9E430A/s1024/homemade-baes-070.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHF5M1FEQLeobW7iprH7goJYwFNi22gCw3tk2FAmIQPYue3m8UGHe3e21_1s-kG5pGRsuxzWs1wfK3LDRDFxQnFDMXkdNR8ze74BR3XTpmBsXO_yBP8OagE1A5wxC2XWlNhZNxSVNUBY75nn9k4XUYbxDSuQ7g1JeIELFMRehgqdh8r2aOg0dJvN_amUg/s1024/homemade-baes-071.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-jRxq61tVmp4soIQz3nGbTg0DMUiC8pZ-MfYcGfnySstdijKrl0lj5VbZLYarlpAz90N7KTy99w4NJMb-Lh-pwvrq82FBllt6WZrnWNZ_dZfTWhI0hgHQkmOuP0E1DS2gBx-9Ru3YCE4iZjTcRVoLjCIQBNsVZJv9Md5CQ7I_Rzfs_xm06fbkXugSnko/s1024/homemade-baes-072.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
