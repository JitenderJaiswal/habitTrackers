const Detail=require('../models/detail');

//find the habit and display on to the browser
module.exports.find=async function(req,res){
    try{
        let detail=await Detail.find({});
        let habits=[];
        let tasks=[];

        for(let d of detail){
            if(habits.indexOf(d.habit)==-1)
            habits.push(d.habit);
        }

        let datetime = new Date();
        for(let i=0;i<habits.length;i++){
            let habit=await Detail.find({habit:habits[i]});
            let flag=false;
            for(let h of habit){
                if(h.createdAt.toISOString().slice(0,10)==datetime.toISOString().slice(0,10)){
                flag=true;
                break;
                }
             }
             if(!flag)
             await Detail.create({habit:habits[i],status:"Pending",streak:0});
         
            let done=0,Notdone=0;
            let task={};
            for(let d of detail){
                if(habits[i]==d.habit&&d.status=="Done")
                done++;
                else if(habits[i]==d.habit&&d.status=="NotDone")
                Notdone++;
            }
            task.done=done;
            task.Notdone=Notdone;
            task.total=done+Notdone;
            tasks.push(task);
        }

        detail=await Detail.find({});
        return res.render('week',{title :"WeekView",detail:detail,habits:habits,tasks:tasks}); 
    }
    catch(err){console.log('Error', err);return; }
}

//Create habit
//1.By Add on input
//2.if user will open tommorrow a default behaviour is added so that they can update habit(Done,Undone,None)
module.exports.create=async function(req,res){
    try{
        let habit=req.query.habit;
        let datetime = new Date();
        let detail=await Detail.find({habit:habit});
       
        if(detail.length>0){
         for(let d of detail){
            if(d.createdAt.toISOString().slice(0,10)==datetime.toISOString().slice(0,10))
            return res.redirect('back'); 
         }
        }
        await Detail.create({habit:habit,status:"Pending",streak:0});
      
        return res.redirect('/users/find');
    }
    catch(err){console.log('Error', err);return; }
  
}

//update habit(Done,Undone,None)
module.exports.update = async function(req, res){
    try{
        let find=await Detail.findOne({_id:req.params.id});
        let findupdate=await Detail.findOneAndUpdate({_id:req.params.id},{status:req.params.newstatus/*,streak:find.streak*/},{new:true});
        
        return res.redirect('/users/find');
       }
    catch(err){ console.log('Error', err);return;}    
}

//Details of all habit
module.exports.detail=async function(req,res){
    try{
        let detail=await Detail.find({});
        let habits=[];
        let tasks=[];

        for(let d of detail){
            if(habits.indexOf(d.habit)==-1)
            habits.push(d.habit);
        }

        for(let i=0;i<habits.length;i++){
            let done=0,Notdone=0;
            let task={};
            for(let d of detail){
                if(habits[i]==d.habit&&d.status=="Done")
                done++;
                else if(habits[i]==d.habit&&d.status=="NotDone")
                Notdone++;
            }
            task.done=done;
            task.Notdone=Notdone;
            task.total=done+Notdone;
            tasks.push(task);
        }
        
        return res.render('detail',{title :"WeekView",habits:habits,tasks:tasks}); 
    }
    catch(err){console.log('Error', err);return; }
}

//delte habit
module.exports.delete = async function(req, res){
    try{
        console.log(req.params.habit);
        let d=await Detail.deleteMany({habit:req.params.habit});
        return res.redirect('back');
       }
    catch(err){ console.log('Error', err);return;}    
}
