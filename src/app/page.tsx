import Dashboard from "./component/dashboard";
import Hero from "./component/Hero";
import ProductCards from "./Products/page";
import SubscriptionComponent from "./Subscription/page";


export default function Page() {
  return (
    <div>
      <Hero />
      <ProductCards />
      <SubscriptionComponent />
      <Dashboard />
    </div>
  );
}
