import { useEffect, useState } from "react";

function UserProfilePage() {
  const token = localStorage.getItem("token");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      if (!token) return;

      try {
        const res = await fetch(
          "https://react-vid-app.vercel.app/api/users/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to load profile");
        }

        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadProfile();
  }, [token]);

  console.log("Profile data:", profile);

  return (
    <div>
      <code>{token}</code>
    </div>
  );
}

export default UserProfilePage;
