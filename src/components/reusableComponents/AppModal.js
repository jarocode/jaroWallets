import React from "react";
import { Modal } from "antd";

const AppModal = ({
  isModalVisible,
  handleCancel,
  content,
  closable = true,
}) => {
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onCancel={handleCancel}
      title=""
      footer=""
      closable={closable}
    >
      {content}
    </Modal>
  );
};

export default AppModal;
