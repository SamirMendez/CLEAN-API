import { StudentData } from "../domain/dataStructures";

// Exportando clase para manejar a los estudiantes
export class Student {
    constructor() {}
    // Funciones para manejar a los estudiantes
    public async createStudent(studentData: StudentData): Promise<StudentData> {
        const objectToSend = {
            id: studentData.id,
            name: studentData.name,
            surname: studentData.surname,
            bornDate: studentData.bornDate,
            grade: studentData.grade,
            type: studentData.type,
            classroom: studentData.classroom,
        };
        return await addToDatabase(objectToSend); //Enviado a la base de datos
    }    
    // Funciones para manejar a los estudiantes
}
// Exportando clase para manejar a los estudiantes