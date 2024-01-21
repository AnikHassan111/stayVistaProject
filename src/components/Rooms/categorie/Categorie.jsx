import Container from "../../Shared/Container";
import CategoreBox from "./CategoreBox";
import { categories } from "./Categotie";

const Categorie = () => {
  return (
    <Container>
      <div className="flex gap-8 overflow-x-auto mb-3">
        {categories.map((categorie, index) => (
          <CategoreBox
            key={index}
            lable={categorie.label}
            icon={categorie.icon}
          ></CategoreBox>
        ))}
      </div>
    </Container>
  );
};

export default Categorie;
