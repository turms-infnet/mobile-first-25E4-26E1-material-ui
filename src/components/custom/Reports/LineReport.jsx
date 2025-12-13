import { ChartContainer } from '@mui/x-charts';
import { AreaPlot, lineElementClasses } from '@mui/x-charts/LineChart';
import Box from '../../default/Box/Box';

const LineReport = ({sxBox, ...props}) => {
  return <Box sx={{...sxBox}}>
            <ChartContainer
                {...props}
                sx={{
                    [`& .${lineElementClasses.root}`]: {
                        ...props.sx,
                    },
                }}
            >
            <AreaPlot />
        </ChartContainer>
    </Box>
}

export default LineReport;