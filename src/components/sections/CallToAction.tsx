import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section>
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              {" "}
              Rejoin les USA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                dès maintenant
              </span>
            </h1>
            <Paragraph className="p-10">
              Achète ton abonnement et rejoins nous dès maintenant pour
              rejoindre une université américaine. Profite de la bourse pour
              jouer à moins coûts dans des environnements professionnels aux
              USA. Tout est mis à disposition des joueurs pour réussir autant
              footbalistiquement que scolairement.{" "}
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 text-white">
              <Button>Rejoins-nous</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
