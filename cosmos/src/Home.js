import React, { useState, useEffect } from "react";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cosmosLogoSize = windowWidth > 768 ? "400px" : "150px";
  const spinningLogoSize = windowWidth > 768 ? "300px" : "200px";

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <div>
          <img src="/COSMOS-purple.png" alt="COSMOS Logo" style={{ ...styles.cosmosLogo, width: cosmosLogoSize }} />
        </div>
        <div>
          <img src="/logo512.png" alt="Logo" style={{ ...styles.logo, width: spinningLogoSize }} />
        </div>
        <p style={styles.subtitle}>We strive to provide a safe, healthy, and positive environment for you to achieve your individual goals with vaping addiction!</p>
        <div style={styles.buttonContainer}>
          <a href="/about" style={styles.button}>
            About Us
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fff",
  },
  heroSection: {
    textAlign: "center",
    color: "#56135A",
    maxWidth: "600px",
    padding: "20px",
    borderRadius: "10px",
  },
  cosmosLogo: {
    marginBottom: "60px",
  },
  logo: {
    animation: "spin 5s linear infinite",
    marginBottom: "60px",
  },
  subtitle: {
    fontSize: "1.5rem",
    margin: "0 0 30px 0",
    color: "#9A90DF",
  },
  buttonContainer: {
    display: "inline-block",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1.2rem",
    color: "#fff",
    backgroundColor: "#9A90DF",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
    border: `2px solid #9A90DF`,
  },
};

// Add CSS keyframes for spinning animation
const globalStyles = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Add the keyframes to the document style
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

export default Home;
