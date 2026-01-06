import AdSlot from "../components/AdSlot";

export default function Home() {
  return (
    <>
      <AdSlot slot="1111111111" style={{ minHeight: 120, margin: 10 }} />

      <div className="container">
        <div className="main">
          <AdSlot slot="2222222222" style={{ minHeight: 250 }} />
          <AdSlot slot="3333333333" style={{ minHeight: 250 }} />
          <AdSlot slot="4444444444" style={{ minHeight: 300 }} />
        </div>

        <div className="sidebar">
          <AdSlot slot="5555555555" style={{ minHeight: 300 }} />
          <AdSlot slot="6666666666" style={{ minHeight: 300 }} />
        </div>
      </div>

      <AdSlot slot="7777777777" style={{ minHeight: 120, margin: 10 }} />
    </>
  );
}
