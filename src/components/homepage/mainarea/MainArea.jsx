import React from 'react';
import {Button, CircularProgress, Container, Grid, makeStyles, Typography} from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import {CryptoDisplay} from './cryptodisplay/CryptoDisplay';
import {SimpsonsFetch} from "../../../util/fetch/SimpsonsFetch";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    center: {
        textAlign: 'center'
    },
    crypto: {
        textAlign: 'center',
        marginBottom: '2%'
    },
    imgHeight: {
        minHeight: '300px',
        maxHeight: '300px'
    }
}));

export const MainArea = ({
                             quote,
                             image,
                             character,
                             isLoading,
                             imageLoaded,
                             setIsLoading,
                             setImageLoaded,
                             setQuote,
                             setImage,
                             setCharacter,
                             setIsLoadingHome
                         }) => {
    const classes = useStyles();

    const reloadSimpsons = () => {
        setIsLoading(true);
        SimpsonsFetch()
            .then(response => response.json())
            .then(data => {
                setQuote(data[0].quote);
                setImage(data[0].image);
                setCharacter(data[0].character);
                setIsLoading(false);
            });
    }

    return (
        <div style={{marginTop: "25px"}}>
            <Container maxWidth="sm">
                <Grid container spacing={3} direction="column" justify="flex-end" alignItems="stretch"
                      className={classes.crypto}>
                    <CryptoDisplay/>
                </Grid>
            </Container>
            {isLoading &&
            <div style={{
                position: 'absolute', left: '50%', top: '30%',
                transform: 'translate(-50%, -50%)'
            }}>
                <CircularProgress size={100}/>
            </div>
            }
            {!isLoading &&
            <Container maxWidth="sm">
                <Grid container spacing={3} direction="column" justify="flex-end" alignItems="stretch">
                    <Grid item xs className={classes.center}>
                        <img src={image} alt="" className={classes.imgHeight} onLoad={() => setImageLoaded(true)}/>
                        {imageLoaded &&
                        <div>
                            <Typography>"{quote}"</Typography>
                            <Typography align="center">- {character}</Typography>
                        </div>
                        }
                    </Grid>
                    <Grid item xs className={classes.center}>
                        <Button color="primary" aria-label="replay" onClick={reloadSimpsons}>
                            <ReplayIcon fontSize="large"/>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            }
        </div>
    );
};