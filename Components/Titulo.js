import Image from 'next/image';
import gemeas from '../public/gemeas.png';

export default function Titulo() {
  return (
    <>
      <div>
        <div className="d-sm-none d-block">
          <Image
            src={gemeas}
            height={200}
            width={200}
            alt="Desenho de gêmeas"
          />
        </div>
        <div>
          <h1>Chá das</h1>
          <h1 className="pink mb-md-5 mb-sm-2">Marias</h1>
        </div>
      </div>
    </>
  );
}
