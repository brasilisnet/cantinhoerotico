//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwbqpmyT0ujcOAhhBMs2g_4TpPf3Vs9iaSlrjuL2Kk06v1A439K6k_buX6fEyL7soEgHTvWD3b7zQDbzgyJjjQZm1zoA6AjvQ0fCS2zSHZ2y-TFvNdNMMFu_LK4bsPXozVa17tG0YoWtaHoqRsa3I6eVyrGQIK1Z9-8tmlFzNfWRzBAHCUwe2lLlF4bwQ/s1024/homemade-baes-058.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiZ_sfxVnfduk6pQs8w3IqaT37Mb0fdC03zVUzuUWsBfobjZWaNH7QsSqcknEvmc82Sa1pSYC-iGxPC_BuFT_ya2WRTSn-IERuhbk1g6SjpuWeV-i7ugcksSQUSDRZ-nEpqpY4eCnaZxndF3OK5wAm0B3IPbBjqErJHt5l7_JlcPRgyj33fzZTmpfbdUfE/s200/homemade-baes-059.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv195relsqslQbW6eK3kz71XyVE7x487NcZQLwH0U2gpegKGqnsNEBugqbkPpWgDRpyWD0zAbXU_zq73KgGSk_6Nutkri2oJJ_4HHabo5hnA7IRvpSAV3QFG4d_FTxDBba0uO_rG-MiKGL69cRPwmnM9FBexp8CnNddyHnuGFoc7Wh6FE_zvNnIlFeY_4/s1024/homemade-baes-060.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
