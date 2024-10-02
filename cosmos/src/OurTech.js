import React from 'react';

 const OurTech = () => {

  return (
    <div style={styles.container}>
      <h1>The Problem</h1>
      <p>
        Nicotine addiction continues to be a pervasive public health challenge, impacting nearly 24 million Americans. Although  e-cigarettes were introduced as a safer alternative to smoking,
       they have  created a new form of nicotine dependency, particularly among young adults. Today, 1 in 7 young adults uses e-cigarettes,
       and the numbers are rising. Current nicotine tracking solutions, such as tracking apps, fail to offer comprehensive support which can become disruptive within a users daily routine.    
      </p>

      <h2>Our Technology</h2>
      <div style={styles.imagecontainer}>
        <div style={styles.imageitem}>
          <img src="logo192.png" alt="pic 1" style={styles.image}/>
          <p style={styles.caption}>Automatic</p>
        </div>
        <div style={styles.imageitem}>
          <img src="logo192.png" alt="pic 2" style={styles.image}/>
          <p style={styles.caption}>Adaptable</p>
        </div>
        <div style={styles.imageitem}>
          <img src="logo192.png" alt="pic 3" style={styles.image}/>
          <p style={styles.caption}>Data-Driven</p>
        </div>
      </div>
      
      <p>
      We are addressing these gaps by developing an e-cigarette attachment that automatically tracks nicotine use.
       By introducing an automatic feature, we are alleviating the mental load of tracking nicotine consumption while also providing quantitative data 
       that enables informed decision-making that can be used to tailor a person's wellness journey.  
      </p>

      <h3>Features</h3>
    </div>
  );
};

export default OurTech;

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '1000px',  // Adjust this to ensure enough space for the images
    margin: '0 auto',
  },

  imageContainer: {
    display: 'flex',                 // Enables flexbox layout
    justifyContent: 'space-around',   // Spaces items evenly
    alignItems: 'center',             //  centers the images
    margin: '20px 0',
  },

  imageItem: {
    textAlign: 'center',
  },

  image: {
    width: '50px',                   // Adjust as necessary
    height: 'auto',
  },

  caption: {
    marginTop: '8px',
    fontStyle: 'italic',
  },

};
