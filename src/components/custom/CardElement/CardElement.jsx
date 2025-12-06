import { Icon } from "../..";
import Card from "../../default/Card/Card"
import Typography from "../../default/Typography/Typography"

const CardElement = ({icon, title, value, backgroundColor, color}) => {
    return  <Card sx={{
        backgroundColor: backgroundColor,
        textAlign: 'center',
        padding: '24px',
        boxShadow: 'none',
    }}>
                <Icon name={icon} />
                <Typography sx={{
                    color: color,
                    fontSize: "0.875rem",
                    fontWeight: 600
                }} variant="subtitle1" gutterBottom>{title}</Typography>
                <Typography sx={{
                    color: color,
                    fontSize: "1.3125rem",
                    fontWeight: 600
                }}  variant="h4" gutterBottom>{value}</Typography>
            </Card>
}

export default CardElement;