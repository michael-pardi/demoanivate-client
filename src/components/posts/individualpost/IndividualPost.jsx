import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography, useTheme} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto'
    },
    content: {
        flex: '1 0 auto',
        textAlign: 'center'
    },
    cover: {
        width: 151,
        padding: '1%'
    },
}));

export const IndividualPost = ({id, title, username, date, preview, link}) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            <CardActionArea target="_blank" href={"https://www.reddit.com" + link}>
                <Card className={classes.root}>
                    <CardMedia
                        component="img"
                        className={classes.cover}
                        image={preview}
                        title="Reddit Preview"
                    />
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {new Date(date * 1000).toDateString()}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {username}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </div>
    );
}

export default IndividualPost;