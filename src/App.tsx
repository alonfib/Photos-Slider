import ImageEffectViewer from "./components/ImageEffectViewer/ImageEffectViewer";
import './App.scss';

function App() {
  const FIRST_IMAGE_URL = "https://evntodev.blob.core.windows.net/lightroom-presets/DSC_7725.JPG";
  const SECOND_IMAGE_URL = "https://evntodev.blob.core.windows.net/edittemp/DSC_7725_0a5d5c45-bc6f-4d87-aed6-edac73b29a5d.JPG";

  return (
    <div className="App">
      <ImageEffectViewer originalImageUrl={FIRST_IMAGE_URL} editedImageUrl={SECOND_IMAGE_URL} />
    </div>
  );
}

export default App;
