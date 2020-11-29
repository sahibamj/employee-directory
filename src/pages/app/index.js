import { useEffect, useState } from 'react';

import EmployeesService from '../../services/employeesService';
import useSorting from './sorting';
import useSearching from './searching';
import { getHeaders, fixEmployeeInformation, sortEmployeesByName } from './helpers';
import Table from '../../components/table';
import Title from '../../components/title';
import SearchBox from '../../components/search-box';

import './styles.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [originalEmployees, setOriginalEmployees] = useState([]);

  useEffect(() => {
    const service = new EmployeesService();
    const newEmployees = service.getEmployees();
    setEmployees(newEmployees);
    setOriginalEmployees([...newEmployees]);
  }, []);

  const {
    sortEmployeesById,
    sortEmployeesByName,
    sortEmployeesByJobTitle,
    sortEmployeesByEmail,
  } = useSorting({ employees, setEmployees });

  const { searchByName } = useSearching({ originalEmployees, setEmployees });

  const headers = getHeaders(sortEmployeesById, sortEmployeesByName, sortEmployeesByJobTitle, sortEmployeesByEmail);

  const rowsData = employees.map((employee) => fixEmployeeInformation(employee));

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col py-4">
          <Title text="Directory of Employees" />
        </div>
      </div>

      <div className="row">
        <div className="col py-4 col-xl-4 col-lg-4 col-md-8 col-sm-12 col-xs-12">
          <SearchBox placeholder="Search by name" searchHandler={searchByName} />
        </div>
      </div>

      <div className="row">
        <div className="col w-100">
          {
            employees.length > 0 && (
              <Table headers={headers} rowsData={rowsData} />
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
