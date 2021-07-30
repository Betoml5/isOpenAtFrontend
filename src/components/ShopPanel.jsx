import { useState } from "react";
import Button from "./Button";

const ShopPanel = ({ name, highLight, freeShipping, hot, promo, openNow }) => {
  const [values, setValues] = useState({
    highLight: highLight,
    freeShipping: freeShipping,
    hot: hot,
    promo: promo,
    openNow: openNow,
  });

  return (

    <div className="flex flex-wrap bg-white p-4 ">
      <div>
        <p className="uppercase mb-2">Abierto</p>
        <Button value={openNow} values={values} setValues={setValues} />
      </div>
      <div>
        <p className="uppercase mb-2">HighLight</p>
        <Button value={highLight} values={values} setValues={setValues} />
      </div>
      <div>
        <p className="uppercase mb-2">Envio gratis</p>
        <Button value={freeShipping} values={values} setValues={setValues} />
      </div>
      <div>
        <p className="uppercase mb-2">Promocion</p>
        <Button value={promo} values={values} setValues={setValues} />
      </div>
      <div>
        <p className="uppercase mb-2">Hot</p>
        <Button value={hot} values={values} setValues={setValues} />
      </div>
    </div>
  );
};

export default ShopPanel;
