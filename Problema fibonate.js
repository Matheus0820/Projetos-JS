var td, t, t1=0, t2=1;
td = parseInt(prompt(''));
if (td==1) console.log(t1);
if (td>2) { console.log('%d %d', t1, t2);
var i = 3;
while (i <= td) { 
t = t2 + t1; 
console.log('%d', t);
t1 = t2;
t2 = t; 
i++; 
}
}
