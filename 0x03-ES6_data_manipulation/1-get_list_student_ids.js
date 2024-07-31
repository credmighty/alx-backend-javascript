// returns an array of ids from a list of object
export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) return [];
  return studentList.map((el) => el.id);
}
