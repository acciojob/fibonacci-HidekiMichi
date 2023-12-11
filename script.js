function fibonacci(num) {
// your code here
	if(num==1 || num==0){
		return 0;
	}
	if(num==2){
		return 1;
	}
	let a=0;
	let b=1;
	for(let c=3;c<=num;c++){
		let sum=a+b;
		a=b;
		b=sum;
	}
	return b;
}

module.exports = fibonacci;
