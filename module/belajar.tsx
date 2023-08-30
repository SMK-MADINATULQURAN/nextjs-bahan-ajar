import Button from "../components/Button";

interface BelajarProps {
  handleSubmit: (a: number, b: string) => void;
  
}

const BelajarEvent: React.FC<BelajarProps> = ({ handleSubmit }) => {
  return (
    <section>
      <h1>Belajar Event</h1>
      <Button
        title="testing"
        colorSchema="green"
        onClick={() => {
          handleSubmit(200, "akbar");
        }}
      />
    </section>
  );
};

export default BelajarEvent;
