import Slider from "rc-slider";
import { useState } from "react";
import "./ImageEffectViewer.scss";
import "rc-slider/assets/index.css";

interface ImageEffectViewerProps {
  originalImageUrl: string;
  editedImageUrl: string;
}

const ImageEffectViewer = ({ originalImageUrl, editedImageUrl }: ImageEffectViewerProps) => {
  const [opacity, setOpacity] = useState(0);

  return (
    <div className="image-effect-view">
      <div className="images-container">
        <img src={originalImageUrl} alt="Original Image" className="original-image" />
        <img src={editedImageUrl} alt="Edited Image" className="edited-image" style={{ opacity }} />
      </div>
      <div className="slider-container">
        <h4 className="text">Original Photo</h4>
        <Slider
          styles={{
            track: {
              backgroundColor: "#8b8787",
            },
            rail: {
              backgroundColor: "#dcd8d8",
              borderRadius: "8px",
            },
            handle: {
              borderColor: "#333",
              lightingColor: "#333",
              color: "#333",
            },
          }}
          className="image-effect-view-slider"
          onChange={(percent) => setOpacity((percent as number) * 0.01)}
        />
        <h4 className="text">Edited Photo</h4>
      </div>
    </div>
  );
};

export default ImageEffectViewer;
