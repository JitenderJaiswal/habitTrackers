const Detail=require('../models/detail');

module.exports.home = async function(req, res){
    try{
        return res.render('home',{title :"AddHabits"});//Detail:Detail
      }
   catch(err){ console.log('Error', err);return;}
}
