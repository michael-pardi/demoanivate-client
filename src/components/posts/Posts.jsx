import React, {useEffect, useState} from 'react';
import {CircularProgress, Container, Grid, makeStyles} from '@material-ui/core';
import {IndividualPost} from './individualpost/IndividualPost';
import {RedditHomepageFetch} from '../../util/fetch/RedditHomepageFetch';

const useStyles = makeStyles((theme) => ({
    posts: {
        textAlign: 'center',
        marginBottom: '2%'
    }
}));

export const Posts = () => {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [redditData, setRedditData] = useState([]);

    useEffect(() => {
        RedditHomepageFetch()
            .then(response => response.json())
            .then(data => {
                setRedditData(data.data.children);
                setIsLoading(false);
            });
    }, []);

    return (
        <div style={{marginTop: "25px"}}>
            {isLoading &&
            <div style={{
                position: 'absolute', left: '50%', top: '30%',
                transform: 'translate(-50%, -50%)'
            }}>
                <CircularProgress size={100}/>
            </div>
            }
            {!isLoading &&
            <Container maxWidth="xl">
                {redditData.map((data, key) => {
                    return <div key={key}>
                        <Grid div spacing={0} direction="column" justify="center" alignItems="stretch"
                              className={classes.posts}>
                            <IndividualPost id={data.data.id} title={data.data.title} username={data.data.author}
                                            date={data.data.created_utc} preview={data.data.thumbnail} link={data.data.permalink}></IndividualPost>
                        </Grid>
                    </div>
                })}
            </Container>
            }
        </div>
    );
};

export default Posts;