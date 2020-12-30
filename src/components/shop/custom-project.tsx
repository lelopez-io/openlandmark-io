import React from 'react'

const CustomProject = () => (
    <div className="purchase-card card-dark">
        <div className="purchase-card-content">
            <h1>Custom</h1>
            <p>Feel free to contact us if your project requires custom work.</p>
        </div>

        <button
            role="link"
            onClick={() => (location.href = `mailto:ux@lelopez.io`)}
        >
            Email
        </button>
    </div>
)

export default CustomProject
