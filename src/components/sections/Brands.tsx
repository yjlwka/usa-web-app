import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = [
  "wakeforest",
  "clemson",
  "Portland",
  "duke",
  "michigan",
  "paris",
  "lakeerie",
  "utah",
];
export const Brands = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Trusted by Top Universities</Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {logos.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <img
                src={`src/assets/logo/${logo}.png`}
                width="100"
                height="60"
                alt="{logo}"
                className="h-7 sm:h-10 w-auto ease-linear duration-300 
                 group-hover:scale-105"
              />{" "}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
