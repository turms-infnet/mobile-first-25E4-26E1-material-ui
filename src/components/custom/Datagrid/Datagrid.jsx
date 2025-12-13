import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Datagrid = ({sxBox, ...props}) => {
  return (
    <Box sx={{ height: 400, width: '100%', ...sxBox }}>
      <DataGrid
        {...props}
      />
    </Box>
  );
}

export default Datagrid;