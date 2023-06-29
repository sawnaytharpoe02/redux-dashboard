import { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Row,
} from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { apiCall } from '../service/apiService';
import { setToken } from '../utils/cache';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/actions';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const url = 'http://localhost:3000/register';
    const res = await apiCall('post', url, {
      username: data.username,
      email: data.email,
      password: data.password,
      role: data.role.value,
    });
    setToken(res.data.accessToken);
    dispatch(registerUser(res.data.user));
    navigate('/');
    console.log(res);
  };

  const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Member', label: 'Member' },
  ];

  return (
    <Container className="min-vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col md={12}>
          <Card>
            <CardHeader
              style={{
                backgroundColor: '#ffaabb',
              }}>
              <h5>NextShop Register</h5>
            </CardHeader>
            <CardBody className="p-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <label htmlFor="username">Username</label>
                  <input
                    id="username"
                    className="form-control"
                    placeholder="username"
                    name="username"
                    type="username"
                    {...register('username', { required: true })}
                  />
                  {errors.username && (
                    <span className="text-danger">Username is required</span>
                  )}
                </FormGroup>

                <FormGroup>
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    className="form-control"
                    placeholder="email"
                    name="email"
                    type="email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">Email is required</span>
                  )}
                </FormGroup>

                <FormGroup>
                  <label htmlFor="role">Role</label>
                  <Controller
                    id="role"
                    name="role"
                    control={control}
                    render={({ field }) => (
                      <Select {...field} options={options} />
                    )}
                  />
                </FormGroup>

                <FormGroup>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    className="form-control"
                    name="password"
                    placeholder="password"
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', { required: true })}
                  />
                  {errors.password && (
                    <span className="text-danger">Password is required</span>
                  )}
                </FormGroup>

                <FormGroup>
                  <input
                    type="checkbox"
                    onChange={() =>
                      setShowPassword((prevShowPassword) => !prevShowPassword)
                    }
                  />{' '}
                  <label check="true">Show Password</label>
                </FormGroup>

                <FormGroup className="d-flex align-items-center">
                  <Button color="danger" type="submit">
                    Register
                  </Button>
                  <span className="small ms-2">
                    Already an account ? <Link to="/login">login</Link>
                  </span>
                </FormGroup>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
