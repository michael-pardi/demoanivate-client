export const CryptoFetch = async (target) => {
    let url = "https://data.messari.io/api/v1/assets/" + target + "/metrics";

    return fetch(url);
};

 export default CryptoFetch;