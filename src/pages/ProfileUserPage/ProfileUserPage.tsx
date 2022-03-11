import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenericCard from "../../components/GenericCard/GenericCard";
import GenericCardEdit from "../../components/GenericCard/GenericCardEdit";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import userInterface from "../../redux/interfaces/userInterface";
import { RootState } from "../../redux/reducers";
import { loadUserSnippetCollectionThunk } from "../../redux/thunks/userThunk";

const ProfileUserPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserSnippetCollectionThunk);
  }, [dispatch]);

  const userData: userInterface = useSelector((state: RootState) => state.user);

  return (
    <>
      <NavigationBar />
      <div className="grid grid-cols-2 gap-6 ml-6 mr-6 mt-6">
        <GenericCard userData={userData} />
        <GenericCardEdit />
      </div>
    </>
  );
};

export default ProfileUserPage;
