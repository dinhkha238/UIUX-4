import { viVN } from '@mui/x-data-grid';

const url = 'http://localhost:3000';

let dataGridLocaleText = viVN.components.MuiDataGrid.defaultProps.localeText;

dataGridLocaleText.filterOperatorAfter = 'Sau';
dataGridLocaleText.filterOperatorBefore = 'Trước';
dataGridLocaleText.filterOperatorOnOrAfter = 'Bằng hoặc sau';
dataGridLocaleText.filterOperatorOnOrBefore = 'Bằng hoặc trước';

export { url, dataGridLocaleText };
