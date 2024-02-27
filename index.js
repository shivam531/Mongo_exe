const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/studentDatabase')
.then( () => console.log('data connect succsefully'))
.catch((e) => console.log('noteconnete', e));

const Academic_record = new mongoose.Schema({

       student_ID : Number,
       name : String,
       grade : String,
       subject : String,
       active : Boolean 
})

// ccollection
const batchRecod = new  mongoose.model('batchRecod', Academic_record);
//documention

const studentRecord = new batchRecod({
       student_ID : 1101,
       name : 'shivam',
       grade : 'passout',
       Subject: 'Tech',
       active : true,
})

studentRecord.save();

// Second Schema 

const allumini = new mongoose.Schema({

    student_ID : Number,
    name : String,
    activity : String,
    duration : String,
    achviement: String,
    active : Boolean 

})

// collection of database

const co_Curricular = new mongoose.model('co_Curricular',allumini);

// Documation

const allumini_recond = new co_Curricular ({
    
    student_ID : 1101,
    name : 'shivam',
    activity : 'tech',
    duration : 'four years',
    achviement: 'Winner',
    active :  false,

})

allumini_recond.save();