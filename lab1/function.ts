function testFunc (str:string, numb:number = 5):void{
    console.log(`String: ${str}`);
    console.log(`Number: ${numb}`);
}

testFunc("Wow", 10);
testFunc("hello");