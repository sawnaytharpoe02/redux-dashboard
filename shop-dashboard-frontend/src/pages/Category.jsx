import React, { useEffect, useState } from 'react';
import CustomTable from '../components/Table/Table';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, getCategory } from '../store/actions';

const Category = () => {
  const [open, setOpen] = useState(false);

  const header = ['No.', 'Name', 'Actions'];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  const { category } = useSelector((state) => state.categories);

  return (
    <CustomTable
      setOpen={setOpen}
      title={'Category'}
      header={header}
      tableBody={category?.map((row, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{row.name}</td>
          <td>
            <div className="d-flex gap-3">
              <Button size="sm" color="warning">
                Edit
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => handleDelete(row.id)}>
                Delete
              </Button>
            </div>
          </td>
        </tr>
      ))}
    />
  );
};

export default Category;
