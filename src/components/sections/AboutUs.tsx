import { Container } from "../shared/Container";
import AboutUsImage from "/assets/AboutUs.jpg";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { Info } from "../cards/Info";

export const AboutUs = () => {
  return (
    <section id="about-us">
      {" "}
      <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="w-full h-80 sm:h-96 relative">
            <img
              src={AboutUsImage}
              alt="ImageAboutUs"
              className="w-full h-full object-cover round-3xl shadow-lg relative z-10"
              about="About Our Mission"
            />
          </div>
        </div>

        <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col">
          <Title>À propos de notre application</Title>
          <Paragraph>
            Nous proposons une gamme de services applicatifs pour répondre à vos
            besoins spéciale de développement d'applications mobiles et web.
            Nous nous engageons à fournir des solutions innovantes et efficaces
            pour améliorer votre entreprise.
          </Paragraph>

          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
            <Info
              title="Mission"
              description="Te ramener directement dans les universités de D1 pour que tu deviennes pro !"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
            <Info
              title="Vision"
              description="Notre vision est de pouvoir vous guidez dans votre environnement de développement"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};
