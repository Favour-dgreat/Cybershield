import Footer from "../footer";
import Navbar from "../navbar";
import Loader from "../loader/loader";
function LandingLayout({ children }: any) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Loader />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default LandingLayout;
