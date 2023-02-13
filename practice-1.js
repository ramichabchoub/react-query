// react query practice 1
import { useQuery } from "react-query";

function APIStatus() {
  const statusQuery = useQuery(["status"], () =>
    fetch("https//ui.dev/api/courses/react-query/status").then((res) =>
      res.json()
    )
  );
  // Method 1
  if(statusQuery.status === "loading") {
    return <div>Loading...</div>;
  }
  // Method 2
  if (statusQuery.isLoading) {
    return <div>Loading...</div>;
  }
  // Method 3
  if (statusQuery.isFetching) {
    return <div>Loading...</div>;
  }
  const data = statusQuery.data;
  return <pre>{JSON.stringify(data)}</pre>;
}
export default function App() {
  return <APIStatus />;
}

function APIStatus() {
  const statusQuery = useQuery(["status"], () =>
    fetch("https//ui.dev/api/courses/react-query/status").then((res) =>
      res.json()
    )
  );
  if (statusQuery.isLoading) {
    return <div>Loading...</div>;
  }
  const data = statusQuery.data;
  return <pre>{JSON.stringify(data)}</pre>;
}