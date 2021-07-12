import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import storage from "../firebase";
import profileImage from "../static/profileImage.jpg";

export const User = (props) => {
  const { getOneUser, userFetched } = useUser();
  const [image, setImage] = useState();
  const { id } = useParams();
  console.log(userFetched.favorites.length);

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
    <div className="flex justify-center items-center  h-screen">
      <div className="flex flex-col items-center bg-white rounded-md p-6">
        <div className="w-60 mb-10">
          <picture>
            <img src={profileImage} alt="" className="w-full rounded-full" />
          </picture>
        </div>

        <div>
          <p className="font-bold text-2xl">{userFetched?.username}</p>
        </div>

        <div className="my-2">
          <p>Te gustan {userFetched?.favorites.length} comercios</p>
        </div>
        <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
          <svg
            class="w-8 h-8"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span class="mt-2 text-base leading-normal">Select a file</span>
          <input type="file" class="hidden" />
        </label>
      </div>

      {/* {userFetched?.username}
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <button onClick={upload}>Upload</button> */}
    </div>
  );
};
