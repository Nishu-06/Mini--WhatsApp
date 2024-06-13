const mongoose=require("mongoose");
const Chat = require("./models/chat");

main()
.then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allchats=[
    {
    from:"neha",
    to:"nishu",
    msg:"hello,how are you",
    created_at:new Date() //UTC
    },
    {
        from:"adarsh",
        to:"rama",
        msg:"hello,how are you",
        created_at:new Date() //UTC
    },
    {
        from:"sush",
        to:"shanks",
        msg:"hello,how are you",
        created_at:new Date() //UTC
    },
    {
        from:"rahul",
        to:"anjali",
        msg:"hello,how are you",
        created_at:new Date() //UTC
    },
];

Chat.insertMany(allchats)

