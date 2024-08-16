//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhaX69omsMAxKusk0gtbsH4of-I490zSov_pPAgF28VklS2iTqwHHOr9vRtFQGgJ_Q1QWmSnEzRy1azrMoLJlGFKltSpqiQfrCiNLkJwvAj_zkT-d3BgCAozkUxhVnUt2SxR4nJC8CapM1IRdU-AfnepBX3Lj0WHM7iyn1oNivsrauDdxzjNOvZxtPSkCY/s1024/homemade-baes-067.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj23qHA1VwqLn1yCGL_A95s5i8FzRMbnzNeYGIvJCQaEtIFtCbYrjGA3JnwiRVXHD0NaDIpE8mIbMyYAkfTEyUopMsY80Z4MFYMs_AKsHLSZGBLWZpUJsazCsPfhEK0s8Wr4lOzYrmG8vuP8oPxUWrj1CxmELMXxXcOrreJS-X-ku1q43KzTCUmqpJjp8w/s1024/homemade-baes-068.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-MAX1fiu_4aBk12aRzEXCtLr2ZSetSW8kZiOKOosrY1EW9XfhMgkw3xoExwMoV0-ZDk09fZmKnAU_Tm8URsM_a_GIkO8gCBG4JtehmKz_865cvU_bZP5kW8KBGaub3n_WYi8kT2wTen6uc3YWl3MR3ilEcYyBd6aLUNwD1hztUvMlU5iqGFuWxq-wLD8/s1024/homemade-baes-069.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
