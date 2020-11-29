export function getHeaders(sortEmployeesById, sortEmployeesByName, sortEmployeesByJobTitle, sortEmployeesByEmail) {
  return [
    { title: 'ID', onClick: sortEmployeesById },
    { title: 'Name', onClick: sortEmployeesByName },
    { title: 'Job Title', onClick: sortEmployeesByJobTitle },
    { title: 'Email', onClick: sortEmployeesByEmail },
  ];
}

export function fixEmployeeInformation(employee) {
  return [
    { content: employee.id },
    { content: employee.name },
    { content: employee.jobTitle },
    { content: employee.email },
  ];
};
