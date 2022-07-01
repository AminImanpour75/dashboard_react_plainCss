import Head from "../../components/Head/Head";
import Overview from "../../components/Overview/Overview";
import Summary from "../../components/Summary/Summary";
import ExchangeRow from "../../components/ExchangeRow/Exchangerow";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Head title="Dashboard" description="Dashboard/Crypto Currenct" />
      <Summary />
      <Overview />
      <ExchangeRow />
    </div>
  );
}
