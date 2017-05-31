// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('592e840d8bc810d7153ffc8e')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // })
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('592e7500860f1700f423a1c4')
    },{
        $set: {
            name: "Mark"
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    })
   

    // db.close();
});
