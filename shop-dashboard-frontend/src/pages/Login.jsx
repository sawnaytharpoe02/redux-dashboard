import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Label,
  Row,
} from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {}, []);

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
              <h5>NextShop Login</h5>
            </CardHeader>
            <CardBody className="p-5">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <input
                    className="form-control"
                    placeholder="email"
                    type="email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && (
                    <span className="text-danger">Email is required</span>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <input
                    className="form-control"
                    // id="examplePassword"
                    // name="password"
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
                  <Label check>Show Password</Label>
                </FormGroup>
                <FormGroup className="d-flex align-items-center">
                  <Button color="danger" type="submit">
                    Login
                  </Button>
                  <span className="small ms-2">
                    Are you new ? <Link to="/register">register</Link>
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
