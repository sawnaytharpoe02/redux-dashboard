import React, { useEffect, useState } from 'react';
import CustomTable from '../components/Table/Table';
import { Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProducts } from '../store/actions';
import { DotLoader } from 'react-spinners';

const Products = () => {
  const header = [
    'No.',
    'Title',
    'Price',
    'Description',
    'Category',
    'Image',
    'Actions',
  ];

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.status);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  if (loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="sweet-loading">
          <DotLoader
            color={'#e63946'}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    );
  }

  return (
    <CustomTable
      title={'Products'}
      header={header}
      tableBody={products.map((row, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{row.title}</td>
          <td>{row.price}</td>
          <td>{row.description}</td>
          <td>{row.category}</td>
          <td>
            <img src={row.image} height="50" alt="" />
          </td>
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

export default Products;
