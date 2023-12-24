import { Logout } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Button,
  Divider,
  ListItemIcon,
  useTheme,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

import * as React from 'react';

import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

import { useLocalStorage } from '@uidotdev/usehooks';

const Link = React.forwardRef(function Link(itemProps, ref) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props) {
  const { icon, primary, to, color } = props;

  return (
    <ListItem button component={Link} to={to} sx={{ width: '100%' }}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText
        primary={primary}
        sx={{
          color: color,
        }}
      />
    </ListItem>
  );
}

const roles = {
  staff: 'Nhân viên',
  resident: 'Cư dân',
  manager: 'Quản lý',
  police: 'Cảnh sát',
};

export default function Navbar({ base, items }) {
  const location = useLocation();
  const theme = useTheme();

  const navigate = useNavigate();

  const [user] = useLocalStorage('user', null);

  const [logoutOpen, setLogoutOpen] = React.useState(false);

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' p={2} gap={2} height='100%'>
      <Box display='flex' justifyContent='center' gap={1} alignItems='center'>
        <Box component='img' sx={{ height: '100%', width: '25%' }} src='/src/assets/logo.svg' />
        <Typography variant='h5' color='primary' fontWeight='600'>
          Vinahouse
        </Typography>
      </Box>

      <FormControl variant='standard'>
        <InputLabel>Vai trò</InputLabel>
        <Select
          labelId='role-select'
          id='role-select'
          label='Vai trò'
          variant='standard'
          value={base}
        >
          {user.roles.map((role) => (
            <MenuItem
              key={role.name}
              value={role.name}
              onClick={() => {
                if (base !== role.name) {
                  navigate(`/${role.name}`);
                }
              }}
            >
              {roles[role.name]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <List>
        {items.map((item) => (
          <ListItemLink
            key={item.route}
            primary={item.name}
            to={`/${base}/${item.route}`}
            disablePadding
            color={
              location.pathname.includes(base) && location.pathname.includes(item.route)
                ? theme.palette.secondary.main
                : theme.palette.text
            }
          />
        ))}
      </List>
      <Divider />

      <Button
        sx={{ marginTop: 'auto' }}
        variant='text'
        startIcon={<Logout />}
        onClick={() => {
          setLogoutOpen(true);
        }}
      >
        Đăng xuất
      </Button>
      <Dialog
        open={logoutOpen}
        maxWidth='xs'
        fullWidth
        aria-labelledby='logout-dialog-title'
        aria-describedby='logout-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Đăng xuất'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Bạn có muốn đăng xuất không?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setLogoutOpen(false);
            }}
          >
            Hủy
          </Button>
          <Button
            onClick={() => {
              setLogoutOpen(false);
              navigate('/login');
            }}
            autoFocus
          >
            Đồng ý
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
