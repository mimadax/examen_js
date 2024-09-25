document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector('#register-form');
    const errorDiv = document.getElementById("error");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("confirm_password");
  
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        errorDiv.classList.add("hidden");


        if (password1.value.length < 8) {
            errorDiv.innerText = "Le mot de passe est trop court.";
            errorDiv.classList.remove("hidden");
            return;
        }

        if (password1.value !== password2.value) {
            errorDiv.innerText = "Les mots de passe ne correspondent pas.";
            errorDiv.classList.remove("hidden");
            return;
        }
  
       
        const formData = new FormData(registerForm);
        const username = formData.get("email");
        const password = formData.get("password");
  
        
        try {
            const res = await fetch("http://localhost:8000/api/login_check", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, password }),
            });
  
//////// A PARTIR D ICI : Je n'ai pas reussi à faire afficher mes codes + textes  ////////////
/// AUSSI Ligne 13 à 23, j'ai pas reussi à l'intégérer a ce code sans faire tout planter  /// 

            if (res.status === 201) {
                errorDiv.innerText = "Inscription réussie !";
                errorDiv.classList.remove("hidden");
                errorDiv.style.color = "green"; 

            } else if (res.status >= 400) {
                errorDiv.innerText = "Erreur lors de l'inscription. Veuillez vérifier vos informations.";
                errorDiv.classList.remove("hidden");
                errorDiv.style.color = "red";
            }
  
        } catch (err) {

            console.error("Erreur lors de la connexion :", err);
            errorDiv.innerText = "Erreur de connexion, veuillez réessayer.";
            errorDiv.classList.remove("hidden");
            errorDiv.style.color = "red";
        }
    });
  });