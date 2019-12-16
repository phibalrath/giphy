import React from 'react'

class TrendingChild extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.data)
    }
    
  
    render() {
        return (
            <div>
                <img src={this.props.data.images.fixed_height.url} />
            </div>
        )
    }
}

export default TrendingChild;