//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibfYLOM0grSXPyXc5Rt_7jMBM1UF9Dn55cx8Hm18VgpUsz_Qgj2lok0lwauuSINr2f50MTKKPrypIVwcjZJrXzV_-D_eZ76hb3AAX2FbGHsRSLRWxIKVidu6ljDhlIQSdUyPmsLrfNf0Kxh6lIdae7yOQtmWqrgWlL8u7dF3Zp1jNdLPLTMP01K-DZ2ng/s1024/homemade-baes-073.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQuxUoy27pWygma0kWPBaQYOHKD2dalNbFJMq8sG0uOGYX9OiN1MjWzvu_UfaghfejkgxkkZfTP2rRioHQUPMQD6Ovc2Gow8vJ437-sKkPXxUItaN5hl7BOpViDMS2AFFkD8k3Xm8zUHBZS4KsoyofARTDBxzcV5S4iaM3jddbdybaHqnVLHSWa-fEY-8/s1024/homemade-baes-074.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI6I3H3xg8EupteHhx-eTldZ1HNSw4KrvnqQYrSZvKuR7d4GunB7qvhlJrMnpT47Pz-KCfnOG1KY7M4uBATfnF-SdMh-s5_x4hiXQcRZZg-m0POPD55KCuWM4VY1z60fqu5t-xlPNSwN4j0mc-hRWJlGUjix-p0Iyu_2JFlJe56JK8_RV4p5CiCdrlxLI/s1024/homemade-baes-075.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
