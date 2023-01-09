import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Header/>
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
            <Form/>
            <hr className="mt-4" />
            <Tasks/>
            <hr className="mt-4" />
            <Footer/>
        </div>
    </div>
  );
}

export default App;
