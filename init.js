const mongoose=require("mongoose");
const Chat=require("./models/chat.js");


main()
.then(()=>{
    console.log("connection succesful");
})
.catch((error)=> console.log(error));


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



let allchat1 =[{
    from:"raj",
    to:"Apoordgsva",
    msg:"helvgszdeglo",
    created_at:new Date()
},
{
    from:"rajafdvzsaaa",
    to:"Apoorbfsxrva",
    msg:"hebxsfllo",
    created_at:new Date()
},
{
    from:"rajuu",
    to:"Apooxbbsdrva",
    msg:"hellb dxfbo",
    created_at:new Date()
},
{
    from:"rajkk",
    to:"Apoorvhsxhba",
    msg:"hello",
    created_at:new Date()
},
{
    from:"rajftgj",
    to:"Apoorvasxhdhfbcx",
    msg:"hello",
    created_at:new Date()
}
];

Chat.insertMany(allchat1);