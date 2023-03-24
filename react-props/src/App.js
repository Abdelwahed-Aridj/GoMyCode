/* eslint-disable jsx-a11y/img-redundant-alt */
import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile';

function App() {
  const handleName = (name) => {
    alert(name);
  };

  return (
    <div className='App'>
      <Profile
        fullName='abdelwahed'
        bio='tinkerer'
        profession='Software Engineer'
        handleName={handleName}
      >
        <img
          src='https://en.meming.world/images/en/thumb/7/7f/Polish_Jerry.jpg/300px-Polish_Jerry.jpg'
          alt='profile picture'
          style={{ borderRadius: '50%' }}
        />
      </Profile>
    </div>
  );
}

export default App;
