console.log("Hello, World!");
console.log(3/2);
let x=10;
console.log(x);

x=10;
y=5;
sum=x+y;
console.log(sum);

a=5;
b=6;
c=7;
if(a>b && a>c)
{
    console.log(a);
}
else if(b>a && b>c)
{
    console.log(b);
}
else
{
    console.log(c);
}
fruitType="Cherries";
switch (fruitType) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruitType}.`);
}
console.log("Is there anything else you'd like?");


for(i=1;i<5;i++)
{
    console.log(i);
}