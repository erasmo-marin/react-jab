import React from 'react'

class Card extends React.Component {
    render() {
        const { title, description } = this.props

        return (
            <div className="card">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        )
    }
}

export default Card
