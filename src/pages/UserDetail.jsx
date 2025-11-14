import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="userdetails-container">
      <h2>User Details</h2>
      <p>User ID: {id}</p>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default UserDetails;
