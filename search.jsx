import { useEffect, useState } from "react";

export default function Search() {
  const [videos, setvideos] = useState([]);
  const [search, setsearch] = useState("");
  const [newvideos, setnewvideos] = useState([]);

  const onchangeHandler = (change) => {
    setsearch(change.target.value);
  };

  useEffect(() => {
    fetch("https://easydash.enago.com/videos")
      .then((res) => res.json())
      .then((video) => setvideos(video));
  }, []);

  useEffect(() => {
    const newvideos = videos.filter((video) =>
      video.description.includes(search)
    );
    setnewvideos(newvideos);
  }, [videos, search]);

  return (
    <div>
      <input onChange={onchangeHandler} />
      <div>
        {videos.length === 0 ? <div>loading</div> : ""}
        {newvideos.map((video) => {
          return <div>{video.description}</div>;
        })}
      </div>
    </div>
  );
}
