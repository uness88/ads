
      const ads = [
        '<img src="https://www.aboutcampbtob.eu/wp-content/uploads/2017/01/300x250-example-banner-300x250.jpg">',
        '<img src="https://thebocavoice.com/wp-content/uploads/2020/10/banner-ad-300x250-1.png">',
        '<img src="https://tgandh.com/wp-content/uploads/2022/03/300x250-example.jpg">',
        '<img src="https://email.uplers.com/blog/wp-content/uploads/2022/02/Holiday-sale-banner-ad.png">',
        '<img src="https://s3.envato.com/files/56417722/Preview/Green/Marketing%20Banner%20ad%20300x250%20-%20Green.png">'
      ];
      const adContainers = document.querySelectorAll('.ad-container');

      const getRandomAd = () => {
        return ads[Math.floor(Math.random() * ads.length)];
      }

      const displayAds = () => {
        for (let i = 0; i < adContainers.length; i++) {
          adContainers[i].innerHTML = getRandomAd();
        }
      }

      window.addEventListener('load', () => {
        displayAds();
      });
