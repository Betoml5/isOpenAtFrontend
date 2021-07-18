import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setImage } from "../services/User";
import useUser from "../hooks/useUser";
import storage from "../firebase";
import UploadImageForm from "./UploadImageForm";
import PageLoader from "./PageLoader";
import Spinner from "./Spinner";

const User = (props) => {
  const { id } = useParams();
  const { getOneUser, userFetched, logout, getProfile } = useUser();
  const [view, setView] = useState(false);
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const [progress, setProgress] = useState(0);
  console.log(userFetched);

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const ref = storage.ref(`/images/${file.name}`);
    const uploadTask = ref.put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressData =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressData);
      },
      console.error,
      () => {
        ref.getDownloadURL().then((url) => {
          setFile(null);
          setURL(url);
          setImage(id, url).then((res) => console.log(res));
          setTimeout(() => {
            getOneUser(id);
            setView(!view);
          }, 100);
        });
      }
    );
  }
  useEffect(() => {
    getProfile();
  }, []);

  if (!userFetched) {
    return <PageLoader />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center bg-white rounded-md p-6 w-4/5 max-w-lg">
        <div className="w-60 mb-10">
          {!userFetched.image ? (
            <Spinner />
          ) : (
            <picture>
              <img
                src={userFetched?.image}
                alt="userImage"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </picture>
          )}
        </div>

        <div>
          <p className="font-bold text-2xl">{userFetched?.username}</p>
        </div>

        <div className="my-2">
          <p>Te gustan {userFetched?.favorites?.length} comercios</p>
        </div>
        <button
          className="btn  w-full my-2 hover:bg-veryLightRed transition-all"
          onClick={setView}
        >
          Cambiar imagen
        </button>
        <button
          className="btn w-full  hover:bg-veryLightRed transition-all"
          onClick={logout}
        >
          Cerrar sesion
        </button>
        {view && (
          <UploadImageForm
            handleUpload={handleUpload}
            file={file}
            handleChange={handleChange}
            progress={progress}
          />
        )}
      </div>
    </div>
  );
};

export default User;
