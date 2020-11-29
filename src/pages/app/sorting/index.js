import { useState } from 'react';

export default function useSorting(props) {
  const { employees, setEmployees } = props;
  const [sortMethodForId, setSortMethodForId] = useState('ASC');
  const [sortMethodForName, setSortMethodForName] = useState('ASC');
  const [sortMethodForJobTitle, setSortMethodForJobTitle] = useState('ASC');
  const [sortMethodForEmail, setSortMethodForEmail] = useState('ASC');

  const sortEmployeesById = () => {
    if (sortMethodForId === 'DESC') {
      employees.sort((a, b) => a.id > b.id ? -1 : 1);
      setEmployees(employees);
      setSortMethodForId('ASC');
      return;
    }

    if (sortMethodForId === 'ASC') {
      employees.sort((a, b) => a.id > b.id ? 1 : -1);
      setEmployees(employees);
      setSortMethodForId('DESC');
      return;
    }
  }

  const sortEmployeesByName = () => {
    if (sortMethodForName === 'DESC') {
      employees.sort((a, b) => a.name > b.name ? -1 : 1);
      setEmployees(employees);
      setSortMethodForName('ASC');
      return;
    }

    if (sortMethodForName === 'ASC') {
      employees.sort((a, b) => a.name > b.name ? 1 : -1);
      setEmployees(employees);
      setSortMethodForName('DESC');
      return;
    }
  }

  const sortEmployeesByJobTitle = () => {
    if (sortMethodForJobTitle === 'DESC') {
      employees.sort((a, b) => a.jobTitle > b.jobTitle ? -1 : 1);
      setEmployees(employees);
      setSortMethodForJobTitle('ASC');
      return;
    }

    if (sortMethodForJobTitle === 'ASC') {
      employees.sort((a, b) => a.jobTitle > b.jobTitle ? 1 : -1);
      setEmployees(employees);
      setSortMethodForJobTitle('DESC');
      return;
    }
  }

  const sortEmployeesByEmail = () => {
    if (sortMethodForEmail === 'DESC') {
      employees.sort((a, b) => a.email > b.email ? -1 : 1);
      setEmployees(employees);
      setSortMethodForEmail('ASC');
      return;
    }

    if (sortMethodForEmail === 'ASC') {
      employees.sort((a, b) => a.email > b.email ? 1 : -1);
      setEmployees(employees);
      setSortMethodForEmail('DESC');
      return;
    }
  }

  return {
    sortEmployeesById,
    sortEmployeesByName,
    sortEmployeesByJobTitle,
    sortEmployeesByEmail,
  };
}
