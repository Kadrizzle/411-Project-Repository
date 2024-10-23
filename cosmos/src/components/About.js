import React, { useState } from 'react';
import '../Style.css';

const About = () => {
  const [modalImage, setModalImage] = useState(null);
  const [modalName, setModalName] = useState('');
  const [modalRole, setModalRole] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all fields');
    } else {
      alert('Message Sent');
      // Handle form submission logic here
    }
  };

  return (

    

    // Start of section 1

    <div style={styles.container}>
      <section style={styles.sectionOne}>
        <h1 style={styles.headingOne}>Our Story</h1>
        <p style={styles.sectionOneTextStyling}>Established in 2024, Cosmos is developing a new approach to understanding personal drug
          use and creating affordable solutions to increase accessibility for all patients. cosmos was founded on Tulane
          University's campus with college students in mind because of widespread vape usage within younger age groups.
          With our unique understanding of the problem and our personal experiences, we hope to develop and offer effective
          and impactful solutions for people of all ages.
        </p>
      </section>

      {/* End of section 1 */}

      {/* Start of section 2 */}

      <section style={styles.sectionTwo}>
        <h2 style={styles.headingTwo}>Meet the Team</h2>
        <div style={styles.imageContainer}>
          <div style={styles.imageItem}>
            <div
              style={styles.imageWrapper}
              onClick={() => openModal("KV.jpg", "Kelly Vinh", "Co-Founder and CEO", "Description for KV")}
              aria-label="Open modal for KV, Co-Founder and CEO"
            >
              <img src="KV.jpg" alt="KV" style={styles.image} />
            </div>
            <p style={styles.caption}><strong>Kelly Vinh, MS</strong></p>
            <p style={styles.subCaption}>Co-Founder and CEO</p>
          </div>
          <div style={styles.imageItem}>
            <div
              style={styles.imageWrapper}
              onClick={() => openModal("EH.jpg", "Ethan Hernandez", "Co-Founder and CTO", "Description for EH")}
              aria-label="Open modal for EH, Co-Founder and CTO"
            >
              <img src="EH.jpg" alt="EH" style={styles.image} />
            </div>
            <p style={styles.caption}><strong>Ethan Hernandez, MS</strong></p>
            <p style={styles.subCaption}>Co-Founder and CTO</p>
          </div>
          <div style={styles.imageItem}>
            <div
              style={styles.imageWrapper}
              onClick={() => openModal("logo512.png", "ME", "Co-Founder and COO", "Description for ME")}
              aria-label="Open modal for ME, Co-Founder and COO"
            >
              <img src="logo512.png" alt="ME" style={styles.image} />
            </div>
            <p style={styles.caption}><strong>Rachel Soans, MEng</strong></p>
            <p style={styles.subCaption}>Co-Founder and COO</p>
          </div>
          <div style={styles.imageItem}>
            <div
              style={styles.imageWrapper}
              onClick={() => openModal("logo512.png", "BSM", "Co-Founder and CFO", "Description for BSM")}
              aria-label="Open modal for BSM, Co-Founder and CFO"
            >
              <img src="logo512.png" alt="BSM" style={styles.image} />
            </div>
            <p style={styles.caption}><strong>Ben Breen, BSM</strong></p>
            <p style={styles.subCaption}>Co-Founder and CFO</p>
          </div>
        </div>
      </section>

      {/* End of section 2 */}

      {/* Start of section 3 */}

      <section style={styles.sectionThree}>
        <h3 style={styles.headingThree}>Contact Us</h3>
        <form style={styles.formContainer} onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label style={styles.inputBoxLabel}>Name</label>
            <input
              type="text"
              style={styles.inputBox}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label style={styles.inputBoxLabel}>Email</label>
            <input
              type="email"
              style={styles.inputBox}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={styles.messageContainer}>
            <label style={styles.inputBoxLabel}>Message</label>
            <textarea
              style={styles.messageBox}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              style={{ ...styles.sendButton, backgroundColor: isHovered ? '#4a0f4e' : '#56135A' }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </section>
      {modalImage && (
        <div style={styles.modalOverlay} onClick={closeModal} aria-label="Close modal">
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt={`${modalName}`} style={styles.modalImage} />
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
  container: {
    textAlign: 'center',
    fontFamily: 'Assistant, sans-serif',
  },

  sectionOne: {
    backgroundColor: '#56135a',
    padding: '20px',
    width: '100vw',  // Full width of the viewport
    marginLeft: 'calc(-50vw + 50%)',  // Ensure it spans edge-to-edge
  },

  headingOne: {
    color: '#8ee3ef', /* Light color for the heading */
    fontWeight: '700', /* Reduced font weight for a more elegant look */
    fontSize: '56px', /* Slightly smaller to balance the page */
    fontFamily: 'Assistant, sans-serif', /* Keeping the same font */
    textAlign: 'center', /* Centering the heading */
    marginBottom: '20px', /* Space between heading and text */
    letterSpacing: '1.5px', /* Adds some spacing between letters */
    lineHeight: '1.2', /* Tighter line height for better balance */
  },
  
  sectionOneTextStyling: {
    color: '#d3edf2', /* Slightly softer shade for the text */
    fontSize: '26px', /* Smaller and more readable font size */
    fontFamily: 'Assistant, sans-serif', /* Same font for consistency */
    fontWeight: '400', /* Lighter weight for better readability */
    textAlign: 'center', /* Center the text under the heading */
    lineHeight: '1.6', /* Increased line height for better readability */
    maxWidth: '800px', /* Limiting width to avoid long lines */
    margin: '0 auto', /* Centers the text block */
    padding: '0 15px', /* Adds some padding for better spacing */
    marginBottom: '50px',
  },
  
  sectionTwo: {
    backgroundColor: '#9a90df',
    padding: '20px',
    width: '100vw',  // Full width of the viewport
    marginLeft: 'calc(-50vw + 50%)',  // Ensure it spans edge-to-edge
  },

  headingTwo:{
    color: '#56135a', /* Light color for the heading */
    fontWeight: '700', /* Reduced font weight for a more elegant look */
    fontSize: '56px', /* Slightly smaller to balance the page */
    fontFamily: 'Assistant, sans-serif', /* Keeping the same font */
    textAlign: 'center', /* Centering the heading */
    marginBottom: '20px', /* Space between heading and text */
    letterSpacing: '1.5px', /* Adds some spacing between letters */
    lineHeight: '1.2', /* Tighter line height for better balance */
  },


  sectionThree: {
    backgroundColor: '#e2a965',
    padding: '20px',
    width: '100vw',  // Full width of the viewport
    marginLeft: 'calc(-50vw + 50%)',  // Ensure it spans edge-to-edge
  },

  headingThree:{
    color: '#56135a', /* Light color for the heading */
    fontWeight: '700', /* Reduced font weight for a more elegant look */
    fontSize: '56px', /* Slightly smaller to balance the page */
    fontFamily: 'Assistant, sans-serif', /* Keeping the same font */
    textAlign: 'center', /* Centering the heading */
    marginBottom: '20px', /* Space between heading and text */
    letterSpacing: '1.5px', /* Adds some spacing between letters */
    lineHeight: '1.2', /* Tighter line height for better balance */
  },

  imageContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: '20px 0',
    flexWrap: 'wrap',
  },

  imageItem: {
    textAlign: 'center',
    margin: '10px',
  },

  imageWrapper: {
    position: 'relative',
    width: '250px',
    height: '250px',
    borderRadius: '10px',
    overflow: 'hidden',
    // borderTop: '5px solid #9A90DF',
    // borderRight: '5px solid #9A90DF',
    cursor: 'pointer',
    marginTop: '50px',
  },

  image: {
    width: '250px',
    height: '250px',
    objectFit: 'cover',
  },

  caption: {
    marginTop: '8px',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'Assistant, sans-serif',
    fontSize: '26px',
  },

  subCaption: {
    fontFamily: 'Assistant, sans-serif',
    marginTop: '4px',
    fontSize: '24px',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },

  inputContainer: {
    width: '80%',
  },

  messageContainer: {
    width: '80%',
    textAlign: 'center',
  },

  inputBoxLabel: {
    fontSize: '26px',
    marginBottom: '5px',
    display: 'block',
  },

  inputBox: {
    width: '40%',
    height: '30px',
    padding: '10px',
    marginBottom: '10px',
    border: '3px solid #56135A',
    borderRadius: '10px',
    backgroundColor: '#e1d4f4',
    outline: 'none',
    fontFamily: 'Assistant, sans-serif',
    transition: 'border-color 0.3s ease',
  },

  messageBox: {
    width: '40%',
    height: '150px',
    padding: '10px',
    marginBottom: '10px',
    marginLeft: '100px',
    border: '3px solid #56135A',
    borderRadius: '8px',
    backgroundColor: '#e1d4f4',
    outline: 'none',
    fontFamily: 'Assistant, sans-serif',
    transition: 'border-color 0.3s ease',
  },

  sendButton: {
    backgroundColor: '#56135A',
    color: 'white',
    padding: '15px 25px',
    marginLeft: '10px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },

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
    width: '80%',
    maxWidth: '600px',
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
    fontFamily: 'Assistant',
  },

  closeButton: {
    backgroundColor: '#56135A',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '16px',
  },

  '@media (max-width: 768px)': {
    imageContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    inputContainer: {
      width: '100%',
    },
    messageContainer: {
      width: '100%',
    },
    messageBox: {
      width: '90%',
    },
  },
};

