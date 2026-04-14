import "./App.css";
import CommonLayout from "./Mainlayout/CommonLayout/CommonLayout";
import { ThemeProvider } from "./providers/theme.provider";

function App() {
  return (
    <>
      <div>
        <ThemeProvider defaultTheme="dark" storageKey="">
          <CommonLayout />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
