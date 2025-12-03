import { Button as MuiButton } from '@mui/material';
import { Button as BtButton } from 'react-bootstrap';

const Button = ({children, ...props}) => {
    const isAppleOs = () => {
        const platform = navigator.platform.toLowerCase();

        return platform.includes('mac') || platform.includes('iphone') || platform.includes('ipad');
    }

    const getVariant = (variant) => {
        switch(variant) {
            case 'text':
                return 'link';
            case 'outlined':
                return 'outline-primary';
            case 'contained':
                return 'primary';
            default:
                return 'primary';
        }
    }

    return isAppleOs()
            ? <BtButton 
                {...props}
                variant={getVariant(props.variant)}>{children}</BtButton> 
            : <MuiButton {...props}>{children}</MuiButton>;
};

export default Button;