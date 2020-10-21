import React, { PureComponent } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Modal.scss';

class MyModal extends PureComponent {
    static propTypes = {
        size: PropTypes.string,
        backdrop: PropTypes.any,
        hideHandler: PropTypes.func,
    }

    render() {
        const { size, backdrop, hideHandler, showModal, headerTitle, keyboard } = this.props;
        let { dialogClassName } = this.props;
        dialogClassName = dialogClassName || 'myModal';
        const keyboardVal = keyboard || false;
        return (
            <div className="static-modal">
                <Modal bsSize={size} backdrop={backdrop} keyboard={keyboardVal} show={showModal} dialogClassName={dialogClassName} onHide={() => hideHandler()}>
                    {headerTitle && <Modal.Header closeButton>
                        <Modal.Title>
                            {headerTitle}
                        </Modal.Title>
                    </Modal.Header>}
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default MyModal;
