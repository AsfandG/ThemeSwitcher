import "./App.css";
import ToggleButton from "./components/ToggleButton";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { themeMode } = useTheme();
  return (
    <div>
      <div className="page-header">
        <h1>Theme Switcher</h1>
        <ToggleButton />
      </div>
      <div className="container">
        <div className={`card ${themeMode}`}>
          <div className="card__header">
            <img
              src="https://source.unsplash.com/600x400/?computer"
              alt="card__image"
              className="card__image"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-blue">Technology</span>
            <h4>What's new in 2022 Tech</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
              atque quidem!
            </p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5>Jane Doe</h5>
                <small>2h ago</small>
              </div>
            </div>
          </div>
        </div>
        <div className={`card ${themeMode}`}>
          <div className="card__header">
            <img
              src="https://source.unsplash.com/600x400/?food"
              alt="card__image"
              className="card__image"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-brown">Food</span>
            <h4>Delicious Food</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
              atque quidem!
            </p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5>Jony Doe</h5>
                <small>Yesterday</small>
              </div>
            </div>
          </div>
        </div>
        <div className={`card ${themeMode}`}>
          <div className="card__header">
            <img
              src="https://source.unsplash.com/600x400/?car,automobile"
              alt="card__image"
              className="card__image"
              width="600"
            />
          </div>
          <div className="card__body">
            <span className="tag tag-red">Automobile</span>
            <h4>Race to your heart content</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
              atque quidem!
            </p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5>John Doe</h5>
                <small>2d ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
