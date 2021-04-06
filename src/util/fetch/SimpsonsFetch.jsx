export const SimpsonsFetch = async () => {
    let url = "https://simpsons-quotes-api.herokuapp.com/quotes";

    return fetch(url);
};

 export default SimpsonsFetch;