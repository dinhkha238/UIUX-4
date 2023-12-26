// @ts-nocheck

import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import PaymentIcon from '@mui/icons-material/Payment';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Box,
  InputAdornment,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';

const STATUS_COLORS = {
  UNPAID: '#F44336',
  PAID: '#4CAF50',
};

const STATUSES = {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
};

const rows = [
  {
    id: 1,
    invoice: 'INV0123',
    member: 'Ngo Lam',
    building: 'R1',
    unit: '1035',
    chargeType: 'Maintenance',
    totalAmount: '$ 159',
    dueAmount: '$ 159',
    paidAmount: '$ 0',
    status: STATUSES.UNPAID,
  },
  {
    id: 2,
    invoice: 'INV01234',
    member: 'Ngo Lam',
    building: 'R1',
    unit: '1035',
    chargeType: 'Maintenance',
    totalAmount: '$ 159',
    dueAmount: '$ 159',
    paidAmount: '$ 0',
    status: STATUSES.UNPAID,
  },
];

const getStatusInfo = (status) => {
  let color = STATUS_COLORS.UNPAID;
  let text = 'Chưa trả';

  switch (status) {
    case STATUSES.PAID:
      color = STATUS_COLORS.PAID;
      text = 'Đã trả';
      break;
    default:
      break;
  }

  return {
    color,
    text,
  };
};

const ResidentInvoice = () => {
  const [dataModal, setDataModal] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSetAnchorEl = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const columns = [
    { field: 'invoice', headerName: 'Mã hóa đơn', flex: 1 },
    { field: 'member', headerName: 'Thành viên', flex: 1 },
    { field: 'building', headerName: 'Công trình', flex: 1 },
    { field: 'unit', headerName: 'Đơn vị', flex: 1 },
    { field: 'chargeType', headerName: 'Loại phí', flex: 1 },
    { field: 'totalAmount', headerName: 'Tổng cộng', flex: 1 },
    { field: 'dueAmount', headerName: 'Số tiền đến hạn', flex: 1 },
    { field: 'paidAmount', headerName: 'Số tiền thanh toán', flex: 1 },
    {
      field: 'status',
      headerName: 'Trạng thái',
      flex: 1,
      renderCell: (params) => {
        const statusInfo = getStatusInfo(params.value);

        return (
          <Typography variant='span' color={statusInfo.color}>
            {statusInfo.text}
          </Typography>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Tùy chỉnh',
      flex: 1,
      renderCell: ({ row }) => {
        const closeMenu = () => setAnchorEl(null);

        const handleSetDataModal = () => {
          closeMenu();
          setDataModal({
            invoice: row.invoice,
            member: row.member,
            building: row.building,
            unit: row.unit,
            chargeType: row.chargeType,
            totalAmount: row.totalAmount,
            dueAmount: row.dueAmount,
            paidAmount: row.paidAmount,
            status: row.status,
          });
        };

        return (
          <>
            <MoreVertSharpIcon
              onClick={(e) => {
                handleSetAnchorEl(e);
              }}
              sx={{ cursor: 'pointer' }}
            />
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={!!anchorEl}
              onClose={closeMenu}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleSetDataModal}>
                <ListItemIcon>
                  <VisibilityIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText>Xem</ListItemText>
              </MenuItem>
              <MenuItem onClick={closeMenu}>
                <ListItemIcon>
                  <PaymentIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText>Thanh toán</ListItemText>
              </MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Box>
        <Typography
          variant='h1'
          fontSize={40}
          fontWeight={600}
          borderBottom={1}
          p={3}
          borderColor='rgba(0, 0, 0, 0.12)'
        >
          Phí
        </Typography>

        <Box px={3} mt={4} display='flex' alignItems='center' justifyContent='flex-end' gap={2}>
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

      <Modal
        open={!!dataModal}
        onClose={() => setDataModal(null)}
        aria-labelledby='modal-modal-invoice'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 800,
            bgcolor: 'background.paper',
            borderRadius: 2,
            p: 4,
          }}
        >
          <Typography fontWeight={600} variant='h3' fontSize={20}>
            Thông báo
          </Typography>

          <Stack spacing={3} mt={4}>
            <Stack direction='row' spacing={2} sx={{ '& > :not(style)': { flex: 1 } }}>
              <TextField
                label='Mã hóa đơn'
                defaultValue={dataModal?.invoice}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label='Tên thành viên'
                defaultValue={dataModal?.member}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Stack>
            <Stack direction='row' spacing={2} sx={{ '& > :not(style)': { flex: 1 } }}>
              <TextField
                label='Công trình'
                defaultValue={dataModal?.building}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label='Đơn vị'
                defaultValue={dataModal?.unit}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Stack>
            <Stack direction='row' spacing={2} sx={{ '& > :not(style)': { flex: 1 } }}>
              <TextField
                label='Loại phí'
                defaultValue={dataModal?.chargeType}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label='Tổng số tiền ($)'
                defaultValue={dataModal?.totalAmount}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Stack>
            <Stack direction='row' spacing={2} sx={{ '& > :not(style)': { flex: 1 } }}>
              <TextField
                label='Số tiền đến hạn ($)'
                defaultValue={dataModal?.dueAmount}
                InputProps={{
                  readOnly: true,
                }}
              />
              <TextField
                label='Số tiền đã trả ($)'
                defaultValue={dataModal?.paidAmount}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default ResidentInvoice;
