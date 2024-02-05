import { useTheme } from "../context/ThemeContext";
import "./toggle.css";

const ToggleButton = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="checkbox-parent">
      <input type="checkbox" id="switch" onClick={toggleTheme} />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
};

export default ToggleButton;
