import React, { useContext } from "react";
import Image from "../components/Image";
import { getClass } from "../utils";
import { Context } from "../Context";

const Photos = () => {
  const { photos } = useContext(Context);
  const images =
    photos.length !== 0
      ? photos.map((photo, index) => (
          <Image key={photo.id} img={photo} className={getClass(index)} />
        ))
      : [];
  return (
    <main className="photos">
      {images.length === 0 ? <h2>loading...</h2> : images}
    </main>
  );
};

export default Photos;
