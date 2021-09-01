import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './newsCard.scss';

const NewsCard = ({ text, actual, date, image, title }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="news-card">
        <div className="news-preview d-flex flex-column">
          <h4 className="news-preview-title">{title}</h4>
          <div className="news-preview-content">
            <div className={'news__card__img__btn__container'}>
              <img src={image} className="news-preview-image" alt="" />
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'flex-end',
                  height: '100%',
                  marginTop: '20px',
                }}
              >
                <div className="align-items-center justify-content-center col-2">
                  <span
                    onClick={() => setShow(true)}
                    style={{ width: '175px' }}
                    className="closing-button btn-test"
                  >
                    <span className="text-pseudo-button">Дізнатися більше</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="news-preview-text d-inline-flex col-10 text">
              <div className="wrap truncate text-news">{text}</div>
            </div>
          </div>
        </div>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          // dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="d-flex align-items-center flex-column">
              <img className="w-100" src={image} alt="" />
              <p>{text}</p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default NewsCard;
