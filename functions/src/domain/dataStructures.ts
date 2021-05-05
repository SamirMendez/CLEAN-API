// Exportando interfaces como modelos de datos
export interface StudentData {
    id: string;
    name: string;
    surname: string;
    bornDate: string;
    grade: string;
    type: string;
    classroom: string;
}
export interface TeacherData {
    id: string;
    name: string;
    surname: string;
    born: string;
    grade: string;
    type: string;
    career: string;
    subject: string;
    classroom: string;
}
export interface SubjectData {
    id: string;
    name: string;
    description: string;
    schedule: any[];
}
// Exportando interfaces como modelos de datos
