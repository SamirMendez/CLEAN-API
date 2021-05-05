import { TeacherData } from "../domain/dataStructures";

// Exportando clase para manejar a los profesores
export class Teacher {
    constructor() {}
    // Funciones para manejar a los profesores
    public async createTeacher(teacherData: TeacherData): Promise<TeacherData> {
        const objectToSend = {
            id: teacherData.id,
            name: teacherData.name,
            surname: teacherData.surname,
            born: teacherData.born,
            grade: teacherData.grade,
            type: teacherData.type,
            career: teacherData.career,
            subject: teacherData.subject,
            classroom: teacherData.classroom,
        };
        return await addToDatabase(objectToSend); //Enviado a la base de datos
    }    
    // Funciones para manejar a los profesores
}
// Exportando clase para manejar a los profesores