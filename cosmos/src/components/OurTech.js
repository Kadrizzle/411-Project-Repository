import React from 'react';
import '../Style.css';

const OurTech = () => {
  return (
      <div style={styles.container}>
        <section style={styles.sectionOne}>
      <h1 style={styles.headingOne}>The Problem</h1>
      <p style={styles.sectionOneTextStyling}>
        Nicotine addiction continues to be a pervasive public health challenge, impacting nearly 24 million Americans. Although  e-cigarettes were introduced as a safer alternative to smoking, they have  created a new form of nicotine dependency, particularly among young adults. Today, 1 in 7 young adults uses e-cigarettes, and the numbers are rising. Current nicotine tracking solutions, such as tracking apps, fail to offer comprehensive support which can become disruptive within a users daily routine.
      </p>
      </section>

    <section style={styles.sectionTwo}>
      <h2 style={styles.headingTwo}>Our Technology</h2>
      <div style={styles.imageContainer}>
        <div style={styles.imageItem}>
          <p style={styles.caption}>Automatic</p>
        </div>
        <div style={styles.imageItem}>
          <p style={styles.caption}>Adaptable</p>
        </div>
        <div style={styles.imageItem}>
          <p style={styles.caption}>Data-Driven</p>
        </div>
      </div>

      <p style={styles.sectionTwoTextStyling}>
      We are addressing these gaps by developing an e-cigarette attachment that automatically tracks nicotine use. By introducing an automatic feature, we are alleviating the mental load of tracking nicotine consumption while also providing quantitative data that enables informed decision-making that can be used to tailor a person's wellness journey.
      </p>
      </section>

    <section style={styles.sectionThree}>
      <h3 style={styles.headingThree}>Features</h3>
      </section>
    </div>
  );
};

export default OurTech;
const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '1000px',
    margin: '0 auto',
    fontFamily: 'Assistant, sans-serif', // Applies the Assistant font to all text
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
    marginBottom: '70px', /* Space between heading and text */
    letterSpacing: '1.5px', /* Adds some spacing between letters */
    lineHeight: '1.2', /* Tighter line height for better balance */
  },

  sectionTwoTextStyling: {
    color: 'black', /* Slightly softer shade for the text */
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
    alignItems: 'center',
    margin: '20px 0',
  },

  imageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },

  imageItem: {
    textAlign: 'center',
  },

  image: {
    width: '50px',
    height: 'auto',
  },

  caption: {
    marginTop: '8px',
    fontStyle: 'italic',
    fontWeight: 'bold', // Bold text under the images
    fontFamily: 'Assistant, sans-serif',
    fontSize: '44px',
    color: '#d0f4ea'
  },
};
