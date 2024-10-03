let listitems = document.getElementsByClassName('option');
let logoutButton = document.getElementById("logoutButton");
let contentTitle = document.getElementById("contentTitle");
let contentDescription = document.getElementById("contentDescription");

logoutButton.addEventListener("click", () => {
    window.location.href = './login.html';
});

for (let i = 0; i < listitems.length; i++) {
    listitems[i].addEventListener('click', () => {
        // Remove the 'selected' class from all items
        for (let j = 0; j < listitems.length; j++) {
            listitems[j].classList.remove('selected');
        }

        // Add 'selected' class to the clicked item
        listitems[i].classList.add('selected');

        // Update content based on selected item
        loadContent(listitems[i].innerText);
    });
}

function loadContent(selectedOption) {
    contentTitle.innerText = selectedOption;

    switch (selectedOption) {
        case 'Dashboard':
            contentDescription.innerHTML = `
                <h2>Dashboard Overview</h2>
                               <div class="dashboard-overview">
    <!-- Stat Boxes -->
    <div class="stat-grid">
        <div class="stat-box">
            <p>Loan Applications</p>
            <h3>100</h3>
        </div>
        <div class="stat-box">
            <p>Pending Loans</p>
            <h3>20</h3>
        </div>
        <div class="stat-box">
            <p>Declined Loans</p>
            <h3>35</h3>
        </div>
        <div class="stat-box">
            <p>Approved Loans</p>
            <h3>40</h3>
        </div>
    </div>

    <!-- Loan Limit Card -->
    <div class="loan-limit-card">
        <h2>Your Loan Limit</h2>
        <div class="limit-circle">
            <span class="current-limit">UGX 70,000</span>
            <div class="limit-range">
                <span>UGX 10,000 MIN</span>
                <span>UGX 200,000 MAX</span>
            </div>
        </div>
    </div>

    <!-- Outstanding Loans Section -->
    <div class="outstanding-loans">
        <h2>Outstanding Loans</h2>
        <div class="loan-card">
            <p>Vehicle Loan</p>
            <p>UGX 140,000</p>
            <p>Payment due in 7 days</p>
            <button>Pay Off</button>
        </div>
        <div class="loan-card">
            <p>Education Loan</p>
            <p>UGX 200,000</p>
            <p>Payment due in 7 days</p>
            <button>Pay Off</button>
        </div>
        <div class="loan-card">
            <p>Salary Advance</p>
            <p>UGX 130,000</p>
            <p>Payment due in 7 days</p>
            <button>Pay Off</button>
        </div>
    </div>
</div>
`;
            break;
        case 'Loans':
            contentDescription.innerHTML = `
                <h2>Your Loans</h2>
                <p>Manage your loans effectively. Here you can view, apply, or pay off your loans.</p>
                <table>
                    <tr>
                        <th>Loan Type</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Personal Loan</td>
                        <td>$2,000</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>Home Loan</td>
                        <td>$150,000</td>
                        <td>Pending</td>
                    </tr>
                </table>`;
            break;
        case 'Repayment Schedule':
            contentDescription.innerHTML = `
                <h2>Your Repayment Schedule</h2>
                <p>View and manage your repayment schedule here.</p>
                <table>
                    <tr>
                        <th>Loan Type</th>
                        <th>Next Payment Due</th>
                        <th>Amount Due</th>
                    </tr>
                    <tr>
                        <td>Personal Loan</td>
                        <td>2024-10-01</td>
                        <td>$200</td>
                    </tr>
                </table>`;
            break;
        case 'Loan Approval Status':
            contentDescription.innerHTML = `
                <h2>Your Loan Applications</h2>
                <p>Track your loan applications here.</p>
                <table>
                    <tr>
                        <th>Application Type</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Personal Loan</td>
                        <td>Approved</td>
                    </tr>
                    <tr>
                        <td>Home Loan</td>
                        <td>Under Review</td>
                    </tr>
                </table>`;
            break;
        case 'Documents':
            contentDescription.innerHTML = `
                <h2>Document Management</h2>
                <p>Upload and manage your loan documents here.</p>
                <p><strong>Note:</strong> Ensure all documents are submitted for timely processing.</p>`;
            break;
        case 'Profile':
            contentDescription.innerHTML = `
                <h2>Your Profile</h2>
                <p>View and edit your personal information here.</p>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" value="Mr. Aaron"><br>
                    <label for="email">Email:</label>
                    <input type="email" id="email" value="aaron@example.com"><br>
                    <button type="submit">Update Profile</button>
                </form>`;
            break;
        default:
            contentDescription.innerText = 'Content will be displayed here.';
    }
}

alert(window.localStorage.getItem('email'));
