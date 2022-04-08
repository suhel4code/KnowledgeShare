import {
  Grid,
  TextField,
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .required('Required'),
});

export default function SignUp() {
  async function handleSubmit(values) {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log('user Credentials', userCredential);
      const user = userCredential.user;
      console.log('User', user);
    } catch (error) {
      console.log('Sign Up error', error);
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema,

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  // console.log('Formik', formik);

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          component='h1'
          variant='h5'
          align='center'
          gutterBottom
          sx={{ marginBottom: 4 }}
        >
          First Step to Explore
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <TextField
                  label='First Name'
                  fullWidth
                  variant='outlined'
                  id='firstName'
                  name='firstName'
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  error={Boolean(
                    formik.touched.firstName && formik.errors.firstName
                  )}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                      ? formik.errors.firstName
                      : ''
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <TextField
                  label='Last Name'
                  fullWidth
                  variant='outlined'
                  id='lastName'
                  name='lastName'
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  error={Boolean(
                    formik.touched.lastName && formik.errors.lastName
                  )}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.lastName && formik.errors.lastName
                      ? formik.errors.lastName
                      : ''
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <TextField
                  label='Email'
                  fullWidth
                  variant='outlined'
                  id='email'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : ''
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <TextField
                  label='Password'
                  fullWidth
                  variant='outlined'
                  id='password'
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={Boolean(
                    formik.touched.password && formik.errors.password
                  )}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.touched.password && formik.errors.password
                      ? formik.errors.password
                      : ''
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                type='submit'
                // loading={true}
                loadingPosition='start'
                startIcon={<SaveIcon />}
                variant='contained'
                fullWidth
              >
                Sign Up
              </LoadingButton>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ margin: 'auto' }}>
                <Link to='/sign-in'>
                  <Button>Already a user Sign In</Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
