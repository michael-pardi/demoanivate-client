export const RedditHomepageFetch = async () => {
    let url = "https://www.reddit.com/.json";

    return fetch(url);
};

export default RedditHomepageFetch;