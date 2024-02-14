const axios = require('axios').default;
var accessToken = '';

const options = {
    url: 'https://id.twitch.tv/oauth2/token',
    json: true,
    body: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'client_credentials'
    }
};


async function getClips() {
    const gameOptions = {
        url: 'https://api.twitch.tv/helix/clips?broadcaster_id=743653066',
        method: 'GET',
        headers: {
            'Client-ID': process.env.CLIENT_ID,
            'Authorization': 'Bearer ' + accessToken
        }
    }
    if (!accessToken) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: 'No Token' })
        }
    } else {
        try {
            const response = await axios.get(gameOptions.url, {
                headers: {
                    'Client-ID': process.env.CLIENT_ID,
                    'Authorization': 'Bearer ' + accessToken
                }
            });
            return response.data
        } catch (error) {
            console.log(error)
            return {
                statusCode: 404,
                body: JSON.stringify({ message: 'No Token' })
            }
        }
    };
}
export default async (req: any, res: any) => {
    if(!accessToken) {
        const response = await axios.post(options.url, options.body);
        accessToken = response.data.access_token;
    }
    const data_ = await getClips();
    res.send([...data_.data]);
}