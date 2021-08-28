import { useEffect, useState } from "react";
import Button from "./Button";
import {
  setHighLight,
  setShipping,
  setHot,
  setPromo,
  setOpen,
} from "../services/Shop";
import { getUser } from "../services/User";
import useUser from "../hooks/useUser";
import { useHistory } from "react-router-dom";

const ShopPanel = ({
  _id,
  name,
  highLight,
  freeShipping,
  hot,
  promo,
  openNow,
}) => {
  const [userFetched, setUserFetched] = useState({});
  const [values, setValues] = useState({
    highLight: highLight,
    freeShipping: freeShipping,
    hot: hot,
    promo: promo,
    openNow: openNow,
  });
  const { user } = useUser();
  const userParsed = JSON.parse(user);

  const history = useHistory();

  useEffect(() => {
    const getUserFetched = async () => {
      const response = await getUser(userParsed?._id);
      setUserFetched(response);
    };
    getUserFetched();
    return () => {
      setUserFetched(null);
    };
  }, [userParsed?._id]);

  if (userFetched?.owner === false) {
    history.push("/");
  }

  const buttonStyles = "w-1/2 md:w-1/3 lg:w-1/5";

  return (
    <div className="flex flex-wrap w-full bg-white ">
      <div className={buttonStyles}>
        <p className="uppercase mb-2">Abierto</p>
        <Button
          value={openNow}
          values={values}
          setValues={setValues}
          handleClick={setOpen}
          shopId={_id}
        />
      </div>
      <div className={buttonStyles}>
        <p className="uppercase mb-2">HighLight</p>
        <Button
          value={highLight}
          values={values}
          setValues={setValues}
          handleClick={setHighLight}
          shopId={_id}
        />
      </div>
      <div className={buttonStyles}>
        <p className="uppercase mb-2">Envio gratis</p>
        <Button
          value={freeShipping}
          values={values}
          setValues={setValues}
          handleClick={setShipping}
          shopId={_id}
        />
      </div>
      <div className={buttonStyles}>
        <p className="uppercase mb-2">Promocion</p>
        <Button
          value={promo}
          values={values}
          setValues={setValues}
          handleClick={setPromo}
          shopId={_id}
        />
      </div>
      <div className={buttonStyles}>
        <p className="uppercase mb-2">Hot</p>
        <Button
          value={hot}
          values={values}
          setValues={setValues}
          handleClick={setHot}
          shopId={_id}
        />
      </div>
    </div>
  );
};

export default ShopPanel;
