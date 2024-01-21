import Rooms from "../../components/Rooms/Rooms";
import Categorie from "../../components/Rooms/categorie/Categorie";

const Home = () => {
  return (
    <div>
      {/* Catagories */}
      <Categorie></Categorie>
      {/* Room cards */}
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
