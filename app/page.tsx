import Button from "./component/Button";
import Latihan from "./component/Latihan";
import Note from "./component/Note";
function Home() {
  return (
    <>
      <h1>Hello World</h1>

      <Latihan name={"izan"} username="izan" age={20} isVerified={true} />

      {/* <Latihan name={'hilmi'} username="hilmi" age={25} isVerified />
      <Latihan name={'zaky'} username="zaky" age={20} isVerified ={false} />    */}
      <Button title="save" isDisabled />
      <Button title="cancel" />
      <Note title="Belajar NextJS" status="success">
        <p>Saya sedang bealjar NextJS</p>
      </Note>
      <Note title="Belajar NextJS" status="success">
        <div className="text-green-500">Saya sedang bealjar NextJS</div>
      </Note>
      <Note title="Belajar NextJS" status="success">
        <Button title="cancel" />
      </Note>
      <Note title="Belajar NextJS" status="success">
        ok
      </Note>
    </>
  );
}

export default Home;
