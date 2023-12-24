import { DataGrid, viVN, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';

import { useState, useEffect } from 'react';

import axios from 'axios';

import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function ResidentTable() {
  const navigate = useNavigate();

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.1 },
    { field: 'lastName', headerName: 'Họ', flex: 0.1 },
    { field: 'firstName', headerName: 'Tên', flex: 0.1 },
    { field: 'gender', headerName: 'Giới tính', flex: 0.1 },
    {
      field: 'birthday',
      headerName: 'Ngày sinh',
      flex: 0.1,
      type: 'date',
      valueGetter: (params) => new Date(params.row.birthday),
    },
    { field: 'phone', headerName: 'Số điện thoại', flex: 0.1 },
    { field: 'country', headerName: 'Đất nước', flex: 0.1 },
    { field: 'city', headerName: 'Thành phố', flex: 0.1 },
    {
      field: 'actions',
      type: 'actions',
      cellClassName: 'actions',
      getActions: (params) => [
        <GridActionsCellItem
          key='edit'
          icon={<Edit />}
          label='Edit'
          onClick={() => {
            navigate(`/`, { state: params.row });
          }}
        />,
      ],
    },
  ];

  const [userInfos, setUserInfos] = useState([]);

  useEffect(() => {
    const fetchUserInfos = async () => {
      const response = await axios.get('http://localhost:3000/user-infos');
      setUserInfos(response.data);
    };

    fetchUserInfos();
  }, []);

  return (
    <DataGrid
      autoPageSize
      rows={userInfos}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 6,
          },
        },
      }}
      pagination
      checkboxSelection
      disableRowSelectionOnClick
      localeText={viVN.components.MuiDataGrid.defaultProps.localeText}
      slots={{ toolbar: GridToolbar }}
    />
  );
}
