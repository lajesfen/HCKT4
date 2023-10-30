import 'devextreme/dist/css/dx.light.css';
import { DataGrid } from 'devextreme-react/data-grid';
import './App.css';

function App() {

  const fetchData = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8080/groups');
      const data = await response.json();

      console.log(data);
      return (
        <div>
          <DataGrid id="dataGrid" dataSource={data}>
          </DataGrid>
        </div>
      );

    } catch (error) {
      console.log('Failed to fetch');
    }
  }

  fetchData();
}

export default App;
