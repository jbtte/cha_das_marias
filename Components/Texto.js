import Titulo from './Titulo';

export default function Texto() {
  return (
    <>
      <div className="row">
        <div className="col-md-5 col-sm-10 text-center" id="text">
          <Titulo />

          <p>
            Gente vamos fazer esse chá de fralda da Andressa e do Luis Felipe
            bombar! Com duas eles vão precisar de muita fralda!{' '}
          </p>
          <p>
            Como não sabemos onde eles vão morar e se tem espaço, vamos fazer
            uma vaquinha para comprar fraldas.
          </p>
          <p>
            Aproveira e deixa uma mensagem pra eles que vamos fazer uma edição
            bem legal! Depois a gente manda a reação deles pra vocês
          </p>
        </div>
      </div>
    </>
  );
}
