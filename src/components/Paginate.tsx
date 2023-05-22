import axios from "axios";
import { useEffect, useState } from "react";

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        `https://api.github.com/repositories/1300192/issues?per_page=2&page=${currentPage}`
      );
      setData(result.data);
      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const nextPage = () => {
    setData([]);
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setData([]);
    setCurrentPage(currentPage - 1);
  };
  return (
    <>
      <h1>Pagination</h1>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button onClick={nextPage}>Next Page</button>
      <h1>Page: {currentPage}</h1>
      {loading && <h1 className="text-center">Loading...</h1>}
      {data?.length &&
        data.map((item: any, index: any) => (
          <div className="todos" key={index}>
            <div className="todo">
              <span>{item?.title}</span>
              <span>{item?.url}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default Paginate;
