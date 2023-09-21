import './App.css';
import io from 'socket.io-client'
const socket = io.connect("http://localhost:8000")

function App() {
  const sendMessage = () => {
    console.log('duc')
    socket.emit("send_message" , {messages: 'hello'})
  }
  return (
    <div className="App">
        <input placeholder='Message...' />
        <button onClick={sendMessage}>Send message</button>
        {/* <ChatApp /> */}
    </div>
  );
}

export default App;
