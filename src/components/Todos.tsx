import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export type TTodos = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const URL_MOCK = "https://636ca96eab4814f2b26a5b35.mockapi.io/api/v1/";

function Todos() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TTodos[]>([]);
  const [isError, setIsError] = useState(false);

  const onClick = (id: number) => {
    navigate(`todo/${id}`);
  };

  const controller = new AbortController();
  const getTodos = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${URL_MOCK}todos`, {
        // signal: controller.signal,
      });
      setData(res.data);
    } catch (e) {
      if (e) {
        setIsError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };
  // controller.abort();

  useEffect(() => {
    // const timer = setInterval(() => {
    //   getTodos();
    // }, 1000);
    // return () => clearInterval(timer);
    getTodos();
  }, []);

  useEffect(() => {
    console.log("check re-render");
  });

  const refetch = () => {
    getTodos();
  };

  return (
    <div className="todos">
      <button onClick={() => refetch()}>Reload Data</button>
      {isError && <h1 className="text-center">Error...</h1>}
      {isLoading && <h1>Loading...</h1>}
      {!isLoading &&
        !isError &&
        (data?.length ? (
          data?.map((item) => (
            <div
              key={item.id}
              className="todo"
              onClick={() => onClick(item.id)}
            >
              <span>{item.title}</span>
              <span>{item.body}</span>
            </div>
          ))
        ) : (
          <h1>Not found</h1>
        ))}
    </div>
  );
}
export default Todos;
