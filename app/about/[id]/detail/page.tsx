const DetailPage = ({ params }: { params: { id: string } }) => {
  let { id } = params;

  return <div>Ini adalah page Detail dengan {id} </div>;
};

export default DetailPage;
