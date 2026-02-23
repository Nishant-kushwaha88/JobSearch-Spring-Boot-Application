import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { user, token } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    // Wait until token is available
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        if (user?.role === 'HR') {
          const jobResponse = await axios.get(`${BASE_URL}/jobs/view`, config);
          setJobs(
            jobResponse.data.filter(
              (job) => job.postedBy.email === user.email
            )
          );

          const appResponse = await axios.get(
            `${BASE_URL}/crm/applications/hr?email=${user.email}`,
            config
          );
          setApplications(appResponse.data);
        } 
        else if (user?.role === 'EMPLOYEE') {
          const response = await axios.get(
            `${BASE_URL}/crm/applications`,
            config
          );
          setApplications(response.data);
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [user, token, BASE_URL]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setJobs(jobs.filter((job) => job.id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  // 🔴 Loading state
  if (loading) {
    return <div className="p-4">Loading dashboard...</div>;
  }

  // 🔴 Not logged in
  if (!token) {
    return <div className="p-4">Please login to view your dashboard</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">
        Dashboard ({user?.role})
      </h2>

      {user?.role === 'HR' ? (
        <>
          <h3 className="text-xl font-semibold mb-2">Your Posted Jobs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {jobs.map((job) => (
              <div key={job.id} className="border p-4 rounded shadow">
                <h4 className="text-lg font-semibold">{job.title}</h4>
                <p>Company: {job.company}</p>
                <p>Location: {job.location}</p>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="text-red-600 hover:underline mt-2"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-2">Applications Received</h3>
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="border p-4 rounded shadow">
                <h4 className="text-lg font-semibold">{app.job.title}</h4>
                <p>Applicant: {app.user.name}</p>
                <p>Email: {app.user.email}</p>
                <p>Status: {app.status}</p>
                <a
                  href={`${BASE_URL}/resume/download/${encodeURIComponent(app.resumeUrl)}`}
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Download Resume
                </a>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold mb-2">Your Applications</h3>
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="border p-4 rounded shadow">
                <h4 className="text-lg font-semibold">{app.job.title}</h4>
                <p>Company: {app.job.company}</p>
                <p>Status: {app.status}</p>
                <a
                  href={`${BASE_URL}/resume/download/${encodeURIComponent(app.resumeUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  View Resume
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;