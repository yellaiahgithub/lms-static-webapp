import { Link } from "@tanstack/react-location";

function AdminSideBar() {
  return (
    <div>
      <div className="h-12 border-b">
        <div className="flex items-center justify-between pl-4">
          <Link to={"courses"}>Courses</Link>
          <Link className="btn" to={"courses/add"}>
            + Add
          </Link>
        </div>
        <div className="flex h-12 items-center border-b pl-4">
          <Link to="users">Users</Link>
        </div>
      </div>
    </div>
  );
}

export default AdminSideBar;
