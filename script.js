document.addEventListener("DOMContentLoaded", function() {

let jobs = [
{title:"Software Developer",category:"IT",location:"Bangalore",salary:"₹5 LPA CTC",experience:"1-3 Years",type:"Full-Time"},
{title:"Frontend Developer",category:"IT",location:"Hyderabad",salary:"₹4 LPA CTC",experience:"Fresher",type:"Remote"},
{title:"Backend Developer",category:"IT",location:"Pune",salary:"₹6 LPA CTC",experience:"3-5 Years",type:"Full-Time"},
{title:"Data Analyst",category:"Data",location:"Chennai",salary:"₹5 LPA CTC",experience:"1-3 Years",type:"Full-Time"},
{title:"ML Engineer",category:"Data",location:"Bangalore",salary:"₹8 LPA CTC",experience:"3-5 Years",type:"Remote"},
{title:"HR Executive",category:"HR",location:"Delhi",salary:"₹3 LPA CTC",experience:"Fresher",type:"Full-Time"},
{title:"Marketing Executive",category:"Marketing",location:"Mumbai",salary:"₹4 LPA CTC",experience:"1-3 Years",type:"Part-Time"},
{title:"UI Designer",category:"Design",location:"Hyderabad",salary:"₹4 LPA CTC",experience:"1-3 Years",type:"Remote"},
{title:"Graphic Designer",category:"Design",location:"Chennai",salary:"₹3 LPA CTC",experience:"Fresher",type:"Part-Time"},
{title:"DevOps Engineer",category:"IT",location:"Pune",salary:"₹7 LPA CTC",experience:"3-5 Years",type:"Full-Time"},
{title:"Cloud Engineer",category:"IT",location:"Bangalore",salary:"₹9 LPA CTC",experience:"5+ Years",type:"Remote"},
{title:"SEO Specialist",category:"Marketing",location:"Delhi",salary:"₹3 LPA CTC",experience:"1-3 Years",type:"Part-Time"},
{title:"Content Writer",category:"Marketing",location:"Mumbai",salary:"₹3 LPA CTC",experience:"Fresher",type:"Remote"},
{title:"Recruiter",category:"HR",location:"Hyderabad",salary:"₹3 LPA CTC",experience:"1-3 Years",type:"Full-Time"},
{title:"Business Analyst",category:"Data",location:"Pune",salary:"₹6 LPA CTC",experience:"3-5 Years",type:"Full-Time"},
{title:"QA Engineer",category:"IT",location:"Chennai",salary:"₹4 LPA CTC",experience:"1-3 Years",type:"Full-Time"},
{title:"System Admin",category:"IT",location:"Bangalore",salary:"₹5 LPA CTC",experience:"3-5 Years",type:"Full-Time"},
{title:"IT Support",category:"IT",location:"Delhi",salary:"₹3 LPA CTC",experience:"Fresher",type:"Part-Time"},
{title:"Product Manager",category:"Marketing",location:"Mumbai",salary:"₹10 LPA CTC",experience:"5+ Years",type:"Full-Time"},
{title:"Data Engineer",category:"Data",location:"Hyderabad",salary:"₹7 LPA CTC",experience:"3-5 Years",type:"Remote"},
{title:"Cyber Security Analyst",category:"IT",location:"Pune",salary:"₹6 LPA CTC",experience:"3-5 Years",type:"Full-Time"},
{title:"Finance Executive",category:"HR",location:"Chennai",salary:"₹4 LPA CTC",experience:"1-3 Years",type:"Full-Time"},
{title:"Operations Manager",category:"HR",location:"Bangalore",salary:"₹8 LPA CTC",experience:"5+ Years",type:"Full-Time"},
{title:"Social Media Manager",category:"Marketing",location:"Delhi",salary:"₹4 LPA CTC",experience:"1-3 Years",type:"Remote"},
{title:"App Developer",category:"IT",location:"Mumbai",salary:"₹5 LPA CTC",experience:"1-3 Years",type:"Full-Time"},
{title:"AI Engineer",category:"Data",location:"Bangalore",salary:"₹9 LPA CTC",experience:"5+ Years",type:"Remote"},
{title:"Technical Writer",category:"Marketing",location:"Pune",salary:"₹4 LPA CTC",experience:"1-3 Years",type:"Part-Time"},
{title:"UX Researcher",category:"Design",location:"Hyderabad",salary:"₹5 LPA CTC",experience:"3-5 Years",type:"Remote"},
{title:"Network Engineer",category:"IT",location:"Chennai",salary:"₹5 LPA CTC",experience:"3-5 Years",type:"Full-Time"},
{title:"Junior Developer",category:"IT",location:"Delhi",salary:"₹3 LPA CTC",experience:"Fresher",type:"Full-Time"}
];

function renderJobs() {
    let search = document.getElementById("searchInput").value.toLowerCase();
    let category = document.getElementById("categoryFilter").value;
    let location = document.getElementById("locationFilter").value;

    let experience = document.getElementById("experienceFilter")?.value || "All";
    let jobType = document.getElementById("jobTypeFilter")?.value || "All";

    let container = document.getElementById("jobList");
    container.innerHTML = "";

    jobs.forEach(job => {
        if (
            (category === "All" || job.category === category) &&
            (location === "All" || job.location === location) &&
            (experience === "All" || job.experience === experience) &&
            (jobType === "All" || job.type === jobType) &&
            job.title.toLowerCase().includes(search)
        ) {
            container.innerHTML += `
                <div class="job-card">
                    <h3>${job.title}</h3>
                    <p><strong>Location:</strong> ${job.location}</p>
                    <p><strong>Department:</strong> ${job.category}</p>
                    <p><strong>Experience:</strong> ${job.experience}</p>
                    <p><strong>Job Type:</strong> ${job.type}</p>
                    <p><strong>Salary:</strong> ${job.salary}</p>
                </div>
            `;
        }
    });
}

document.getElementById("searchInput")?.addEventListener("input", renderJobs);
document.getElementById("categoryFilter")?.addEventListener("change", renderJobs);
document.getElementById("locationFilter")?.addEventListener("change", renderJobs);
document.getElementById("experienceFilter")?.addEventListener("change", renderJobs);
document.getElementById("jobTypeFilter")?.addEventListener("change", renderJobs);


window.clearLocation = function(){
    document.getElementById("locationFilter").value = "All";
    renderJobs();
}

window.openLogin = function(){
    document.getElementById("loginModal").style.display="flex";
}

window.closeLogin = function(){
    document.getElementById("loginModal").style.display="none";
}

window.openRegister = function(){
    document.getElementById("registerModal").style.display="flex";
}

window.closeRegister = function(){
    document.getElementById("registerModal").style.display="none";
}

window.register = function(){
    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value.trim();
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name.length < 3){
        document.getElementById("regMsg").innerText="Enter valid name";
        return;
    }

    if(!email.match(emailPattern)){
        document.getElementById("regMsg").innerText="Enter valid email";
        return;
    }

    localStorage.setItem("user", JSON.stringify({email,password}));
    document.getElementById("regMsg").style.color="green";
    document.getElementById("regMsg").innerText="Registration successful. Please login.";
}

window.login = function(){
    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value.trim();
    let user = JSON.parse(localStorage.getItem("user"));

    if(user && user.email === email && user.password === password){
        closeLogin();
        document.getElementById("heroSection").style.display = "none";
        document.getElementById("jobsSection").style.display="block";
        document.getElementById("logoutBtn").style.display="inline-block";
        renderJobs();
    } else {
        document.getElementById("loginMsg").innerText="Invalid email or password";
    }
}

window.logout = function(){
    document.getElementById("jobsSection").style.display="none";
    document.getElementById("logoutBtn").style.display="none";
    document.getElementById("heroSection").style.display="block";
}

window.scrollHome = function(){
    window.scrollTo({top:0,behavior:"smooth"});
}

});