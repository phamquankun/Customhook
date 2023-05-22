import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TTodos, URL_MOCK } from "./Todos";

const Todo = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TTodos>();
  const [isError, setIsError] = useState(false);

  const getTodoByID = async (id: string) => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${URL_MOCK}todos/${id}`);
      if (res.data) {
        setData(res.data);
      }
    } catch (e) {
      if (e) setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getTodoByID(id);
    }
  }, [id, count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click count</button>
      {isLoading ? (
        <h1 className="text-center">Loading...</h1>
      ) : data?.id ? (
        <div className="todos">
          <div className="todo">
            <span>{data.title}</span>
            <span>{data.body}</span>
          </div>
        </div>
      ) : (
        <h1 className="text-center">Data not found</h1>
      )}
    </>
  );
};

export default Todo;
