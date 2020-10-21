import React from 'react';

function Image(props) {
    const { imageSrc, altText, showImageModal, index } = props;
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="rounded-lg overflow-hidden px-0" onClick={() => showImageModal(index)}>
                    <img src={imageSrc} alt={altText} className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Image;