import ReactDOM from "react-dom";
import App from "./App";
import AudioProvider from "./context/AudioConext";

ReactDOM.render(
  <AudioProvider>
    <App />
  </AudioProvider>,
  document.getElementById('root')
);
