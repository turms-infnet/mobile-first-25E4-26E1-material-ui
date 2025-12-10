import { BarChart } from '@mui/x-charts/BarChart';
import Box from '../../default/Box/Box';

const BarReport = (props) => {
  return (
    <Box sx={{ 
        width: '100%', 
        height: 300,
        ...props.sxBox
    }}>
      <BarChart
        {...props}
      />
    </Box>
  );
}

export default BarReport;
