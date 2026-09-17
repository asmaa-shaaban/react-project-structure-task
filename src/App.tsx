import { Button } from "./components/ui/button";
import { Card } from "./components/ui/Card";
import { Table } from "./components/ui/Table";

function App() {
  const users = [
    { name: "Asmaa", age: 22, city: "Menofia" },
    { name: "Ahmed", age: 25, city: "Cairo" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>1. Buttons (Reusable)</h2>
      <Button
        text="Primary Button"
        variant="primary"
        onClick={() => alert("Clicked!")}
      />
      <Button text="Danger Disabled" variant="danger" disabled />

      <h2>2. Cards (Reusable)</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card
          title="Card 1"
          description="This is first card with image"
          image="https://via.placeholder.com/300"
        />
        <Card title="Card 2" description="This card uses children prop">
          <div style={{ marginTop: "10px" }}>
            <Button text="Click Me Inside Card" variant="secondary" />
          </div>
        </Card>
      </div>

      <h2>3. Table (Reusable)</h2>
      <Table columns={["Name", "Age", "City"]} data={users} striped />
    </div>
  );
}

export default App;
