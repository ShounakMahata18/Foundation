import { useNavigate } from 'react-router-dom';
import "./dashboard.css";


const leaderboardData = [
    { name: "Aditya Verma", score: 7500 },
    { name: "Riya Sharma", score: 7000 },
    { name: "Rahul Mehta", score: 6800 },
    { name: "Sneha Kapoor", score: 6600 },
    { name: "Aman Gupta", score: 6500 },
    { name: "Kriti Nair", score: 6400 },
    { name: "Ishaan Roy", score: 6300 },
    { name: "Neha Yadav", score: 6200 },
    { name: "Kunal Singh", score: 6100 },
    { name: "Divya Patil", score: 6000 },
];

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <nav>
                <div className="org">She Can Foundation</div>
                <button className="login-btn" onClick={() => navigate("/auth")}>Login</button>    
            </nav>

            <div className="body">
                <div className="section1">
                    <div className="details">
                        <h2>Intern Details</h2>
                        <p>Name: Shounak Mahata</p>
                        <p>Dummy Ref. Code: shounakmahata2025</p>
                    </div>

                    <div className="total-donation">
                        <h2>Total Donation(INR)</h2>
                        <p>263824</p>
                    </div>
                </div>
            </div>

            <div className="leaderboards">
                <h3>Leaderboard</h3>
                <div className="table-scroll-container">
                    <table className="leaderboard-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>User</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>Rs {user.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
