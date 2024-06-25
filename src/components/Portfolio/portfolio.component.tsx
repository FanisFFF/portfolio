import SiteComponent from "../Site-component/site.component";
import "./portfolio.styles.scss";
const data = [
  {
    imageUrl: "/images/Screenshot_175.png",
    title: "Clothing shop",
    description: "Clothing shop website using React, Redux, SCSS.",
    githubLink: "https://github.com/FanisFFF/shop",
    siteLink: "https://guileless-sable-e5e08c.netlify.app/",
  },
  {
    imageUrl: "images/Screenshot_176.png",
    title: "Manage landing page",
    description: "Landing page using HTML, CSS, Javascript",
    githubLink:
      "https://github.com/FanisFFF/manage-landing-page-master/tree/main/manage-landing-page-master",
    siteLink: "https://neon-blancmange-1d428c.netlify.app/",
  },
  {
    imageUrl: "images/Screenshot_177.png",
    title: "Timer app",
    description: "Pomodoro timer app using React",
    githubLink: "",
    siteLink: "https://pomodorotimer-react-app.netlify.app/",
  },
  {
    imageUrl: "/images/Screenshot_178.png",
    title: "Space travel multi-page website",
    description: "Space travel multi-page website using React",
    githubLink: "https://github.com/FanisFFF/space-tourism-website",
    siteLink: "https://incredible-crepe-9156a9.netlify.app/",
  },
];
function Portfolio() {
  return (
    <div id="projects" className="portfolio-section">
      <h2>My Works</h2>
      <div className="portfolio-container">
        {data.map((el) => (
          <SiteComponent props={el}></SiteComponent>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
