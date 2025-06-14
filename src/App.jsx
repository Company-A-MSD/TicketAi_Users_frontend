import logo from './logo.svg';


function App() {
  return (
    <div className="App bg-blue-900 min-h-screen flex flex-col items-center justify-center">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-2xl text-white'>
          This is the user frontend for TicketAi
        </p>
      
      </header>
    </div>
  );
}

export default App;
