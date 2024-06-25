import { FC } from "react";
import "./site.style.scss";
type SiteData = {
  imageUrl: string;
  title: string;
  githubLink: string;
  siteLink: string;
  description: string;
};
type SiteProps = {
  props: SiteData;
};

const SiteComponent: FC<SiteProps> = ({ props }) => {
  const { imageUrl, title, githubLink, siteLink, description } = props;
  return (
    <div className="site-container">
      <div className="site-wrapper">
        <div className="site-backdrop">
          <div className="site-info">
            <p>{description}</p>
            <div className="site-links">
              <a href={githubLink}>
                <i className="fa-brands fa-github icon"></i>
              </a>
              <a href={siteLink}>
                <i className="fa-solid fa-arrow-up-right-from-square icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="site-preview">
          <img src={imageUrl} alt="" />
        </div>
      </div>
      <p>{title}</p>
    </div>
  );
};
export default SiteComponent;
