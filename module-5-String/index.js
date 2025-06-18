let singelQuote = 'Hello, World!';
let doubleQute = "Hello, World! ";
let bacTickQute = `Hello, World!`;
console.log(singelQuote);
console.log(doubleQute);
console.log(bacTickQute);

// Mengakses karakter dalam string
let str =  "JavaScript"
console.log(str[0])

// Properti dan methods di dalam string 
console.log("Panjang string",str.length) // property  
console.log("Huruf Besar :",str.toUpperCase()) //method
console.log("Huruf Kecil :",str.toLowerCase())

let testTrim = "               Halo dunia                  "
console.log("Trim : ", testTrim.trim())

// Manopulasi String

//concat 
let firstName = "Glen"
let lastName = "Sitorus"
let fullName = firstName +" " + lastName
console.log("Full Name : ", fullName)

//concat template literal
let fullNameBactics = `${firstName} ${lastName}`
console.log("Full Name Bactics : ",fullNameBactics)

// Mengambil bagian dari string
let text = "JavaScript"
console.log(text.slice(0,4))
console.log(text.substring(4,6))

//Mengganti bagian dari string 
let replacement = "Kampus IT Del"
let newReplacement = replacement.replace(`Del`,`Bandung`)
console.log(newReplacement)

const arr = [`test`, `array`,`di`, `string`]
console.log(arr.join(` `))

const testString = `test-array-di-string`
console.log(testString.split(`i`,4))

//Pencarian dalam string
let sentence = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eos repellat tenetur aliquid ducimus officiis ratione nemo ea tempore cum! Ipsum aliquid veritatis totam tempora ducimus illum sunt possimus ipsam vero molestiae pariatur dignissimos fuga commodi, esse quos perspiciatis eaque dolor!`
let index = sentence.indexOf(`dolor`)
console.log(`Index dari dolor:`,index)
console.log(`LastIndexof dari dolor :`,sentence.lastIndexOf(`dolor`))
let exist = sentence.includes(`dolor`)
console.log(`apakah dolor ada di sentence :`,exist)

// Tugas
const stringAsli = `javascript`
const stringBaru = stringAsli.replace(`javascript`, `Javascript`)
console.log(`String baru : `, stringBaru)