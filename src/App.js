import React from 'react';
import './App.css';
import { BarReport, Box, Button, CardElement, Chip, Container, Fab, FormControl, Grid, Icon, InputLabel, ItemAvatar, LineReport, MenuItem, Paper, PieReport, Select, SideMenu, Stack, Typography } from './components';
import Appbar from './components/custom/AppBar/AppBar';
import logo from './assets/image/logo.webp';
import Icons from './components/custom/Icon/Icon';
import { lineElementClasses } from '@mui/x-charts';
import Datagrid from './components/custom/Datagrid/Datagrid';

const App = () => {
    const [cardElements, setCardElements] = React.useState([
        { icon: "employee", title: "Funcionários", value: "1500", backgroundColor: "#ecf2ff", color: "#5D87FF" },
        { icon: "clients", title: "Clientes", value: "1200", backgroundColor: "#fef5e5", color: "#FFAE1F" },
        { icon: "projects", title: "Projetos", value: "1200", backgroundColor: "#e8f7ff", color: "#49BEFF" },
        { icon: "events", title: "Eventos", value: "1200", backgroundColor: "#fdede8", color: "#FA896B" },
        { icon: "payments", title: "Pagamentos", value: "1200", backgroundColor: "#e6fffa", color: "#13DEB9" },
        { icon: "connect", title: "Relatórios", value: "1200", backgroundColor: "#ebf3fe", color: "#539BFF" },
    ]);

    const [menuVisibility, setMenuVisibility] = React.useState(false);
    const toggleMenu = (status) => {
        setMenuVisibility(status);
    }

    return <div>
        <Appbar toggleDrawer={toggleMenu} logo={logo} color="white" />
        <SideMenu
            logo={logo}
            menuVisibility={menuVisibility}
            toggleDrawer={toggleMenu}
            items={[
                { title: "App", icon: "app", navigate: '/' },
                { title: "eCommerce", icon: "ecommerce", navigate: '/ecommerce' },
                { title: "Contacts", icon: "contact", navigate: '/contact' },
                { title: "Blog", icon: "blog", navigate: '/blog' },
                { title: "Chat", icon: "chat", navigate: '/chat' },
                { title: "User", icon: "user", navigate: '/user' },
                { title: "Note", icon: "note", navigate: '/note' },
                { title: "Calendar", icon: "calendar", navigate: '/calendar' },
            ]}
            lastItems={[
                { title: "Profile", icon: "user", navigate: '/profile' },
                { title: "Setting", icon: "settings", navigate: '/setting' },
                { title: "Logout", icon: "logout", navigate: '/logout' },
            ]} />
        <Container fixed>
            <Grid container spacing={2}>
                {
                    cardElements.map((card, index) => {
                        return <Grid key={`card_${index}`} item size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
                            <CardElement {...card} />
                        </Grid>
                    })
                }
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: 4, alignItems: 'flex-start' }}>
                <Grid item size={{ xs: 12, md: 8 }}>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Stack justifyContent="space-between" direction="row" spacing={2}>
                            <Paper elevation={0}>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "1.125rem",
                                    }}
                                    variant="h5" gutterBottom>Últimos updates</Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: ".875rem",
                                        color: '#2A3547'
                                    }}
                                    variant="h6" gutterBottom>Overview geral</Typography>
                            </Paper>
                            <Paper elevation={0}>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="label-data-select">Data</InputLabel>
                                    <Select
                                        labelId="label-data-select"
                                        label="Data">
                                        <MenuItem value={10}>Outubro 2025</MenuItem>
                                        <MenuItem value={11}>Novembro 2025</MenuItem>
                                        <MenuItem value={12}>Dezembro 2025</MenuItem>
                                    </Select>
                                </FormControl>
                            </Paper>
                        </Stack>
                        <Grid container spacing={2}>
                            <Grid item size={{ xs: 12, md: 7, lg: 8.5 }}>
                                <BarReport
                                    sxBox={{
                                        height: 327,
                                    }}
                                    borderRadius={20}
                                    series={[
                                        { data: [2400, 1398, 9800, 3908, -4800, 3800, 4300, -1240, 2004], label: 'pv', minBarSize: 5, color: '#7599ff' },
                                        { data: [4000, 3000, -2000, -2780, 1890, -2390, 3490, 1500, 2403], label: 'uv', minBarSize: 5, color: '#64c8ff' },
                                    ]}
                                    xAxis={[{
                                        data: [
                                            '01/12/25',
                                            '02/12/25',
                                            '03/12/25',
                                            '04/12/25',
                                            '05/12/25',
                                            '06/12/25',
                                            '07/12/25',
                                            '08/12/25',
                                            '09/12/25'
                                        ],
                                    }]}
                                    yAxis={[{ width: 60, max: 10000 }]}
                                    grid={{
                                        horizontal: true,
                                        vertical: false
                                    }}
                                    sx={{
                                        "& .MuiChartsGrid-root line": {
                                            strokeDasharray: "3 3",
                                            stroke: "#747474ff",
                                            opacity: 0.4,
                                        },
                                        "& .MuiChartsAxis-line": {
                                            display: "none",
                                        },
                                        "& .MuiChartsAxis-tick": {
                                            display: "none",
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, md: 5, lg: 3.5 }}>
                                <Stack direction="column" justifyContent="space-between" direction="column" sx={{
                                    height: "100%",
                                }}>
                                    <Box>
                                        <Stack spacing={2} justifyContent="flex-start" direction="row" sx={{ marginTop: 2 }}>
                                            <Icon name="appsIcon" color="#5D87FF" sx={{ marginTop: '4px !important' }} />
                                            <Box>
                                                <Typography variant="h3" sx={{
                                                    fontSize: "1.2rem",
                                                    fontWeight: 600
                                                }}>R$ 54.000,00</Typography>
                                                <Typography variant="h6" sx={{
                                                    fontSize: "0.775rem",
                                                    fontWeight: 400,
                                                    color: '#2A3547'
                                                }}>Receita total</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack spacing={2} justifyContent="flex-start" direction="row" sx={{ marginTop: 4 }}>
                                            <Icon name="paid" color="#5D87FF" sx={{ marginTop: 1.5 }} />
                                            <Box>
                                                <Typography variant="h6" sx={{
                                                    fontSize: "0.775rem",
                                                    fontWeight: 400,
                                                    color: '#2A3547'
                                                }}>Entrada</Typography>
                                                <Typography variant="h3" sx={{
                                                    fontSize: "1.2rem",
                                                    fontWeight: 600
                                                }}>R$ 44.000,00</Typography>
                                            </Box>
                                        </Stack>
                                        <Stack spacing={2} justifyContent="flex-start" direction="row" sx={{ marginTop: 2 }}>
                                            <Icon name="paid" color="#64c8ff" sx={{ marginTop: '4px !important' }} />
                                            <Box>
                                                <Typography variant="h6" sx={{
                                                    fontSize: "0.775rem",
                                                    fontWeight: 400,
                                                    color: '#2A3547'
                                                }}>Saída</Typography>
                                                <Typography variant="h3" sx={{
                                                    fontSize: "1.2rem",
                                                    fontWeight: 600
                                                }}>R$ 10.000,00</Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                    <Button variant="contained" sx={{ marginTop: 4 }} >Ver relatório completo</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item size={{ xs: 12, md: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12 }}>
                            <Paper elevation={1} sx={{ padding: 2 }}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Stack direction="column">
                                        <Typography variant="h5" sx={{
                                            fontSize: "1.125rem",
                                            fontWeight: 600
                                        }}>Anual</Typography>
                                        <Stack direction="column" spacing={1} sx={{ marginTop: 2 }}>
                                            <Typography variant="h6" sx={{
                                                fontSize: "1.5rem",
                                                fontWeight: 600
                                            }}>R$ 145.000,00</Typography>
                                            <Stack direction="row" sx={{ marginTop: 2 }}>
                                                <Icons name="outboundIcon" color="#e6fffa" sx={{
                                                    backgroundColor: "#39b69a",
                                                    borderRadius: "100%",
                                                    border: "none"
                                                }} />
                                                <Stack direction="row" sx={{ marginLeft: 1 }}>
                                                    <Typography variant="body2" sx={{ fontWeight: 400 }}>+9%</Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 400, marginLeft: 2 }}>2024</Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <PieReport
                                        series={[{
                                            innerRadius: 30, outerRadius: 40, data: [
                                                { value: 400, color: '#5D87FF' },
                                                { value: 300, color: '#64c8ff' },
                                            ]
                                        }]}
                                        settings={{
                                            margin: { right: 5 },
                                            width: 200,
                                            height: 200,
                                            hideLegend: true,
                                            hideTooltip: true,
                                        }}
                                    />
                                </Stack>
                                <Stack direction="row" spacing={1} sx={{ marginTop: 2 }}>
                                    <Stack direction="row">
                                        <Icon name="paid" color="#5D87FF" />
                                        <Typography variant="body2" sx={{ fontWeight: 400 }}>2025</Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{ marginLeft: '24px !important' }}>
                                        <Icon name="paid" color="#64c8ff" />
                                        <Typography variant="body2" sx={{ fontWeight: 400 }}>2025</Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Grid>
                        <Grid item size={{ xs: 12 }}>
                            <Paper elevation={1} sx={{ padding: 2, overflow: 'hidden', position: 'relative', height: 200 }}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Stack direction="column">
                                        <Typography variant="h5" sx={{
                                            fontSize: "1.125rem",
                                            fontWeight: 600
                                        }}>Mês a mês</Typography>
                                        <Stack direction="column" spacing={1} sx={{ marginTop: 2 }}>
                                            <Typography variant="h6" sx={{
                                                fontSize: "1.5rem",
                                                fontWeight: 600
                                            }}>R$ 25.000,00</Typography>
                                            <Stack direction="row" sx={{ marginTop: 2 }}>
                                                <Icons name="outboundIcon" color="#fdede8" sx={{
                                                    backgroundColor: "#fa896b",
                                                    borderRadius: "100%",
                                                    border: "none",
                                                    transform: 'rotate(180deg) scaleX(-1)',
                                                }} />
                                                <Stack direction="row" sx={{ marginLeft: 1 }}>
                                                    <Typography variant="body2" sx={{ fontWeight: 400 }}>+9%</Typography>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Fab sx={{
                                        backgroundColor: '#49beff',
                                        boxShadow: 'none',
                                        '&:hover': {
                                            backgroundColor: '#33aaff',
                                        }
                                    }}
                                        size="small">
                                        <Icon name="attachMoneyIcon" color="#ffffff" />
                                    </Fab>
                                </Stack>
                                <LineReport
                                    sxBox={{
                                        position: 'absolute',
                                        bottom: '-45px',
                                        left: '-65px',
                                        width: 'calc(100% + 89px)',
                                    }}
                                    height={120}
                                    series={[{ data: [4000, 3000, 2000, 2780, 1890, 2390, 3490], type: 'line', label: 'uv', area: true, stack: 'total', showMark: false, color: '#7599ff' }]}
                                    xAxis={[{
                                        scaleType: 'point', data: [
                                            'Page A',
                                            'Page B',
                                            'Page C',
                                            'Page D',
                                            'Page E',
                                            'Page F',
                                            'Page G',
                                        ]
                                    }]}
                                    margin={{ right: 24 }}
                                    sx={{
                                        display: 'none',
                                    }}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ marginTop: 4, marginBottom: 4 }}>
                <Grid item size={{ xs: 12 }}>
                    <Paper elevation={1} sx={{ padding: 2 }}>
                        <Datagrid
                            rowHeight={64}
                            rows={[
                                { funcionario: { title: 'Tiago', subtitle: 'Developer', image: "https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg" }, project: "Projeto 1", id: 1, status: { label: "Trabalhando", color: "info" }, budget: "R$ 1000,00" },
                                { funcionario: { title: 'Mário', subtitle: 'Developer', image: "https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg" }, project: "Projeto 1", id: 2, status: { label: "Trabalhando", color: "info" }, budget: "R$ 1000,00" },
                                { funcionario: { title: 'Júlio', subtitle: 'Developer', image: "https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg" }, project: "Projeto 3", id: 3, status: { label: "Trabalhando", color: "info" }, budget: "R$ 1000,00" },
                                { funcionario: { title: 'Felipe', subtitle: 'Developer', image: "https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg" }, project: "Projeto 4", id: 4, status: { label: "Férias", color: "success" }, budget: "R$ 1000,00" },
                                { funcionario: { title: 'João', subtitle: 'Developer', image: "https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg" }, project: "Projeto 1", id: 5, status: { label: "Aviso", color: "error" }, budget: "R$ 1000,00" },
                                { funcionario: { title: 'Teófilo', subtitle: 'Developer', image: "https://modernize-nextjs.adminmart.com/images/profile/user-4.jpg" }, project: "Projeto 2", id: 6, status: { label: "Férias", color: "success" }, budget: "R$ 1000,00" },
                                { funcionario: { title: 'Jairo', subtitle: 'Developer', image: "https://modernize-nextjs.adminmart.com/images/profile/user-2.jpg" }, project: "Projeto 2", id: 7, status: { label: "Trabalhando", color: "info" }, budget: "R$ 1000,00" },
                                { funcionario: { title: 'Gabriel', subtitle: 'Developer', image: "https://modernize-nextjs.adminmart.com/images/profile/user-1.jpg" }, project: "Projeto 5", id: 8, status: { label: "Trabalhando", color: "info" }, budget: "R$ 1000,00" },
                                { funcionario: { title: 'Benício', subtitle: 'Developer', image: "https://modernize-nextjs.adminmart.com/images/profile/user-3.jpg" }, project: "Projeto 5", id: 9, status: { label: "Trabalhando", color: "info" }, budget: "R$ 1000,00" }
                            ]}
                            columns={[
                                {
                                    field: 'funcionario', headerName: 'Funcionário', width: 200, renderCell: (params) => (
                                        <ItemAvatar
                                            title={params.row.funcionario.title}
                                            subtitle={params.row.funcionario.subtitle}
                                            image={params.row.funcionario.image}
                                        />
                                    )
                                },
                                {
                                    field: 'project', headerName: 'Projeto', width: 200
                                },
                                {
                                    field: 'status', headerName: 'Status', width: 300, renderCell: (params) => (
                                        <Chip label={params.row.status.label} color={params.row.status.color} />
                                    )
                                },
                                {
                                    field: 'budget', headerName: 'Budget', width: 300
                                }
                            ]}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 5,
                                    },
                                },
                            }}
                            pageSizeOptions={[5]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    </div>
}

export default App;