// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Adem'}).then((result)=>{
    //     console.log(result);
    // })

    // deleteOne 
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result)=>{
    //     console.log(result);
    // })

    // findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('592e72d86b531022684d585d')}).then((result)=>{
        console.log(result);
    });

   

    // db.close();
});
