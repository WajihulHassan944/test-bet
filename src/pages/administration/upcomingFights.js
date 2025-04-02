import UpcomingFights from "@/Components/Admin/UpcomingFights";
import AdminPrivateRoute from "@/Components/PrivateRoute/PrivateRouteAdmin";

const Index = () => {
  return (
    <AdminPrivateRoute>
      <UpcomingFights />
    </AdminPrivateRoute>
  );
};

export default Index;
