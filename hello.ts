const myName: string = "Lucas Castillo Vásquez";
const myLocation: string = "Costa Rica";
const hustles: string[] = ["AI Agency", "YouTube", "eCommerce (Dropshipping)"];

console.log(`Hello World! I am ${myName} from ${myLocation}.`);
console.log("My next business projects for this semester are:");
hustles.forEach(h => 
    console.log(`- ${h}`));

