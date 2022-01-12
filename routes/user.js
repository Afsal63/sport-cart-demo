var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
var url=require('url')

/* GET home page. */
let user={name:'Afsal',email:'afsal@gmail.com',pass:'1234'}

let prod=[{
  name:"MRF",
  category:"Bat",
  image:"https://m.media-amazon.com/images/I/31UpbHmdWjS.jpg"
},
{
name:"Nivia",
category:"Volleyball",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2Te0Xd9MRAOGgRbNPpZTFnL9EN7Qkw99ng&usqp=CAU"

},
{
name:"Flyp",
category:"Basketball",
image:"https://media.istockphoto.com/vectors/basketball-ball-vector-id521373700?k=20&m=521373700&s=170667a&w=0&h=m1kU1psRMDdljtCbdjvZsllbyHLK_GV9oNoSWYm55vY="
},
{
name:"Yonex",
category:"Badmintion Racquet",
image:"https://m.media-amazon.com/images/I/71Gc40J8wlL._SL1500_.jpg"
}
,
{
name:"Bas vampire",
category:"hoki bat",
image:"https://m.media-amazon.com/images/I/71TDV-g6GqL._SL1500_.jpg"
}
,
{
name:"Yonex",
category:"Shuttlecock",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cuS8TGofGRIpPcTR3jVGLcRXsgatluMLBw&usqp=CAU"
},
{
name:"SG",
category:"Cricketball",
image:"https://5.imimg.com/data5/HI/CS/GLADMIN-2/sg-cricket-ball-500x500.jpg"
}
,
{
name:"Nivia spider",
category:"football glows",
image:"https://m.media-amazon.com/images/I/91cbws1Xp0L._SL1500_.jpg"
}
]

router.get('/', function(req, res, next) {
  
  if(req.session.loggedIn){
    res.render('index' ,{prod,user:true});
  }
  else{
    res.render('user/login')
  }
  
});


router.get('/login',(req,res)=>{
  let link=url.parse(req.url,true)
  if(user.email===link.query.email && user.pass===link.query.pass){
    req.session.loggedIn=true
    req.session.user=user
   
    if(req.session.loggedIn){
      
      res.redirect('/')
    }
    else{
      res.render('user/login')
    }
    
  }
  else{
    let err="Invalid Username or Password"
    res.render('user/login',{err})
  }

})


router.post('user/signup',(req,res)=>{
  res.render('user/login')
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})

router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})


router.get('/product',(req,res)=>{

  if(req.session.loggedIn){
    res.render('user/product',{prod,user:true})
  }else{
    res.render('user/login')
  }
})
module.exports = router;
