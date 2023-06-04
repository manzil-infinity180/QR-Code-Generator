const express=require("express");
const ejs=require("ejs");
const bodyParser= require("body-parser");
const QRCode= require("qrcode");
const app= express();
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.get("/",(req,res)=>{
     res.render("index");
});
app.post("/scan",(req,res)=>{
     const url= req.body.url;
     QRCode.toDataURL(url, function (err, src) {
          res.render("scan",{
               qr_code :src,
          })
        })
})
app.listen(3050,()=>{
     console.log("listening on 3050");
})