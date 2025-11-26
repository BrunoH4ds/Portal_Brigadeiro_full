import SideBar from "../Page_Components/comp_admin/SideBar";
import AdminProtectedRoute from "../Protection/AdminProtectedRoute";

export interface MainAdminProps {
  children: React.ReactNode;
}

export default function MainAdmin(props: MainAdminProps) {
  return (
    <AdminProtectedRoute>
      <div className="flex flex-col md:flex-row flex-1 h-full w-full mt-28 mb-8 md:gap-0">
        <SideBar />
        <div className="flex flex-1 flex-col md:mx-8 gap-8">
          <div className="p-6 bg-white/50 backdrop-blur-md shadow-md rounded-md">
            {props.children}
          </div>
        </div>
      </div>
    </AdminProtectedRoute>
  );
}
