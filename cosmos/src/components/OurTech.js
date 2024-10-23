import React from 'react';
import '../Style.css';

const OurTech = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>The Problem</h1>
      <p style={styles.text}>
        Nicotine addiction continues to be a pervasive public health challenge, impacting nearly 24 million Americans. Although  e-cigarettes were introduced as a safer alternative to smoking, they have  created a new form of nicotine dependency, particularly among young adults. Today, 1 in 7 young adults uses e-cigarettes, and the numbers are rising. Current nicotine tracking solutions, such as tracking apps, fail to offer comprehensive support which can become disruptive within a users daily routine.
      </p>

      <h2 style={styles.heading}>Our Technology</h2>
      <div style={styles.imageContainer}>
        <div style={styles.imageItem}>
          <img src="logo512.png" alt="pic 1" style={styles.image} />
          <p style={styles.caption}>Automatic</p>
        </div>
        <div style={styles.imageItem}>
          <img src="logo512.png" alt="pic 2" style={styles.image} />
          <p style={styles.caption}>Adaptable</p>
        </div>
        <div style={styles.imageItem}>
          <img src="logo512.png" alt="pic 3" style={styles.image} />
          <p style={styles.caption}>Data-Driven</p>
        </div>
      </div>

      <p style={styles.text}>
      We are addressing these gaps by developing an e-cigarette attachment that automatically tracks nicotine use. By introducing an automatic feature, we are alleviating the mental load of tracking nicotine consumption while also providing quantitative data that enables informed decision-making that can be used to tailor a person's wellness journey.
      </p>

      <h3 style={styles.heading}>Features</h3>
      <div style={styles.imageGrid}>
        <div style={styles.imageItem}>
          <img src="logo512.png" alt="Feature 1" style={styles.image} />
        </div>
        <div style={styles.imageItem}>
          <img src="logo512.png" alt="Feature 2" style={styles.image} />
        </div>
        <div style={styles.imageItem}>
          <img src="logo512.png" alt="Feature 3" style={styles.image} />
        </div>
        <div style={styles.imageItem}>
          <img src="logo512.png" alt="Feature 4" style={styles.image} />
        </div>
      </div>
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

  heading: {
    color: '#56135A',
    fontWeight: '600', // Semibold
    fontFamily: 'Assistant, sans-serif',
  },

  text: {
    fontFamily: 'Assistant, sans-serif',
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
  },
};
