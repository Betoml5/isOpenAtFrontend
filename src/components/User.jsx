import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { setImage } from "../services/User";
import useUser from "../hooks/useUser";
import storage from "../firebase";

export const User = (props) => {
  const { id } = useParams();
  const { getOneUser, userFetched, logout } = useUser();
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
          }, 1000);
        });
      }
    );
    console.log(url);
    console.log(typeof url);
  }
  useEffect(() => {
    getOneUser(id);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center bg-white rounded-md p-6 w-4/5 max-w-lg">
        <div className="w-60 mb-10">
          <picture>
            <img
              src={userFetched?.image}
              alt="userImage"
              className="w-full rounded-xl"
            />
          </picture>
        </div>

        <div>
          <p className="font-bold text-2xl">{userFetched?.username}</p>
        </div>

        <div className="my-2">
          <p>Te gustan {userFetched?.favorites.length} comercios</p>
        </div>

        <form onSubmit={handleUpload}>
          <button className="btn w-full my-4" onClick={logout}>
            Cerrar sesion
          </button>
          <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span class="mt-2 text-base leading-normal">
              Seleccionar archivo
            </span>
            <input type="file" class="hidden" onChange={handleChange} />
          </label>
          <button
            disabled={!file}
            className={`btn w-full my-2 ${!file && `opacity-75`}`}
          >
            Subir imagen
          </button>
        </form>
        <progress
          value={progress}
          max="100"
          className="border-none rounded-lg"
        ></progress>
      </div>
    </div>
  );
};
