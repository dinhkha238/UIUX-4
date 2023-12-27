import {
  DataGrid,
  GridToolbar,
  GridActionsCellItem,
  GridRowParams,
  GridColDef,
  viVN,
  GridValueGetterParams,
} from '@mui/x-data-grid';

import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import * as yup from 'yup';

import {
  getRequestsByUserId,
  GetRequestsByUserIdResponse,
} from '../../../api/request/getRequestByUserId';

import { RequestFull } from '../../../api/request/types';

import { dataGridLocaleText } from '../../../config/constants';
import { getRequests } from '../../../api/request/getRequests';
import { CheckCircleOutlined, CancelOutlined } from '@mui/icons-material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Alert,
  Snackbar,
  Typography,
  Box,
  IconButton,
  Grid,
} from '@mui/material';
import { useFormik } from 'formik';
import { useLocalStorage } from '@uidotdev/usehooks';
import { User } from '../../../api/user/types';

import {
  GetInvoiceApartmentsResponse,
  getInvoiceApartments,
} from '../../../api/invoice-apartment/getInvoiceApartments';
import { InvoiceApartmentFull } from '../../../api/invoice-apartment/types';

import { formatCurrency } from '../../../util/currencyFormatter';

import { useTheme } from '@mui/material';

import { Visibility } from '@mui/icons-material';

const InvoiceStatusMap = {
  paid: 'Đã thanh toán',
  unpaid: 'Chưa thanh toán',
};

export default function InvoiceTable() {
  const navigate = useNavigate();

  const [invoices, setInvoices] = useState<GetInvoiceApartmentsResponse>([]);
  const theme = useTheme();

  const columns: GridColDef<InvoiceApartmentFull>[] = [
    { field: 'id', headerName: 'ID', flex: 0.05 },
    {
      field: 'type',
      headerName: 'Loại',
      flex: 0.1,
      valueGetter: (params) => params.row.Invoice.name,
    },
    {
      field: 'description',
      headerName: 'Mô tả',
      flex: 0.1,
    },
    {
      field: 'amount',
      headerName: 'Số tiền',
      flex: 0.1,
      valueFormatter: (params) => {
        return formatCurrency(params.value, 'vi-VN', 'VND');
      },
    },
    {
      field: 'startDate',
      headerName: 'Ngày bắt đầu',
      flex: 0.1,
      type: 'date',
      valueGetter: (params) => new Date(params.row.startDate),
      valueFormatter: (params) => params.value?.toLocaleDateString('vi-VN'),
    },
    {
      field: 'endDate',
      headerName: 'Ngày kết thúc',
      flex: 0.1,
      type: 'date',
      valueGetter: (params) => new Date(params.row.endDate),
      valueFormatter: (params) => params.value?.toLocaleDateString('vi-VN'),
    },
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
    {
      field: 'paidDate',
      headerName: 'Ngày thanh toán',
      flex: 0.1,
      type: 'date',
      valueGetter: (params) => params.row.paidDate && new Date(params.row.paidDate),
      valueFormatter: (params) => params.value?.toLocaleDateString('vi-VN'),
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      flex: 0.1,
      // @ts-ignore
      valueGetter: (params) => InvoiceStatusMap[params.row.status],
      cellClassName: (params) => params.row.status,
    },
    {
      field: 'view',
      type: 'actions',
      flex: 0.1,
      // @ts-ignore
      getActions: (params) => {
        return [
          <GridActionsCellItem key='view' icon={<Visibility />} label='Xem' onClick={() => {}} />,
        ];
      },
    },
  ];

  useEffect(() => {
    const fetchRequests = async () => {
      let invoices = await getInvoiceApartments();

      setInvoices(invoices);
    };

    fetchRequests();
  }, []);

  return (
    <>
      <DataGrid
        sx={{
          '& .paid': { color: theme.palette.success.main },
          '& .unpaid': { color: theme.palette.error.main },
        }}
        autoPageSize
        rows={invoices}
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
        localeText={dataGridLocaleText}
        slots={{ toolbar: GridToolbar }}
      />
    </>
  );
}
