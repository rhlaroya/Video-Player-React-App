import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search',{
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: 'AIzaSyAUA7lK78fFBBr2XQBDpQFtxm0H-4fjIts',
                q: term
            }
        });

        this.setState({ videos: response.data.items })
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video})
    }



    render() {
       return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
           
       )
    }
}

export default App;