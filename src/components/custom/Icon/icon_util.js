import app_icon from '../../../assets/image/icons/app.svg';
import ecommerce_icon from '../../../assets/image/icons/ecommerce.svg';
import contact_icon from '../../../assets/image/icons/contact.svg';
import blog_icon from '../../../assets/image/icons/blog.svg';
import chat_icon from '../../../assets/image/icons/chat.svg';
import user_icon from '../../../assets/image/icons/user.svg';
import note_icon from '../../../assets/image/icons/note.svg';
import calendar_icon from '../../../assets/image/icons/calendar.svg';
import clients_icon from '../../../assets/image/icons/clients.svg';
import connect_icon from '../../../assets/image/icons/connect.svg';
import events_icon from '../../../assets/image/icons/events.svg';
import employee_icon from '../../../assets/image/icons/employee.svg';
import payments_icon from '../../../assets/image/icons/payments.svg';
import projects_icon from '../../../assets/image/icons/projects.svg';

import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

const getUrlIcon = (name) => {
    switch (name) {
        case 'app':
            return app_icon;
        case 'ecommerce':
            return ecommerce_icon;
        case 'contact':
            return contact_icon;
        case 'blog':
            return blog_icon;
        case 'chat':
            return chat_icon;
        case 'user':
            return user_icon;
        case 'note':
            return note_icon;
        case 'calendar':
            return calendar_icon;
        case 'clients':
            return clients_icon;
        case 'connect':
            return connect_icon;
        case 'events':
            return events_icon;
        case 'employee':
            return employee_icon;
        case 'payments':
            return payments_icon;
        case 'projects':
            return projects_icon;
        default:
            return null;
    }
}

const getMuiIcon = (name, color) => {
    switch (name) {
        case 'settings':
            return <SettingsIcon sx={{
                color: color || 'black'
            }} />;
        case 'logout':
            return <LogoutIcon sx={{
                color: color || 'black'
            }} />;
        case 'home':
            return <HomeIcon sx={{
                color: color || 'black'
            }} />;
    }
}

const getIcon = (name, color) => {
    const url = getUrlIcon(name);

    return url ? <img src={url} alt={name} /> : getMuiIcon(name, color);
};

export default getIcon;