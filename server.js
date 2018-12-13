const express = require('express');
const hbs =require('hbs');
var app= express();
var fs =require('fs');


const port = process.env.PORT||3000;
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));


hbs.registerHelper('theTime',()=>{
  return new Date().getFullYear()
});
hbs.registerHelper('capital',(text)=>{
    return text.toUpperCase()
});


app.get('/maintenance',(req,res)=>{

})

app.get('/',(req,res)=>{
    res.render('homePage.hbs',{
        title:"Home Page",
        welcome:"Weclome from our home page"
    })
});


app.get('/about',(req,res)=>{
    res.render('homePage.hbs',{
        title:"About Page",
        welcome:"Weclome from our about page"
    })
});

app.get('/project',(req,res)=>{
    res.render('homePage.hbs',{
        title:"About Page",
        welcome:"Weclome from our project page"
    })
});






app.listen(port,()=>console.log(`${port}`)
)

