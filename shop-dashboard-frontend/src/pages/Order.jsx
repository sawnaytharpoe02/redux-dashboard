import { useState } from 'react';
import { Row } from 'reactstrap';
import CustomModal from '../components/Modal';
import CustomTable from '../components/Table/Table';

function Order() {
  const [open, setOpen] = useState(false);

  const header = ['No.', 'Customer Name', 'Quantity', 'Product', 'Address'];
  const data = [
    {
      id: 1,
      customer_name: 'John Darick',
      quantity: 4,
      product: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      address: `123 Mock Street ,Testville, Example County, United States`,
    },
    {
      id: 2,
      customer_name: 'Marry Western',
      quantity: 12,
      product: '	Mens Casual Premium Slim Fit T-Shirts',
      address: `456 Test Avenue, Trialton, Sample City, Example State, United States`,
    },
  ];
  return (
    <Row>
      <CustomTable
        setOpen={setOpen}
        title={'Order'}
        header={header}
        tableBody={data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{row.customer_name}</td>
            <td>{row.quantity}</td>
            <td>{row.product}</td>
            <td>{row.address}</td>
          </tr>
        ))}
      />
      <CustomModal isOpen={open} onClick={() => setOpen(false)}>
        Hello World
      </CustomModal>
    </Row>
  );
}
export default Order;
