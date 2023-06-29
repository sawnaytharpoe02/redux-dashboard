import React from 'react';
import CustomTable from '../components/Table/Table';
import { Button } from 'reactstrap';

const Customer = () => {
  const header = ['No.', 'First Name', 'Last Name', 'Actions'];
  const data = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Darick',
    },
    {
      id: 2,
      firstname: 'Marry',
      lastname: 'Western',
    },
  ];
  return (
    <CustomTable
      title={'Customer'}
      header={header}
      tableBody={data.map((row, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{row.firstname}</td>
          <td>{row.lastname}</td>
          <td>
            <div className="d-flex gap-3">
              <Button size="sm" color="warning" onClick={() => setOpen(true)}>
                Edit
              </Button>
              <Button size="sm" color="danger">
                Delete
              </Button>
            </div>
          </td>
        </tr>
      ))}
    />
  );
};

export default Customer;
