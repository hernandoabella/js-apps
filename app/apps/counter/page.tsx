import React from "react";

const Page = () => {
  return (
    <div>
      <iframe src={process.env.PUBLIC_URL + "/index.html"} title="Embedded Content" frameBorder="0"></iframe>
    </div>
  );
};

export default Page;
