function getStudentNames(students) {
    var names = [];
    for (var i = 0; i < students.length; i++) {
      names.push(students[i].name);
    }
    return names;
  }
  
  const students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Sam', age: 19 }
  ];
  
  console.log(getStudentNames(students)); 
  