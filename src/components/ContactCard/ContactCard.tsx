import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Container, UserAvatar, UserName } from './ContactCard.styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const img = 'https://avatars.githubusercontent.com/u/16616459?v=4';

const ContactCard: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <CardContent>
        <UserAvatar src={img} alt="Jonatas de Oliveira Coelho" />
        <UserName>Jonatas de Oliveira Coelho</UserName>
        <Typography className={classes.pos} color="textSecondary">
          <strong>Contact: </strong> 55 61981200652
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <strong>Email: </strong> jonatas.oliveiracoelho@gmail.com
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Container>
  );
};

export default ContactCard;
