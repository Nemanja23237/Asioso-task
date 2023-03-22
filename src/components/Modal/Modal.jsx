import "./Modal.css";
import clip from "../../assets/asioso_bl.mp4";
const Modal = ({ setModalIsOpen }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setModalIsOpen(false)}>
          &times;
        </span>
        <video src={clip} controls></video>
      </div>
    </div>
  );
};

export default Modal;
