import React from 'react';
import './SelectedBeast.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render() {
    return(
      <>
        <Modal show={this.props.shouldShowModal} onHide={this.props.hideModal} >
          <Modal.Header closeButton >{this.props.currentBeast.title}</Modal.Header>
          <Modal.Body>
            {this.props.currentBeast.description}
            <img src={this.props.currentBeast.image_url}  alt={this.props.currentBeast.title}/>
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default SelectedBeast;