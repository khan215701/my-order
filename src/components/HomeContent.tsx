import Card from "./Card";

const HomeContent = () => {
  const data = [
    {
      topic: "Total Revenue",
      label: "Revenue Today",
      value: 256,
      percentage: 58,
    },
    {
      topic: "Sales Analytics",
      label: "Revenue Today",
      value: 8541,
      percentage: 32,
    },
    {
      topic: "Statistics",
      label: "Revenue Today",
      value: 4569,
      percentage: 80,
    },
    {
      topic: "Total Revenue",
      label: "Revenue Today",
      value: 158,
      percentage: 32,
    },
  ];
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <Card data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
