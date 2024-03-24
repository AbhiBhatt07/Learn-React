import React, { useEffect, useState } from "react";

/* this is a hook useLoaderData is very useful */
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/AbhiBhatt07`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.location);
  //       setData(data);
  //     });
  // });

  /* 
    Another optimize way to fetch data more fastly:
     But more people dont use it of it's syntax(is not readable)
  */
  const data = useLoaderData();
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github User Location: {data.location}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;

export const getGithubData = async () => {
  const response = await fetch(`https://api.github.com/users/AbhiBhatt07`);
  return response.json();
};
