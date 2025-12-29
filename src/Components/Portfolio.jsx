/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "HeadhuntAI - Executive Search Intelligence",
    description:
      "AI-powered platform automating talent research and market mapping for executive search firm. Built with Python, LangChain, and business intelligence tools.",
    url: "https://github.com/Mamadouba2004/headhuntai",
  },
  {
    title: "Retail Logistics Cost Analysis",
    description:
      "Data science project quantifying the financial impact of poor data quality in retail operations using Python, pandas, and Power BI visualization.",
    url: "https://github.com/Mamadouba2004/retail-logistics-analysis",
  },
  {
    title: "Hospital Management System",
    description:
      "C++ application implementing advanced data structures and algorithms for healthcare operations management. Demonstrates OOP principles and efficient data handling.",
    url: "https://github.com/Mamadouba2004/hospital-management-system",
  },
  {
    title: "Stock Price Predictor",
    description:
      "Machine learning model for financial market forecasting. Part of portfolio development for quantitative finance career path.",
    url: "https://github.com/Mamadouba2004/stock-predictor",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
