import FakeData from '../data/fakeData';

export default class EmployeesService {
  getEmployees = () => {
    return FakeData;
  }
}
