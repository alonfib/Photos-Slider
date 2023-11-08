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
        <img src={originalImageUrl} alt="First Image" className="original-image" />
        <img src={editedImageUrl} alt="Second Image" className="edited-image" style={{ opacity }} />
      </div>
      <div className="slider-container">
        <div className="text">Original Photo</div>
        <Slider className="image-effect-view-slider" onChange={(percent) => setOpacity((percent as number) * 0.01)} />
        <div className="text">Edited Photo</div>
      </div>
    </div>
  );
};

export default ImageEffectViewer;
