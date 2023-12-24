import { DataGrid, viVN, GridToolbar, GridActionsCellItem } from '@mui/x-data-grid';

import { useState, useEffect } from 'react';

import axios from 'axios';

import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function extractApartments(apartments) {
  return apartments.map((apartment) => {
    return {
      id: apartment.id,
      name: apartment.name,
      buildingName: apartment.Building.name,
      size: apartment.size,
      status: apartment.UserInfos.length === 0 ? 'Chưa có cư dân' : 'Đã có cư dân',
      buildingId: apartment.BuildingId,
    };
  });
}

export default function ApartmentTable() {
  const navigate = useNavigate();

  const columns = [
    { field: 'id', headerName: 'ID', flex: 0.18 },
    { field: 'name', headerName: 'Tên căn hộ', flex: 0.18 },
    { field: 'buildingName', headerName: 'Tên tòa nhà', flex: 0.18 },
    { field: 'size', headerName: 'Kích cỡ (m²)', flex: 0.18 },
    { field: 'status', headerName: 'Trạng thái', flex: 0.18 },
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
            navigate(`/staff/apartment/update`, { state: params.row });
          }}
        />,
      ],
    },
  ];

  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const fetchApartments = async () => {
      const response = await axios.get('http://localhost:3000/apartments');
      setApartments(extractApartments(response.data));
    };

    fetchApartments();
  }, []);

  return (
    <DataGrid
      autoPageSize
      rows={apartments}
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
