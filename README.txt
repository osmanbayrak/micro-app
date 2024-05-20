Micro App sadece main app için detay modalı açmayı sağlar.

Projeyi lokalimizde ayağa kaldırmamız için sırasıyla şu komutları ana dizinde çalıştırabilirsiniz:

    -npm i
    -npm start

Uygulama 3000 Portunda çalışıyor olacaktır. Micro App kısmı olduğu için otomatik tarayıcı başlatmaz.

Bu uygulama içersinde yalnızca data gösterimi olduğu için Redux'a ihtiyaç duyulmamıştır.

Uygulamaya gelen veri props olarak Main app'den gelmektedir. "./src/components/DetailModal" açılan modalın ana komponentidir.

Uygulamayı canlı ortama taşımak ve deployment yapmak için "npm run build" komutuyla bundle hali "./dist" klasörü içersinde statik dosyalar olarak oluşmaktadır manuel olarak host makinesindeki
ilgili dizine taşınabilir. Veya docker-compose-up ile containerda çalışacak hale gelen docker-image ayağa kaldırılabilir. Ve pushlanarak ilgili host makinesine atılabilir.