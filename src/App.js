import React from 'react';
import './App.css';
import { Card, CardElement, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, SideMenu, Stack, Typography } from './components';
import Appbar from './components/custom/AppBar/AppBar';
import logo from './assets/image/logo.webp';

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
                <Grid item size={{ xs: 12, sm: 8 }}>
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
                    </Paper>
                </Grid>
                <Grid item size={{ xs: 12, sm: 4 }}>
                    <Grid container spacing={2}>
                        <Grid item size={{ xs: 12 }}>
                            <Paper elevation={1} sx={{ padding: 2 }}></Paper>
                        </Grid>
                        <Grid item size={{ xs: 12 }}>
                            <Paper elevation={1} sx={{ padding: 2 }}></Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>
}

export default App;