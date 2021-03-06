import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenericCard from "../../components/GenericCard/GenericCard";
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
      <img
        className="h-full  w-full fixed  -z-10 "
        src="backgroundStains.png"
        alt="background"
      />
      <NavigationBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mx-6 md:mt-6">
        <motion.div
          initial={{ scaleY: 0.7, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          exit={{ scaleY: 0.7 }}
          transition={{ duration: 0.2 }}
        >
          <GenericCard userData={userData} />
        </motion.div>
      </div>
    </>
  );
};

export default ProfileUserPage;
