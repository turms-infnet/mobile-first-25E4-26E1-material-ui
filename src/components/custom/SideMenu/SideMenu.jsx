import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Box from "../../default/Box/Box";
import Divider from "../../default/Divider/Divider";
import Icon from "../Icon/Icon";
import Typography from "../../default/Typography/Typography";

const createDrawerList = (items) => {
    return items && items.length > 0 ? items.map((item, index) => {
        return  <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => {
                        alert(item.navigate)
                    }}>
                        <ListItemIcon><Icon name={item.icon} /></ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItemButton>
                </ListItem>
    }) : null;
}

const SideMenu = (props) => {
    return  <Drawer open={props.menuVisibility} onClose={() => props.toggleDrawer(!props.menuVisibility)}>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        padding: '12px',
                        display: { xs: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        }}
                    >
                    <img src={props.logo} alt="logo" style={{ height: 30, marginRight: 10 }} />
                    Dashboard
                </Typography>
                <Divider />
                <Box sx={{ width: 250 }} role="presentation" onClick={() => props.toggleDrawer(!props.menuVisibility)}>
                    <List>
                        {createDrawerList(props.items)}
                    </List>
                    <Divider />
                    <List>
                        {createDrawerList(props.lastItems)}
                    </List>
                </Box>
            </Drawer>
};

export default SideMenu;