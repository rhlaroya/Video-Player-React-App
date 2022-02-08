import axios from 'axios';

const KEY = 'AIzaSyAUA7lK78fFBBr2XQBDpQFtxm0H-4fjIts';

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
