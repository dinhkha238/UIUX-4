import { DataGrid, viVN, GridToolbar, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';

import { useState, useEffect } from 'react';

import {
  getUserInfos,
  GetUserInfoResponse,
  GetUserInfoResponseElement,
} from '../../../api/user-info/getUserInfos';

import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { UserInfo } from '../../../api/user-info/types';

export default function ResidentTable() {
  const navigate = useNavigate();

  const columns: GridColDef<GetUserInfoResponseElement>[] = [
    { field: 'id', headerName: 'ID', flex: 0.1 },
    { field: 'lastName', headerName: 'Họ', flex: 0.1 },
    { field: 'firstName', headerName: 'Tên', flex: 0.1 },
    {
      field: 'building',
      headerName: 'Chung cư',
      flex: 0.1,
      valueGetter: (params) => params.row.Apartment.Building.name,
    },
    {
      field: 'apartment',
      headerName: 'Căn hộ',
      flex: 0.1,
      valueGetter: (params) => params.row.Apartment.name,
    },
    { field: 'gender', headerName: 'Giới tính', flex: 0.1 },
    {
      field: 'birthday',
      headerName: 'Ngày sinh',
      flex: 0.1,
      type: 'date',
      valueGetter: (params) => new Date(params.row.birthday),
    },
    { field: 'city', headerName: 'Thành phố', flex: 0.1 },
    { field: 'district', headerName: 'Quận', flex: 0.1 },
    { field: 'subdistrict', headerName: 'Phường', flex: 0.1 },
    { field: 'phone', headerName: 'Số điện thoại', flex: 0.1 },
    { field: 'email', headerName: 'Email', flex: 0.1 },
    {
      field: 'Thao tác',
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

  const [userInfos, setUserInfos] = useState<GetUserInfoResponse>([]);

  useEffect(() => {
    const fetchUserInfos = async () => {
      const response = await getUserInfos();

      console.log(response);

      setUserInfos(response);
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
