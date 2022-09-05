process.removeAllListeners('warning');

const giphyApiKey = 'je1NNuZ8B2VB7CQDXOaeochJdDWlG2W2';
const giphyURL =`http://api.giphy.com/v1/gifs/random?api_key=${giphyApiKey }`;
console.log(giphyURL);

const getImagen = async() => {
    try {
        const resp = await fetch(giphyURL);
        const {data} = await resp.json();
        const { url} = data.images.original;
        console.log( url);
    } catch (error) {
        console.error( error);
    }

}
getImagen();
