// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YoutubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        }
    }

    updateBitRate = () => {
        this.setState({
            settings: {
            ...this.state.settings, bitrate: 12
        }
        })
               
    }

    updateResolution = () => {
        this.setState({
            settings: {
            ...this.state.settings, 
            video: {resolution: '720p'}}
            })
    }

    render() {
        return(
            <div>
                <button className="resolution" onClick={this.updateResolution}>RESOLUTION BUTTON</button>
                <button className="bitrate" onClick={this.updateBitRate}>BITRATE BUTTON</button>
            </div>
        )
    }

    
}


export default YoutubeDebugger