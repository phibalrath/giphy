import React from 'react'

class SearchChild extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <img src={this.props.data.images.fixed_height.url} />
            </div>
        )
    }

}

export default SearchChild;