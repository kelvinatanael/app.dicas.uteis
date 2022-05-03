function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);

    //CONFIG BANNERS
    admob.banner.config({
      id: 'ca-app-pub-9651252618998586/7209462877',
      autoShow: true,
    });
    admob.interstitial.config({
      id: 'ca-app-pub-9651252618998586/6638154218',
      autoShow: true
    })
    
    //PREPARE BANNERS
    admob.banner.prepare();
    admob.interstitial.prepare();

    //SHOW BANNERS
    // admob.banner.show();
    // admob.interstitial.show();
  }
  
document.addEventListener("deviceready", onDeviceReady, false);
