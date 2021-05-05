import { SubjectData } from "../domain/dataStructures";

// Exportando clase para manejar a los profesores
export class Subject {
    constructor() {}
    // Funciones para manejar a los profesores
    public async createSubject(subjectData: SubjectData): Promise<SubjectData> {
        const objectToSend = {
            id: subjectData.id,
            name: subjectData.name,
            description: subjectData.description,
            schedule: subjectData.schedule,
        };
        return await addToDatabase(objectToSend); //Enviado a la base de datos
    }    
    // Funciones para manejar a los profesores
}
// Exportando clase para manejar a los profesores