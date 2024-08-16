//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj5uVbbtZB_UMCkqoEY9FUmRk_0nNITyHbQJboSGyb0qW9he0N90tVhbomuwNtGAmOtFbdToD_wIpFYvPIB88BGrVEffFDs7b1JS084M1aJb-Ff1sGrm_Pr9S7XH27JSH__tG9jlShG1djv9Wn8cjw_wlUzkRr7LiE6e6I5E_eeZg8c2G4I40Gakx5-3cc/s1024/homemade-baes-037.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEio_lCDkC1eVTFhF-qWaxTwo9QZsBpLDHcnL9jBtkCQ-r1X6603x65nOL2QeNqN-El5yMlEPSnff50cy5_1oHwATFMamBIcS96aSBP8n-e5DZpJlndJ3wE_8iz-rk7AFBSqF0kLbfNLC97SVrFl6Fe6Usj31BMv2z8vDv495CPejloLyldZ3Ua4eGqZa6w/s1024/homemade-baes-038.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlG5XpLofpzrHtBGVR4ssYo0lprfJwUQP9pixtEGK3nSbgXvNirfyrIPCrZMV7nmY4kGWZ3sS2uWVl0y8DEh8dX4BWmpuqD5O-ggL_rJmvQw6XByAP1fRxsPZhQbgQb-h810BZKbGfdRbml8yd8354IthvdFYh9FtFeFwNWQHkeRkCBbltwlpnm7SbivY/s1024/homemade-baes-039.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
