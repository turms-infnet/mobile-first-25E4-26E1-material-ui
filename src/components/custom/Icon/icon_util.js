import app_icon from '../../../assets/image/icons/app.svg';
import ecommerce_icon from '../../../assets/image/icons/ecommerce.svg';
import contact_icon from '../../../assets/image/icons/contact.svg';

const getUrlIcon = (name) => {
    switch (name) {
        case 'app':
            return app_icon;
        case 'ecommerce':
            return ecommerce_icon;
        case 'contact':
            return contact_icon;
        default:
            return app_icon;
    }
}

const getIcon = (name) => {
    return <img src={getUrlIcon(name)} alt={name} />;
};

export default getIcon;