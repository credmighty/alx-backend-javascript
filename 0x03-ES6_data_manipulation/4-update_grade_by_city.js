// returns an array of students for a specific city with their new grade
export default function updateStudentGradeByCity(studentList, city, newGrade) {
  const students = studentList.filter((el) => el.location === city);
  return students.map((el) => {
    const student = el;
    const studGrade = newGrade.filter((grade) => grade.studentId === el.id);
    if (studGrade.length !== 0) student.grade = studGrade[0].grade;
    else student.grade = 'N/A';
    return el;
  });
}
