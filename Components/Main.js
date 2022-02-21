import Texto from './Texto';
import Botoes from './Botoes';

export default function Main() {
  return (
    <main>
      <div className="bg">
        <div className="container">
          <Texto />
          <Botoes />
        </div>
      </div>
    </main>
  );
}
