import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";

const Blogs = () => {
  return (
    <div className="min-h-[100vh]">
      <Helmet>
        <title>Akash Ali | Blogs</title>
      </Helmet>
      <PageTitle title={"blogs coming soon"} />
    </div>
  );
};

export default Blogs;
