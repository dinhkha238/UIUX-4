import { Button, Grid, TextField, Typography, Box } from "@mui/material";

import { useFormik } from "formik";
import * as yup from "yup";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  username: yup.string("username").required("Tên đăng nhập là bắt buộc"),
  password: yup.string("username").required("Mật khẩu là bắt buộc"),
});

export default function LoginForm() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await axios.post(
          "http://localhost:3000/users/login",
          values
        );

        let userData = result.data.data;

        window.localStorage.setItem("user", JSON.stringify(userData));

        let primaryRole = userData.roles.find((role) => role.primary === true);

        navigate(`/${primaryRole.name}`);
      } catch (error) {
        console.log(error);

        formik.setErrors({
          username: error.response.data.message,
          password: error.response.data.message,
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        rowSpacing={{ xs: 2 }}
        sx={{ width: 400, backgroundColor: "white", px: 2, py: 4 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          item
          justifyContent="center"
          alignItems="center"
          columnSpacing={2}
        >
          <Grid item xs={4}>
            <Box component="img" src="/src/assets/logo.svg" />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h4" color="primary">
              Vinahouse
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography color="primary.text">Đăng nhập</Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField
            sx={{ width: 1 }}
            id="username"
            name="username"
            label="Tên đăng nhập"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            sx={{ width: 1 }}
            id="password"
            name="password"
            label="Mật khẩu"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>

        <Grid item xs={12}>
          <Button color="primary" fullWidth variant="contained" type="submit">
            Đăng nhập
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
