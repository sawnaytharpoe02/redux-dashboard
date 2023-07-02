import { Link, useNavigate } from 'react-router-dom';
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
import { useForm } from 'react-hook-form';
import { apiCall } from '../service/apiService';
import { useDispatch } from 'react-redux';
import { loginUser, setToast } from '../store/actions';
import { toast } from 'react-toastify';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const url = 'http://localhost:3000/users';
    const user = {
      email: data.email,
      password: data.password,
    };
    const res = await apiCall('get', url);
    const curUser = res.data.filter((u) => u.email === user.email);

    if (curUser.length !== 0) {
      dispatch(loginUser(curUser[0]));
      dispatch(setToast('Login successful'));
      navigate('/');
    } else {
      toast.error('Incorrect Credentials!');
      navigate('/login');
    }
  };

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
                  <Label for="email">Email</Label>
                  <input
                    id="email"
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
                  <Label for="password">Password</Label>
                  <input
                    id="password"
                    className="form-control"
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
