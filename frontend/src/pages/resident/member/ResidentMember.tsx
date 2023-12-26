import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const columns = [
  { field: 'name', headerName: 'Tên', flex: 1 },
  {
    field: 'memberType',
    headerName: 'Kiểu thành viên',
    flex: 1,
  },
  {
    field: 'buildingName',
    headerName: 'Tên tòa nhà',
    flex: 1,
  },
  {
    field: 'unitName',
    headerName: 'Tên đơn vị',
    flex: 1,
  },
  {
    field: 'phone',
    headerName: 'Số điện thoại',
    flex: 1,
  },
  {
    field: 'action',
    headerName: 'Tùy chỉnh',
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    name: 'Ngo Thi Lam',
    memberType: 'Owner',
    buildingName: 'R1',
    unitName: 'R1033',
    phone: '0881234566',
  },
  {
    id: 2,
    name: 'Ngo Thi Lam',
    memberType: 'Owner',
    buildingName: 'R1',
    unitName: 'R1033',
    phone: '0881234566',
  },
];

const ResidentMember = () => {
  const [showing, setShowing] = useState('');

  const handleSetShowing = (event: any) => {
    setShowing(event.target.value);
  };

  return (
    <Box>
      <Typography
        variant='h1'
        fontSize={40}
        fontWeight={600}
        borderBottom={1}
        p={3}
        borderColor='rgba(0, 0, 0, 0.12)'
      >
        User Management
      </Typography>

      <Box px={3} mt={4} display='flex' alignItems='center' justifyContent='space-between'>
        <FormControl>
          <InputLabel id='resident-user-management-label'>Hiển thị</InputLabel>
          <Select
            sx={{ width: 220 }}
            labelId='resident-user-management-label'
            id='resident-user-management'
            value={showing}
            label='Hiển thị'
            onChange={handleSetShowing}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ width: 345 }}
          id='outlined-basic'
          label='Tìm kiếm'
          variant='outlined'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box mt={2} px={3}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default ResidentMember;
