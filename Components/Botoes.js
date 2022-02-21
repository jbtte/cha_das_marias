import CloudinaryUploadWidget from './CloudinaryUploadWidget';
import BotaoVaquinha from './BotaoVaquinha';

export default function Botoes() {
  return (
    <div className="row">
      <div className="col-md-5 col-sm-12 text-center mt-4 d-flex justify-content-around">
        <BotaoVaquinha />
        <CloudinaryUploadWidget />
      </div>
    </div>
  );
}
