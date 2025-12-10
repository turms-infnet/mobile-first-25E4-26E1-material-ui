import React from 'react';
import './App.css';
import { BarReport, Box, Button, Card, CardElement, Container, FormControl, Grid, Icon, InputLabel, MenuItem, Paper, PieReport, Select, SideMenu, Stack, Typography } from './components';
import Appbar from './components/custom/AppBar/AppBar';
import logo from './assets/image/logo.webp';
import Icons from './components/custom/Icon/Icon';

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
            <Grid container spacing={2} sx={{ marginTop: 4, alignItems: 'center' }}>
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
                                        ]
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
                                    <PieReport />
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
                            <Paper elevation={1} sx={{ padding: 2 }}>A</Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>
}

export default App;