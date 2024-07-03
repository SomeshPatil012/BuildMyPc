const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
    const mainsignInButton = document.getElementById('mainsignin');
    const mainsignUpButton = document.getElementById('mainsignup');
    mainsignInButton.addEventListener('click', () => {
        simulateLogin(() => {
            setTimeout(() => {
                saveLoginStatus();
                redirectToHomePage();
            }, 4000);
        });
    });
    mainsignUpButton.addEventListener('click', () => {
        simulateLogin(() => {

            setTimeout(() => {
                saveLoginStatus();
                redirectToHomePage();
            }, 4000);
        });
    });
    function simulateLogin(callback) {
        callback();
    }
    function redirectToHomePage() {
        window.location.href = "/Html/Mini Project/main/Home.html";
    }
    function saveLoginStatus() {
        localStorage.setItem('isLoggedIn', 'true');
    }
