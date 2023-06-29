import React from "react";
import { Button, Modal } from "reactstrap";

const CustomModal = ({ children, onClick, isOpen, title, style }) => {
  return (
    <Modal className="modal-dialog-centered" isOpen={isOpen} style={style}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          {title}
        </h5>
        <Button
        size="sm"
        color="danger"
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={onClick}
        >
          <span aria-hidden={true}>×</span>
        </Button>
      </div>
      {children}
    </Modal>
  );
};

export default CustomModal;
