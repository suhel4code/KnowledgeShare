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

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Must be 6 characters or more')
    .required('Required'),
});

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log('Formik', formik);

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
          Start from where you left !
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
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
                Sign In
              </LoadingButton>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={9}>
                <Link to='/forgot-password'>
                  <Button>Forgot Password</Button>
                </Link>
              </Grid>
              <Grid item xs={3}>
                <Link to='/'>
                  <Button>Sign Up</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
}
