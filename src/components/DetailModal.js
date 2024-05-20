import React from 'react'
import './../App.css';

const DetailModal = ({isModalOpen, data, onClose}) => {

    let portalRoot = document.getElementById("modal");
    if (!portalRoot) {
      portalRoot = document.createElement("div");
      portalRoot.setAttribute("id", "modal");
      document.body.appendChild(portalRoot);
    }
    
    const displayClass = isModalOpen ? "show" : "hide";

    const Close = (props) => {
      return (
        <svg className="close" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M13.414 12l5.657-5.657a.999.999 0 10-1.414-1.414L12 10.586 6.343 4.929a1 1 0 00-1.414 1.414L10.586 12 4.93 17.657a1 1 0 001.414 1.414L12 13.414l5.657 5.657a.997.997 0 001.414 0 .999.999 0 000-1.414L13.414 12z"
          />
        </svg>
      );
    }

    return (
      <>
      <div
        id="modal-comp"
        className={displayClass}
        isOpen={isModalOpen}
      >
        <div
          className="dialog"
          tabIndex={1}
        >
          <div className="modal-title-container">
            <div className="modal-title">Hasta Detayları</div>
            <Close className="clickable icon" onClick={() => onClose()} />
          </div>
          <div className="modal-detail">
              <div className="modal-detail-item" style={{marginTop: '50px'}}>
                <span className="item-label">TC No: </span> {data.nationalityNumber}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">İsim: </span> {data.firstName}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">Soyisim: </span> {data.lastName}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">Yaş: </span> {data.age}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">Cinsiyet: </span> {data.gender}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">Kan Grubu: </span> {data.bloodType}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">Telefon No: </span> {data.phoneNumber}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">Adres: </span> {data.address}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">Doktoru: </span> {data.attendingDoctor}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">Başvuru Tarihi: </span> {data.admissionDate}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">Teşhis: </span> {data.diagnosis}
              </div>
              <div className="modal-detail-item">
                <span className="item-label">Taburcu Durumu: </span> {data.isDischarged ? 'Evet' : 'Hayır'}
              </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default DetailModal;
