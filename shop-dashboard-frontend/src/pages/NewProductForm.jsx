import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import {
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import Select from 'react-select';

const NewProductForm = ({ isModal, toggle }) => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const categories = [
    { value: 1, label: 'Jewelery' },
    { value: 2, label: 'Electronics' },
    { value: 3, label: 'Men clothing' },
    { value: 4, label: 'Women clothing' },
  ];
  return (
    <Modal isOpen={isModal} toggle={toggle}>
      <ModalHeader toggle={toggle}>New Product Form</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label for="title">Title</Label>
            <input
              className="form-control"
              {...register('title', { required: true })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="category">Category</Label>
            <Controller
              name="categories"
              control={control}
              render={({ field }) => (
                <Select isClearable={true} {...field} options={categories} />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Label for="desc">Description</Label>
            <input
              className="form-control"
              {...register('desc', { required: true })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Price</Label>
            <input
              className="form-control"
              {...register('price', { required: true })}
            />
          </FormGroup>
          <FormGroup>
            <Label for="price">Image</Label>
            <input
              className="form-control"
              {...register('img', { required: true })}
            />
          </FormGroup>
          <Button color="primary" type="submit">
            Add New Product
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default NewProductForm;
