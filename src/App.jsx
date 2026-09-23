import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DressCollection from './components/DressCollection';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <DressCollection />
        <Services />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
