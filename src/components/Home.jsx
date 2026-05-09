import React, { useEffect } from "react";
import { useAuth } from "../store/authStore";
import {
  articlePageWrapper,
  articleHeader,
  articleMainTitle,
  articleContent,
} from "../styles/common.js";

function Home() {
  const { checkAuth } = useAuth();

  // Restore session on mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className={articlePageWrapper}>
      <div className={articleHeader}>
        <h1 className={articleMainTitle}>Welcome to Blog App</h1>
      </div>
      <div className={articleContent}>
        <h2 className="text-xl font-semibold mb-4">How to use the app</h2>
        <ol className="list-decimal ml-6 space-y-3 text-gray-700">
          <li>Register or log in using the navigation menu.</li>
          <li>Browse articles written by different authors.</li>
          <li>Read content and share your thoughts in comments.</li>
          <li>If you are an author, create and manage your own articles.</li>
          <li>Admins ensure the platform remains safe and high‑quality.</li>
        </ol>
        <p className="mt-6 text-gray-600">
          This app is designed to be responsive and accessible on all devices —
          whether you’re on a phone, tablet, or desktop.
        </p>
      </div>
    </div>
  );
}

export default Home;
