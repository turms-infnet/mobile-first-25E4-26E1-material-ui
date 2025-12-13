import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';

const ItemAvatar = ({title,subtitle,image}) => {
  return <ListItem sx={{padding: 0}}>
        <ListItemAvatar>
          <Avatar>
            <Avatar alt={title} src={image} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={title} secondary={subtitle} />
      </ListItem>
}

export default ItemAvatar;