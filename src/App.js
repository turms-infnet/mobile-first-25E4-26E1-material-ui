import React from 'react';
import './App.css';
import { SideMenu } from './components';
import Appbar from './components/custom/AppBar/AppBar';
import logo from './assets/image/logo.webp';

const App = () => {
    const [menuVisibility, setMenuVisibility] = React.useState(false);
    const toggleMenu = (status) => {
        setMenuVisibility(status);
    }

    return <div>
        {/* <Button onClick={() => toggleMenu(!menuVisibility)}>
            Abrir
        </Button> */}
        <Appbar toggleDrawer={toggleMenu} logo={logo} color="white" />
        <SideMenu
            logo={logo}
            menuVisibility={menuVisibility}
            toggleDrawer={toggleMenu}
            items={[
                { title: "App", icon: "app", navigate: '/' },
                { title: "eCommerce", icon: "ecommerce", navigate: '/ecommerce' },
                { title: "Contacts", icon: "contact", navigate: '/contact' },
                { title: "Blog", icon: "app", navigate: '/blog' },
                { title: "Chat", icon: "app", navigate: '/chat' },
                { title: "User", icon: "app", navigate: '/user' },
                { title: "Note", icon: "app", navigate: '/note' },
                { title: "Calendar", icon: "app", navigate: '/calendar' },
                { title: "Blog", icon: "app", navigate: '/blog' },
            ]}
            lastItems={[
                { title: "Profile", icon: "app", navigate: '/profile' },
                { title: "Setting", icon: "app", navigate: '/setting' },
                { title: "Logout", icon: "app", navigate: '/logout' },
            ]} />
    </div>
}

export default App;