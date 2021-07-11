import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import storage from "../firebase";

export const User = (props) => {
  const { getOneUser, userFetched } = useUser();
  const [image, setImage] = useState();
  const { id } = useParams();

  const upload = () => {
    if (!image) {
      return;
    }

    storage
      .ref(`images/${image.name}`)
      .put(image)
      .then((snapshot) => {
        console.log("Uploaded a blob or file");
        console.log(snapshot);
      });
  };

  const path = "404 Error with a cute animal-pana.png";
  // console.log(path.split("").join(""));

  const gsReference = storage.refFromURL(
    "gs://isopenat.appspot.com/images/404 Error with a cute animal-pana.png"
  );

  console.log(gsReference);

  const downLoadImage = () => {
    const pathReference = storage.ref("404 Error with a cute animal-pana.png");
  };

  useEffect(() => {
    getOneUser(id);
  }, []);

  return (
    <div>
      {userFetched?.username}
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <button onClick={upload}>Upload</button>
    </div>
  );
};
