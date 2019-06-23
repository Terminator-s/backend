const express = require('express'),
    mongoose = require('mongoose');
   const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

mongoose.connect('mongodb+srv://terminator:admin123@clusterterminators-rjtl2.azure.mongodb.net/afPro').then(() => {
    console.log('Connected to the DB');
}).catch(err => {
    console.error(err);
    process.exit(-1);
});

app.use('/courses', require('./app/ManageCourses/routes/courseRouter'));
app.use('/semester',require('./app/ManageCourses/routes/semesterRouter'));
app.use('/degree',require('./app/ManageCourses/routes/degreeRouter'));
app.use('/instructor',require('./app/ManageAdmin/routes/instructorRouter'));
app.use('/admin',require('./app/ManageAdmin/routes/adminRouter'));
app.use('/student',require('./app/ManageAdmin/routes/studentRouter'));
app.use('/notice',require('./app/ManageAdmin/routes/noticeRouter'));
app.use('/assignment', require('./app/ManageAssignment/routes/assignmentRouter'));



app.listen(3001, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Application is running on port 3000');
});

