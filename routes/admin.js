var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
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
 res.render('admin/view-products',{admin:true,prod})
});
router.get('/add-prod',function(req,res){
res.render('admin/add-product')

})

module.exports = router;
