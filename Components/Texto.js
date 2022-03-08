import Titulo from './Titulo';

export default function Texto() {
  return (
    <>
      <div className="row">
        <div className="col-md-5 col-sm-10 text-center" id="text">
          <Titulo />

          <p>
            Gente, estamos organizando um chá de fraldas SURPRESA para as gêmeas
            da Andressa e do Luis Felipe!
          </p>
          <p>
            Vamos fazer esse chá de fraldas bombar! Com duas eles vão precisar
            de muitas fraldas!!
          </p>
          <p>
            Como não sabemos onde eles vão morar e se terão espaço para guardar
            as fraldas, vamos fazer uma vaquinha para eles irem comprando as
            fraldas conforme forem precisando.
          </p>
          <p>
            Aproveita e deixa uma mensagem pra eles que iremos fazer uma edição
            bem legal! Depois a gente manda a reação deles pra vocês!
          </p>
          <p>
            Contamos com ajuda até o dia 10/04/2022 para termos tempo de
            organizar tudo antes das Marias nascerem!
          </p>
        </div>
      </div>
    </>
  );
}
