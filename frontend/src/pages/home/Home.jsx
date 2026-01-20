import { Link } from "react-router-dom";
import api from "../../api/api";
import useSWR from "swr";

export default function Home() {
    const { data, isLoading, error } = useSWR('books', fetcher)
    async function fetcher(url) {
        try {
            const response = await api.get(url);
            return response.data.data;
        } catch (error) {
            console.log(error)
        }
    }
    console.log(isLoading)
    console.log(data)
    return (
        <>
            {
                isLoading ? <h1>Loading Data.....</h1> : (
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Handler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((element, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{element?.title}</td>
                                        <td>{element?.author}</td>
                                        <td className="d-flex gap-2 justify-content-center">
                                            <Link>Delete</Link>
                                            <Link>Update</Link>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                )
            }
        </>
    )
}