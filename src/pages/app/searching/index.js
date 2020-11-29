import React from 'react'

export default function useSearching(props) {
  const { originalEmployees, setEmployees } = props;

  const searchByName = (term) => {
    if (term === '') {
      setEmployees(originalEmployees);
      return;
    }

    const newEmployees = originalEmployees.filter((employee) => employee.name.toLowerCase().includes(term.toLowerCase()));
    setEmployees(newEmployees);
  }

  return { searchByName };
}
