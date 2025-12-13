import { BarChart } from '@mui/x-charts/BarChart';
import Box from '../../default/Box/Box';

const BarReport = ({sxBox, ...props}) => {
  return (
    <Box sx={{ 
        width: '100%', 
        height: 300,
        ...sxBox
    }}>
      <BarChart
        {...props}
      />
    </Box>
  );
}

export default BarReport;
