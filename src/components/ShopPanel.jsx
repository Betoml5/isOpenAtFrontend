import { useState } from "react";
import Button from "./Button";
import { setHighLight, setShipping, setHot, setPromo, setOpen } from '../services/Shop'

const ShopPanel = ({ _id, name, highLight, freeShipping, hot, promo, openNow }) => {

  console.log('ID', _id)
  const [values, setValues] = useState({
    highLight: highLight,
    freeShipping: freeShipping,
    hot: hot,
    promo: promo,
    openNow: openNow,
  });

  return (

    <div className="flex flex-wrap bg-white p-4 border-b-2 border-black">

      <div className="w-full text-center my-2">
        <h3 className="text-2xl ">{name}</h3>
      </div>

      <div className="panel-item">
        <p className="uppercase mb-2">Abierto</p>
        <Button value={openNow} values={values} setValues={setValues} handleClick={setOpen} shopId={_id} />
      </div>
      <div className="panel-item">
        <p className="uppercase mb-2">HighLight</p>
        <Button value={highLight} values={values} setValues={setValues} handleClick={setHighLight} shopId={_id} />
      </div>
      <div className="panel-item" >
        <p className="uppercase mb-2">Envio gratis</p>
        <Button value={freeShipping} values={values} setValues={setValues} handleClick={setShipping} shopId={_id} />
      </div>
      <div className="panel-item">
        <p className="uppercase mb-2">Promocion</p>
        <Button value={promo} values={values} setValues={setValues} handleClick={setPromo} shopId={_id} />
      </div>
      <div className="panel-item">
        <p className="uppercase mb-2">Hot</p>
        <Button value={hot} values={values} setValues={setValues} handleClick={setHot} shopId={_id} />
      </div>
    </div>

  );
};

export default ShopPanel;
