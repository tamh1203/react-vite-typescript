import './HomePage.scss';
import videoHomePage from '../../../../../public/video/video-homepage.mp4';
const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoHomePage} type="video/mp4" />
        </video>
      </div>
      <div className="homepage-content">
        <div className="title-header">
          FreeFrontend 10.000 high-quality UI snippets for free
        </div>
        <div className="title-body">
          A curated collection of front-end snippets to save you time. Whether
          you work with HTML, CSS, Bootstrap, TailwindCSS, JavaScript, you'll
          find ready-to-use components and patterns to streamline your
          development. No fluff — just practical code.
        </div>
        <div className="title-footer">
          <button>Bootstrap Login</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
