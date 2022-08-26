/* ১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
 */

const thisIsConstVariable = 'hello from CONST. const not reassinable';
let thisIsLet = 'hello from LET. Mejor diffarent is let reassinable and const not reassainable';
/* 
২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও।  */
const obj = {
    name: "ismail",
    fatherName: 'Abul Chukani',
    MotherName: 'Asma'
}

const templateString = `${thisIsConstVariable} My Name Is:${obj.name} My Mother Name Is:${obj.MotherName}`
// console.log(templateString)


// ৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
const oneParameter = inp1 => inp1 / 5;
// console.log(oneParameter(5))


// ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো 
const twoParameterOneLine = (inp1, inp2) => (inp1 + 1) * (inp2 + 1);
const result = twoParameterOneLine(10, 11);
// console.log(result)


const twoParameter = (inp1, inp2) =>  {
    const frist = inp1 + 1;
    const secend = inp2 + 1;
    const final = frist * secend;
    // console.log(final);
}
twoParameter(10, 11)
//same 

/* 
৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */

const threeParameter = (inp1, inp2, inp3) => inp1 * inp2 * inp3;
const threeResult = threeParameter(10, 10, 10);
// console.log(threeResult);


/* ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
 */

const two = (inp1, inp2) => {
    const first = inp1 + 1;
    const secend = inp2 + 1;
    const final = first * secend;
    // console.log(final);
}
two(10, 11)





//other sections


// ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো।
// function are 'constructible'and .this usable but arrow function not 'constructible' and .this no useable.


// ৪.৫. জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি?
/* 
        var: var reassinable and global variable(not block level) that why it make some problem in bigger projects.
        let: var reassinable and block level varibale that means it work only block not effect on outof block elements .
        const: const in not reassinable and it also block level variable this work only block not effect on out of block .

*/

// ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
const arrays = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arrayMultipilication = arrays.map(n => n * 5);
// console.log(arrayMultipilication);


// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const odd = numbers.filter(p => p%2 ==! 0)
// console.log(odd)


// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 
const arryObj = [
    {
        product: 'laptop',
        price: 20000
    },
    {
        product: 'mobile',
        price:5000
    },
    {
        product: 'Monitor',
        price: 5000
    }
]
const finds = arryObj.find(p => p.price === 5000);
// console.log(finds)

// ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।

/* arrays func sammary
    
    map: map for every elemets (plus,minus,etc) and retund the result 
    forEach: forEach almost semeler work like map but did not return.
    filter: is work an array al elemeten and give the result of our providing conditions and return all elemets result.
    find: find is almost similar on filter but he is give only frist conditions elements .

*/

// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।

const simpleOvj = {
    product: 'Monitor',
    price: 5000
};

const { price } = simpleOvj;
// console.log(price)



// ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।


const [a, b, c] = [5, 10, 20, 50, 100];
const three = c
console.log(three)


// console.log(three);



// ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।

function withDefult(inp, inp2, inp3 = 7) {
    const result = inp + inp2 + inp3;
    return result;
}; 

const defultResult = withDefult(10, 10, 10);
// console.log(defultResult);



// [অপশনাল]



// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

const nestedObj = {
    id: 1,
    name: 'ismail',
    location: {
        street: 'Pnajupara,kuakata',
        city: 'kuakata',
        zipCode: 8620,
        district: 'Patuakhali',
    },
    phone: {
        grammen: ['01774410445', '01724271252', "01794284544"],
        teletalk: ["01567867588", '01567867568']
    }
};
// console.log(nestedObj.phone.teletalk[1]);
// console.log(nestedObj.location.zipCode);
// ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।
// console.log(nestedObj?.phone.teletalk)
