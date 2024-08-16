//Javascript Created by Computerhope https://www.computerhope.com/
//store the quotations in arrays
var images = [],
index = 0;
images[0] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfnrmjUEOaFweFtwhyJ2MyjojO_xaMfhfx-tS7lvG_2v2dEK_IM-Kv0xDgZXE1487CFUV3PX4gPpggHNUu_zOYNQ6UY7M9PowRUWrMzwnPF_X-ORq7V8Noo0tnwisLxmhL5iq2wMzL3GhMLcylFgJmHkrcVCAoQlmn-BtiIogYL_ofWu0-pLbqkOtnwU4/s1024/homemade-baes-049.jpg' width='100%' height='auto'></a>";
images[1] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgblpwS1HiPQLMHTLHZLN9cqw75UA3d78K1Fd3V8664CxpfLtQ3n2pRY7oTcKy6UP41vQEG7QwuWTaEdZyTO7Fhk2IxmIT86f-Hk2U7YN7cl2a5C45DXV7wJ3OefsrRnpIWUtupKkB0FrjOdflfK3jeh6lLIAakixJnKnGyvKGvfCpM4JIIxo12DklYkAk/s1024/homemade-baes-050.jpg' width='100%' height='auto'></a>";
images[2] = "<a target='_blank' href='https://shope.ee/3VDNHWRl8C'><img class='top'  border='0' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgA10Nxx50XyPup1e4vUzwC7GN7qyxKY2tOnAwpvczd8ROXybQz7s6C9oruhUdDMUhsUX4KtdD7UZuPfRvuKqU6S3dYOoS7VcvpN6CnRUnxuQ3PreRw7opxI6bmRd8wemy4jK1W0-_aRwkHTKW5W1g7fWmaHT4MV0zQwaHQK-L399nEjYXArDdWs-tBhDs/s1024/homemade-baes-051.jpg' width='100%' height='auto'></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);
//done
