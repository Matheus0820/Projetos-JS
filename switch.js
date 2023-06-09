var a, x, b, i;
a = parseInt(prompt('a = '));
x = prompt('operador = ');
b = parseInt(prompt('b = '));

switch (x) {
	case '+': 
		console.log( a + b);
		break; 
	case '-': 
		console.log(a - b);
		break;
	case '*':
		console.log(a * b);
		break;
	default:
		console.log('Essa operação não pode ser feita');
}