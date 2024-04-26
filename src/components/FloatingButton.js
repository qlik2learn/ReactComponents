import React from 'react';
import '../styles/FloatingButton.css';

const DownloadButton = () => {
    return (
        <div>
            <div className="container">
                <div className="btn-group">
                    <span></span>
                    <button className="btn"><i className="material-icons md-48">home</i>
                    </button>
                    <button className="btn"><i className="material-icons">settings</i>
                    </button>
                    <button className="btn"><i className="material-icons">logout</i>
                    </button>
                    <button className="btn"><i className="material-icons">help</i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DownloadButton;
