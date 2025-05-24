import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getUsers, getProducts } from '../services/api';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const stats = [
  { name: 'Total Users', value: '0' },
  { name: 'Total Products', value: '0' },
  { name: 'Total Revenue', value: '$0' },
  { name: 'Total Orders', value: '0' },
];

export default function Dashboard() {
  const [userData, setUserData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [users, products] = await Promise.all([
          getUsers(),
          getProducts(),
        ]);
        setUserData(users.data);
        setProductData(products.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const userGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'User Growth',
        data: [65, 78, 90, 105, 125, 140],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
        fill: true,
      },
    ],
  };

  const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1900, 3000, 5000, 4000, 6000],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        tension: 0.1,
        fill: true,
      },
    ],
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 py-8 px-2 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8 drop-shadow-lg tracking-tight">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Dashboard</span>
      </h1>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <div
            key={stat.name}
            className="overflow-hidden rounded-2xl backdrop-blur-md bg-white/60 border border-white/40 shadow-xl px-6 py-7 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
          >
            <dt className="truncate text-base font-semibold text-gray-700 mb-2">
              {stat.name}
            </dt>
            <dd className="mt-1 text-4xl font-extrabold tracking-tight text-gray-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl backdrop-blur-md bg-white/60 border border-white/40 shadow-xl px-6 py-7 transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-bold leading-6 text-gray-900 mb-4 drop-shadow">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">User Growth</span>
          </h3>
          <div className="mt-2">
            <Line data={userGrowthData} />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl backdrop-blur-md bg-white/60 border border-white/40 shadow-xl px-6 py-7 transition-transform duration-200 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-bold leading-6 text-gray-900 mb-4 drop-shadow">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">Sales Overview</span>
          </h3>
          <div className="mt-2">
            <Line data={salesData} />
          </div>
        </div>
      </div>
    </div>
  );
} 