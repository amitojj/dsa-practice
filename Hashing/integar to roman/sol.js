var intToRoman = function (num) {
    const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
    const int = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const n= int.length
    let res="";
    for( let i=0; i<n;i++){
        while(num>= int[i]){
            res +=roman[i];
            num -= int[i];
        }
    }
    return res;
};

console.log(intToRoman(2834));