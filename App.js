import * as React from "react";
import LoadingIndicator from "./components/loadingIndicator/LoadingIndicator";
import Table from "./components/Table/Table";
import Header from "./components/Header/Header";

const App = () => {
  const [state, setState] = React.useState({
    isLoading: true,
    data: [],
  });
  const [flag, setFlag] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://178.128.196.163:3000/api/records/`);
      const data = await response.json();

      setState({
        isLoading: false,
        data: data,
      });
    }
    fetchData();
  }, [flag]);

  return (
    <div className="container">
      <Header flag={flag} setFlag={setFlag} />

      {state.isLoading ? (
        <LoadingIndicator />
      ) : (
        <Table data={state.data} flag={flag} setFlag={setFlag} />
      )}
    </div>
  );
};

export default App;
