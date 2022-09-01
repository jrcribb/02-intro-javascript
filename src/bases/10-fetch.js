process.removeAllListeners('warning');

const giphyApiKey = 'je1NNuZ8B2VB7CQDXOaeochJdDWlG2W2';
const giphyURL =`http://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey }`;
console.log(giphyURL);
const peticion = fetch(giphyURL);

peticion
    .then ( resp=> resp.json())
    .then ( ({data}) => {
        const url = data.user.avatar_url;
        console.log( url);
        //document.body.append(url);
    })
    .catch( console.warn);