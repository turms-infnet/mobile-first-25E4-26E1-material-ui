import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { value: 400, color: '#5D87FF' },
    { value: 300, color: '#64c8ff' },
];

const settings = {
    margin: { right: 5 },
    width: 200,
    height: 200,
    hideLegend: true,
    hideTooltip: true,
};

const PieReport = () => {
    return (
        <PieChart
            series={[{ innerRadius: 80, outerRadius: 60, data, arcLabel: 'value' }]}
            {...settings}
        />
    );
}

export default PieReport;