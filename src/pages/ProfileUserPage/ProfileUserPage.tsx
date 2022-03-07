import GenericCard from "../../components/GenericCard/GenericCard";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const ProfileUserPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="grid grid-cols-2 gap-6 ml-6 mr-6 mt-6">
        <GenericCard />
        <GenericCard />
      </div>
    </>
  );
};

export default ProfileUserPage;
