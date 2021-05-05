import { Teacher } from './application/teacher';
import * as functions from "firebase-functions";
import { Student } from "./application/students";
import { StudentData, SubjectData, TeacherData } from "./domain/dataStructures";
import { Subject } from './application/subject';

const studentClass = new Student();
const teacherClass = new Teacher();
const subjectClass = new Subject();

export const createStudent = functions.https.onRequest((request, response) => {
    const formattedData = JSON.parse(request.body);
    studentClass.createStudent(formattedData).then((returnedData: StudentData) => {
       response.status(200).send({status: 'success', data: returnedData}); 
    }).catch((error) => {
        response.status(200).send({status: 'error', data: error}); 
    });
});

export const createTeacher = functions.https.onRequest((request, response) => {
    const formattedData = JSON.parse(request.body);
    teacherClass.createTeacher(formattedData).then((returnedData: TeacherData) => {
       response.status(200).send({status: 'success', data: returnedData}); 
    }).catch((error) => {
        response.status(200).send({status: 'error', data: error}); 
    });

});

export const createSubject = functions.https.onRequest((request, response) => {
    const formattedData = JSON.parse(request.body);
    subjectClass.createSubject(formattedData).then((returnedData: SubjectData) => {
       response.status(200).send({status: 'success', data: returnedData}); 
    }).catch((error) => {
        response.status(200).send({status: 'error', data: error}); 
    });
});

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
