import ImageEffectViewer from "./components/ImageEffectViewer/ImageEffectViewer";
import './App.scss';

function App() {
  const FIRST_IMAGE_URL = "https://evntodev.blob.core.windows.net/lightroom-presets/DSC_7725.JPG";
  const SECOND_IMAGE_URL = "https://evntodev.blob.core.windows.net/edittemp/DSC_7725_9ad1cd9b-4f2f-43ee-a603-71b860a81c56.JPG";

  return (
    <div className="App">
      <div className="header">
        <h3>Effect Viewer</h3>
      </div>
      <div className="body">
      <ImageEffectViewer originalImageUrl={FIRST_IMAGE_URL} editedImageUrl={SECOND_IMAGE_URL} />
      </div>
    </div>
  );
}

export default App;
