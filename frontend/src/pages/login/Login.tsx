import { Grid } from '@mui/material';
import LoginForm from '../../features/login/login-form/LoginForm';

import Background from './assets/background.png';

export default function Login() {
  return (
    <>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        sx={{
          minHeight: '100vh',
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
        }}
        direction='column'
      >
        <Grid item>
          <LoginForm />
        </Grid>
      </Grid>
    </>
  );
}
