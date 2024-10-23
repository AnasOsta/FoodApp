"use client";
import { useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();
  function handlePicker() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const image = event.target.files[0];

    if (!image) return;

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(image);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>Please pick an image.</p>}
          {pickedImage && <Image src={pickedImage} alt="Picked image" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />

        <button onClick={handlePicker} className={classes.button} type="button">
          Pick an image
        </button>
      </div>
    </div>
  );
}
