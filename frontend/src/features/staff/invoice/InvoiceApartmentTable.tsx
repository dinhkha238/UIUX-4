import {
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
  GridRowParams,
  GridColDef,
  GridValueGetterParams,
} from '@mui/x-data-grid';

import { dataGridLocaleText } from '../../../config/constants';

import { useState, useEffect } from 'react';

import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { getApartments } from '../../../api/apartment/getApartments';

import {
  GetAparmentsResponse,
  GetAparmentsResponseElement,
} from '../../../api/apartment/getApartments';

interface ApartmentRow extends GetAparmentsResponseElement {}

export default function InvoiceApartmentTable({ formik }: { formik: any }) {
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 0.18 },
    { field: 'name', headerName: 'Tên căn hộ', flex: 0.18 },
    {
      field: 'buildingName',
      headerName: 'Tên tòa nhà',
      flex: 0.18,
      valueGetter: (params: GridValueGetterParams<ApartmentRow>) => {
        return params.row.Building.name;
      },
    },
    { field: 'size', headerName: 'Kích cỡ (m²)', flex: 0.18 },
    {
      field: 'status',
      headerName: 'Trạng thái',
      flex: 0.18,
      valueGetter: (params: GridValueGetterParams<ApartmentRow>) => {
        return params.row.UserInfos.length === 0 ? 'Trống' : 'Đã cho thuê';
      },
    },
  ];

  const [apartments, setApartments] = useState<GetAparmentsResponse>([]);

  useEffect(() => {
    const fetchApartments = async () => {
      const response = await getApartments();
      setApartments(response);
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
      onRowSelectionModelChange={(row) => {
        formik.setFieldValue('ApartmentIds', row);
      }}
      pagination
      checkboxSelection
      disableRowSelectionOnClick
      localeText={dataGridLocaleText}
      slots={{ toolbar: GridToolbar }}
    />
  );
}
