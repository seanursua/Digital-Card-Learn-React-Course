const Info = () => {
  return (
    <div className="info">
      <img src="../images/Sean-Ursua.jpg" className="user-icon" />
      <div className="info--details">
        <h2>Sean Ursua</h2>
        <p>Frontend Developer</p>
      </div>
      <div className="info--buttons">
        <a href="mailto:seanursua@gmail.com" target="_blank">
          <button className="email">
            <img src="../images/Mail.png" />
            Email
          </button>
        </a>
        <a href="https://twitter.com/seanursuaaa" target="_blank">
          <button className="linkedin">
            <img src="../images/linkedin.png" />
            Linkedin
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
