import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h4>Profile</h4>
      </header>
      <div className="app-grid">
        <div className="profile-item">
          <img src="/images/N.jpg" />
          <h4>ID : 6301895</h4>
          <h4>Name : Napat</h4>
          <h4>LastName : Kullpakarn</h4>
        </div>
        <div className="profile-item">
          <img src="/images/C.jpg" />
          <h4>เกมที่ชอบ</h4>
          <h4>- Far Cry 3</h4>
          <h4>- Fallout 4</h4>
        </div>
        <div className="profile-item">
          <img src="/images/F.jpg" />
          <h4>อาหารที่ชอบ</h4>
          <h4>- ไม่มีอะไรที่ชอบเป็นพิเศษ</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
