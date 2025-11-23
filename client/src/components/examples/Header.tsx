import Header from '../Header';
import { ThemeProvider } from '../ThemeProvider';

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 px-6">
          <section id="about" className="min-h-screen flex items-center justify-center">
            <h2 className="text-4xl font-bold">About Section</h2>
          </section>
          <section id="experience" className="min-h-screen flex items-center justify-center">
            <h2 className="text-4xl font-bold">Experience Section</h2>
          </section>
          <section id="projects" className="min-h-screen flex items-center justify-center">
            <h2 className="text-4xl font-bold">Projects Section</h2>
          </section>
          <section id="writing" className="min-h-screen flex items-center justify-center">
            <h2 className="text-4xl font-bold">Writing Section</h2>
          </section>
          <section id="contact" className="min-h-screen flex items-center justify-center">
            <h2 className="text-4xl font-bold">Contact Section</h2>
          </section>
        </div>
      </div>
    </ThemeProvider>
  );
}
