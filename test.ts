
// let strValue : string = "this is string";
// let bolValue : boolean = true;
// let anyValue : any = 12;
// let numbArry: number[] = [1,2,3];
// let strArray: string[] = ["this", "is", "ts"];

// let numValue;

// numValue = 12;

// (numValue as string).

interface MyFuncValue{
    fName:string, 
    lName:string,
    age:number
}

function myFunc (dataValue:MyFuncValue){
    console.log(`${dataValue.fName}  ${dataValue.lName} and my age is ${dataValue.age}`)
    // console.log(dataValue.fName + dataValue.lName + dataValue.age ) 
}

myFunc({
    fName:"Sandeep",
    lName: 'Gupta',
    age:29
})

 

var abc = function(data){
    console.log(data)
}

abc("this is Function")

var abcd  = (d) => console.log(d)

abcd("this is arrow function")


// class MyFirstClass{
//     private fName:string;
//     private  lName:string;
//    private age:number;

//     constructor(fNames:string, lName:string, age?:number){
//         this.fName = fNames;
//         this.lName= lName;
//         this.age = age;
//     }

//     getFullName(){
//         console.log(this.fName + " " + this.lName + " " + this.age)
//     }
// }

// var skg = new MyFirstClass("Deepak", "Bhandari");
// skg.getFullName()




// var hb = new MyFirstClass ("harish","Bhandari", 35);
// hb.getFullName();



class MyFirstClass{
  

    constructor(public fNames:string, private lName:string, private age?:number){
        
    }

    getFullName(){
        console.log(this.fNames + " " + this.lName + " " + this.age)
    }
}

var skg = new MyFirstClass("Deepak", "Bhandari");
skg.getFullName()



var hb = new MyFirstClass ("harish","Bhandari", 35);
hb.getFullName();