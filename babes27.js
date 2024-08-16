//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8-bSdb6oXmgU7507JWZf8OaWEPsq8zH87A6RQutDETZXMto66HcYmnAbB8uxSKlIbBzKJw6yG24FllUfCrmSEHnFiCzvx8jJs5UNSkKV5NfwMPMSRWl1HAJ1Vla1sMesa7QVdU8qS1sfh1c74QshBfEcYLc8ep2CkZyiAlyfZd0Lk4uZDDCjNJbEt-g8/s1024/homemade-baes-079.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2iIh49gRd8PFhyphenhyphenrmbYbcfazuCpC4oO_GH1wg_kA_5okniHSCBEKp003b1KqmmuTEHDZIb16HTMa-j3w57bcivriCroUgRC10I1AKnnNh2xDS0bjttOJHJf5iRxPO73ygRz0LS7CaBihnwnNlr52huiN3KEFcck3_TTXQtXykRoxIZu9EYMH3kr3L-b5U/s1024/homemade-baes-080.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrwmfEGslTOiefY4AOZjIu8hprXO296fbEe_X_9kzWm5CUd5_XCxOlKqr_S5aycZH9gab5RFvQ0CxJo450T4se2PIecyRtLFcLudz4arjfGz4fu6R0PvoFMn74EEdhwow32nfaoduk_NZjyoAdVNboUeNEqdWZ9zJcpf3IeRKoj4c1RKl-aUdOdq3M6ko/s1024/homemade-baes-081.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
