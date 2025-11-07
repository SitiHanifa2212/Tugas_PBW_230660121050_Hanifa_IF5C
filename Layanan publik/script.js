document.addEventListener('DOMContentLoaded', function() {

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            
            navLinks.classList.toggle('active');

            const icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

 
    const scrollLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('href');
            const targetElement = document.querySelector(id);
            
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.querySelector('i').classList.add('fa-bars');
                navToggle.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    if (localStorage.getItem('userLoggedIn') === 'true') {
      
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('register-btn').style.display = 'none';
        document.getElementById('account-btn').style.display = 'inline-block';
    } else {
      
        document.getElementById('login-btn').style.display = 'inline-block';
        document.getElementById('register-btn').style.display = 'inline-block';
        document.getElementById('account-btn').style.display = 'none';
    }

    const logoutButton = document.getElementById('account-btn');

    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('userLoggedIn');
            location.reload();
        });
    }

    const servicesData = [
        { name: "Kependudukan", url: "#featured" },
        { name: "Perizinan Usaha", url: "#featured" },
        { name: "Kesehatan & Darurat", url: "#featured" },
        { name: "Tentang Aksara.ID", url: "#about-us" },
        { name: "Pengaduan Publik", url: "#popular" },
        { name: "Bayar Pajak (PBB)", url: "#popular" },
        { name: "Sertifikat Tanah", url: "#popular" },
        { name: "Data Statistik", url: "#popular" },
        { name: "Alur Layanan", url: "#flow" },
        { name: "Berita & Pengumuman", url: "#news" }
    ];

    const searchInputLive = document.querySelector('.hero-search input');
    const searchResults = document.getElementById('search-results');
    const heroSearchContainer = document.querySelector('.hero-search');

    if (searchInputLive && searchResults && heroSearchContainer) {

        searchInputLive.addEventListener('input', function() {
            const query = searchInputLive.value.trim().toLowerCase();

            searchResults.innerHTML = '';

            if (query === '') {
                searchResults.style.display = 'none';
                return;
            }

            const filteredServices = servicesData.filter(service => 
                service.name.toLowerCase().includes(query)
            );

            if (filteredServices.length > 0) {
                filteredServices.forEach(item => {
                    const resultItem = document.createElement('a');
                    resultItem.href = item.url;
                    resultItem.textContent = item.name;
                    searchResults.appendChild(resultItem);
                });
                searchResults.style.display = 'block';
            } else {
                searchResults.style.display = 'none';
            }
        });

        document.addEventListener('click', function(e) {
            if (!heroSearchContainer.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
  
    const heroSearch = document.querySelector('.hero-search');
    const searchInput = heroSearch.querySelector('input');
    const searchButton = heroSearch.querySelector('button');

    if (heroSearch && searchInput && searchButton) {
      searchButton.addEventListener('click', function(e) {
        
        const query = searchInput.value.trim().toLowerCase();

        if (query === '') {
         
          e.preventDefault();
      
          heroSearch.classList.add('shake');
      
          setTimeout(function() {
            heroSearch.classList.remove('shake');
          }, 500); 
        } else {
     
          e.preventDefault(); 
          
          const filteredServices = servicesData.filter(service => 
                service.name.toLowerCase().includes(query)
          );
       
          if (filteredServices.length > 0) {
           
            const bestMatchUrl = filteredServices[0].url; 
            const targetElement = document.querySelector(bestMatchUrl);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            searchInput.value = '';
            if (searchResults) {
                searchResults.style.display = 'none';
            }
          } else {
            heroSearch.classList.add('shake');
            setTimeout(function() {
              heroSearch.classList.remove('shake');
            }, 500);
          }
        }
      });
    }

}); 