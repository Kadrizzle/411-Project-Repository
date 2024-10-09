import React, { useState } from 'react';
import '../Style.css';

const About = () => {
  const [modalImage, setModalImage] = useState(null);
  const [modalName, setModalName] = useState('');
  const [modalRole, setModalRole] = useState('');
  const [modalDescription, setModalDescription] = useState('');

  const openModal = (image, name, role, description) => {
    setModalImage(image);
    setModalName(name);
    setModalRole(role);
    setModalDescription(description);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalName('');
    setModalRole('');
    setModalDescription('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Story</h1>
      <p style={styles.text}>Established</p>
      <h2 style={styles.heading}>Meet the Team</h2>
      <div style={styles.imageContainer}>
        <div style={styles.imageItem}>
          <div style={styles.imageWrapper} onClick={() => openModal("KV.jpg", "KV", "Co-Founder and CEO", "Description for MS")}>
            <img src="KV.jpg" alt="pic 1" style={styles.image} />
          </div>
          <p style={styles.caption}><strong>KV</strong></p>
          <p style={styles.subCaption}>Co-Founder and CEO</p>
        </div>
        <div style={styles.imageItem}>
          <div style={styles.imageWrapper} onClick={() => openModal("EH.jpg", "EH", "Co-Founder and CTO", "Description for MS")}>
            <img src="EH.jpg" alt="pic 2" style={styles.image} />
          </div>
          <p style={styles.caption}><strong>EH</strong></p>
          <p style={styles.subCaption}>Co-Founder and CTO</p>
        </div>
        <div style={styles.imageItem}>
          <div style={styles.imageWrapper} onClick={() => openModal("logo512.png", "ME", "Co-Founder and COO", "Description for ME")}>
            <img src="logo512.png" alt="pic 3" style={styles.image} />
          </div>
          <p style={styles.caption}><strong>ME</strong></p>
          <p style={styles.subCaption}>Co-Founder and COO</p>
        </div>
        <div style={styles.imageItem}>
          <div style={styles.imageWrapper} onClick={() => openModal("logo512.png", "BSM", "Co-Founder and CFO", "Description for BSM")}>
            <img src="logo512.png" alt="pic 4" style={styles.image} />
          </div>
          <p style={styles.caption}><strong>BSM</strong></p>
          <p style={styles.subCaption}>Co-Founder and CFO</p>
        </div>
      </div>

      <h3 style={styles.heading}>Contact Us</h3>
      <div style={styles.formContainer}>
        <div style={styles.inputContainer}>
          <label style={styles.label}>Name</label>
          <input type="text" placeholder="Your Name" style={styles.inputBox} />
          <label style={styles.label}>Email</label>
          <input type="email" placeholder="Your Email" style={styles.inputBox} />
        </div>
        <div style={styles.messageContainer}>
          <label style={styles.label}>Message</label>
          <textarea placeholder="Your Message" style={styles.messageBox} />
          <button style={styles.sendButton}>Send</button>
        </div>
      </div>

      {modalImage && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="modal" style={styles.modalImage} />
            <p style={styles.modalName}><strong>{modalName}</strong></p>
            <p style={styles.modalRole}>{modalRole}</p>
            <p style={styles.modalText}>{modalDescription}</p>
            <button style={styles.closeButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default About;

const styles = {

/* CSS for the text ------------------------------------------------------ */
  container: {
    textAlign: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Assistant, sans-serif',
  },
  heading: {
    color: '#56135A',
    fontWeight: '600',
    fontFamily: 'Assistant, sans-serif',
  },
  text: {
    fontFamily: 'Assistant, sans-serif',
  },


  /* CSS for the images ------------------------------------------------------ */

  imageContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: '20px 0',
  },
  imageItem: {
    textAlign: 'center',
  },
  imageWrapper: {
    position: 'relative',
    width: '100px', // Width of the image
    height: '100px', // Height of the image (square)
    borderRadius: '10px', // Rounded corners for the wrapper
    overflow: 'hidden', // Ensures the image fits within the rounded corners
    borderTop: '5px solid #9A90DF', // Accent color on top
    borderRight: '5px solid #9A90DF', // Accent color on the right
  },
  image: {
    width: '100%', // Make the image fill the container
    height: '100%', // Ensure the image maintains the square aspect ratio
    objectFit: 'cover', // Crop the image if necessary
  },
  caption: {
    marginTop: '8px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'Assistant, sans-serif',
  },
  subCaption: {
    fontFamily: 'Assistant, sans-serif',
    marginTop: '4px',
  },


  /* CSS for the text boxes ------------------------------------------------------ */

  formContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  inputContainer: {
    flex: 1,
    marginRight: '20px',
  },
  messageContainer: {
    flex: 2,
  },
  label: {
    fontSize: '16px',
    marginBottom: '5px',
    display: 'block',
  },
  inputBox: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '2px solid #56135A', // Border with color on focus
    borderRadius: '8px', // Rounded corners
    backgroundColor: '#e1d4f4', // Light purple background color
    outline: 'none',
    fontFamily: 'Assistant, sans-serif',
    transition: 'border-color 0.3s ease', // Smooth transition on focus
  },
  messageBox: {
    width: '50%',
    height: '150px',
    padding: '10px',
    marginBottom: '10px',
    border: '2px solid #56135A', // Border with color on focus
    borderRadius: '8px', // Rounded corners
    backgroundColor: '#e1d4f4', // Light purple background color
    outline: 'none',
    fontFamily: 'Assistant, sans-serif',
    transition: 'border-color 0.3s ease', // Smooth transition on focus
  },
  sendButton: {
    backgroundColor: '#56135A',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px', // Oval shape for the button
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease', // Smooth hover transition
  },
  sendButtonHover: {
    backgroundColor: '#4a0f4e', // Darker shade on hover
  },

  
  /* CSS for the modal which has the images ------------------------------------------------------ */

  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '80%', // Adjust the modal width
    maxWidth: '600px', // Add a max-width to keep it from getting too large
    height: 'auto', // Auto height to expand with content
  },
  modalImage: {
    width: '150px',
    height: 'auto',
    marginBottom: '10px',
  },
  modalName: {
    fontWeight: 'bold',
    marginBottom: '5px',
    fontFamily: 'Assistant, sans-serif',
  },
  modalRole: {
    fontStyle: 'italic',
    marginBottom: '10px',
    fontFamily: 'Assistant, sans-serif',
  },
  modalText: {
    marginBottom: '10px',
    fontFamily: 'Assistant, sans-serif',
  },
  closeButton: {
    backgroundColor: '#56135A',
    color: 'white',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
