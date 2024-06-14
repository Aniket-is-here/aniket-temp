import { useEffect, useState } from "react";

export default function Searchtwo() {
  const [videos, setvideos] = useState([]);
  const [search, setsearch] = useState("");
  const [newvideos, setnewvideos] = useState([]);

  const onchangeHandler = (change) => {
    setsearch(change.target.value.toLowerCase());
  };


  useEffect(() => {
    async function fetchData() {
    try {
        const response = await fetch("https://easydash.enago.com/videos")
        const jsonRes = await response.json();
        setvideos(jsonRes)
    } catch (e) {
        console.error(e);
    }
    }
    fetchData()
  }
    , []);

  useEffect(() => {
    const newvideos = videos.filter((video)=>  video.description).filter((video)=>video.description.toLowerCase().includes(search))
    // const filteredVideos = newvideos
    setnewvideos(newvideos);
  }, [videos, search]);

  return (
    <div>
      <input onChange={onchangeHandler} />
      <div>
        {newvideos.length === 0 ? <div>loading</div> : ""}
        {newvideos.map((video) => {
          return <div>{video.description}</div>;
        })}
      </div>
    </div>
  );
}
