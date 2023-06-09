var a, b, c; 
scanf("%d%d%d", "a", "b", "c");

if(a < b || b < c || c < 501 ) {
   
if((b - a) < (c - b)) printf ("1 \n");
else if ((b - a) == (c - b)) printf ("0 \n");
else printf ("-1\n");

}