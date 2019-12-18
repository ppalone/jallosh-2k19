// Declarations
const imgDir = "./img/convenors/"
const details = {
    "Student Committee Convenors": [{
        "name": "Omkumar Davhale",
        "branch": "MECH",
        "img": "0"
    },
    {
        "name": "Rutushri Deshmukh",
        "branch": "MECH",
        "img": "1"
    }],
    "Core Committee": [{
        "name": "Saurabh Patil",
        "branch": "CIVIL",
        "img": "2"
    },
    {
        "name": "Ayushi Ghodmare",
        "branch": "CIVIL",
        "img": "3"
    },
    {
        "name": "Ajinkya Hedau",
        "branch": "ELPO",
        "img": "4"
    }],
    "Registration Committee": [{
        "name": "Shravani Gubre",
        "branch": "CSE",
        "img": "5"
    },
    {
        "name": "Rohini Thool",
        "branch": "CIVIL",
        "img": "6"
    },
    {
        "name": "Akshay Gaikwad",
        "branch": "EXTC",
        "img": "7"
    }],
    "Networking & Publicity Committee": [{
        "name": "Prajwal Nistane",
        "branch": "ELPO",
        "img": "8"
    },
    {
        "name": "Shimpli Patil",
        "branch": "ELPO",
        "img": "9"
    }],
    "Web Designing Committee": [{
        "name": "Shubham Jaiswal",
        "branch": "IT",
        "img": "10"
    },
    {
        "name": "Aditya Chichghare",
        "branch": "IT",
        "img": "30"
    }],
    "Stage and Highlighted Spots Committee": [{
        "name": "Sayali Mangate",
        "branch": "MECH",
        "img": "11"
    },
    {
        "name": "Ketan Bhoyar",
        "branch": "MECH",
        "img": "12"
    },
    {
        "name": "Ishwari Jamnik",
        "branch": "IT",
        "img": "13"
    }],
    "Reception Committee": [{
        "name": "Sayali Joshi",
        "branch": "MECH",
        "img": "14"
    },
    {
        "name": "Priya Geed",
        "branch": "ELPO",
        "img": "15"
    },
    {
        "name": "Harsha Thakre",
        "branch": "CIVIL",
        "img": "16"
    }],
    "Venue, Audio & Lights Committee": [{
        "name": "Shivam Tayade",
        "branch": "ELPO",
        "img": "17"
    },
    {
        "name": "Vedant Desai",
        "branch": "MECH",
        "img": "18"
    }],
    "Entertainment Committee": [{
        "name": "Mayur Madhekar",
        "branch": "IT",
        "img": "19"
    },
    {
        "name": "Shivani Udgirkar",
        "branch": "CSE",
        "img": "20"
    },
    {
        "name": "Vaishnavi Dankhade",
        "branch": "CIVIL",
        "img": "21"
    }],
    "Interaction Committee": [{
        "name": "Vaishnavi Bhatwadekar",
        "branch": "MECH",
        "img": "22"
    },
    {
        "name": "Geeta Peche",
        "branch": "CIVIL",
        "img": "23"
    },
    {
        "name": "Shoyeb Ashkan",
        "branch": "EXTC",
        "img": "24"
    },
    {
        "name": "Mahesh Mishra",
        "branch": "ELPO",
        "img": "25"
    }],
    "Catering Committee": [{
        "name": "Satish Jogdand",
        "branch": "MECH",
        "img": "26"
    },
    {
        "name": "Charu Bagade",
        "branch": "MECH",
        "img": "27"
    }],
    "Photography & Videography Committee": [{
        "name": "Piyush Kulmethe",
        "branch": "EXTC",
        "img": "28"
    },
    {
        "name": "Sarang Ikhar",
        "branch": "INSTRU",
        "img": "29"
    }],
};
// Get images from details object and render them on DOM
let keys = Object.keys(details);
keys.forEach(function(key) {
    let container = document.querySelector(".container-fluid");
    let row = document.createElement('div');
    let committeeTitle = document.createElement('h5');
    committeeTitle.className = "committee";
    row.className = 'row';
    committeeTitle.innerHTML = key;
    let committeeDetails = details[key];
    committeeDetails.forEach(function(detail) {
        let col = document.createElement('div');
        let img = document.createElement('img');
        let name = document.createElement('h5');
        let yearBranch = document.createElement('p');
        col.className = 'col';
        img.className = 'image-responsive';
        img.setAttribute('src',imgDir + detail.img + '.webp');
        name.innerHTML = detail.name;
        yearBranch.innerHTML = '3<sup>rd</sup> Year ' + '(' + detail.branch + ')';
        col.appendChild(img);
        col.appendChild(name);
        col.appendChild(yearBranch);
        row.appendChild(col);
    });
    container.appendChild(committeeTitle);
    container.appendChild(row);
});

document.addEventListener('DOMContentLoaded', ready);
// Functions
function ready() {
    function one () {
        appear(document.querySelector("#gcoea"), "GCOEA");
    }
    function two() {
        appear(document.querySelector("#alumni"), "ALUMNI ASSOCIATION 2019");
    }
    function three() {
        appear(document.querySelector("#presents"), "PRESENTS");
    }
    function four() {
        document.querySelector("#header h1").style.visibility = "visible";
        fadeIn(document.querySelector("#header h1"));
        document.querySelector("#header h5").style.visibility = "visible";
        fadeIn(document.querySelector("#header h5"));
        document.querySelector("#read-more").style.visibility = "visible";
        fadeIn(document.querySelector("#read-more"));
    }
    setTimeout(one, 0);
    setTimeout(two, 1500);
    setTimeout(three, 6500);
    setTimeout(four, 8500);
}
function appear(obj, txt) {
    let i = 0;
    typeWriter();
    function typeWriter() {
        if (i < txt.length) {
            obj.innerHTML += txt[i];
            i += 1;
            setTimeout(typeWriter, 200);
        }
    }
}
function fadeIn(obj) {
    let i = 0.1;
    fadder();
    function fadder() {
        if (i <= 1.00) {
            obj.style.opacity = i;
            i += 0.05;
            setTimeout(fadder, 100);
        }
    }
}
// Navbar
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});
