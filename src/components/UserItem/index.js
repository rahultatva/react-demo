import React from 'react';
import { Card, CardContent, CardMedia, Typography, Icon } from '@material-ui/core';
import { useStyles } from './style';

//This compopent is used to render card view of users
export const UserItem = props =>{
    const { userData } = props; 
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>                
            <CardMedia
                className={classes.media}
                image={userData.picture.large}
                title=""
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {`${userData.name.title} ${userData.name.first} ${userData.name.last}`}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Icon color="secondary">email</Icon>{userData.email}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <Icon color="secondary">location_on</Icon>{`${userData.location.city}, ${userData.location.state}`}
                </Typography>
            </CardContent>                
            </Card>    
        </>
    );
}