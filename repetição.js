1 ) 
1.1 : PSEUDOCÓDIGO
iniciar;
ler n, r;[
r = 0
enquanto ( r < n) 
	faça r++;
	exiba (r);
fim-enquanto;

1.2 : ALGORITMO JAVASCRIPT
var N, r;
r = 0;
scanf("%d", "N");
while (r < N) {
   r += 1;
   console.log(r);
}

2 )
2.1 : PSEUDOCÓDIGO 
iniciar;
ler N, c;
r = 0;
enqunto (r  <  N*N) {
	exiba (c*N\n);
} 
fim-enquanto;

2.2 : ALGORITIMO JAVASCRIPT
var n, linha = '', s, i;

s = prompt('Digte um simbolo:');

n = parseInt(prompt('Digte o número de vezes que o simbolo apareça:'));

i = n;
for ( let j = n; j > 0; j--) {

	linha += s + '\t'
 
}

while (i >= 1) {

	console.log (linha);
	i--;

}

i = n;















