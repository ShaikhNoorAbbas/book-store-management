import { Link } from "react-router-dom";
import api from "../../api/api";
import useSWR from "swr";

export default function Home() {
  const { data, isLoading, error } = useSWR("books", fetcher);
  async function fetcher(url) {
    try {
      const response = await api.get(url);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }
  console.log(isLoading);
  console.log(data);
  // function to delete data
  function handleDelete(id) {
    console.log(id);
  }
  return (
    <>
      {isLoading ? (
        <h1>Loading Data.....</h1>
      ) : (
        <section>
          <h1 className="text-center my-4" style={{ color: "crimson" }}>
            Showing Books
          </h1>
          <table
            className="table text-center"
            style={{ boxShadow: "1px 1px 0.85rem crimson" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Handler</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{element?.title}</td>
                    <td>{element?.author}</td>
                    <td className="d-flex gap-2 justify-content-center">
                      <button
                        onClick={() => handleDelete(element?._id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                      <Link className="btn btn-warning">Update</Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
}
