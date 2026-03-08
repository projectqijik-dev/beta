// ==========================================
// 12. SINIF İÇERİK VE SORU HAVUZU (ÖRNEK VERİLER)
// ==========================================

// --- 1. KAVRAMLAR SÖZLÜĞÜ (12. SINIF MÜFREDATI) ---
const KAVRAMLAR = [
    { terim: "Kuvay-ı Milliye", anlam: "İşgallere karşı Türk halkının kendi bölgesini korumak amacıyla kurduğu silahlı, düzensiz ve bölgesel direniş örgütlerine verilen isim." },
    { terim: "Misak-ı Milli", anlam: "Son Osmanlı Mebusan Meclisi'nde kabul edilen, Milli Mücadele'nin hedeflediği asgari vatan sınırlarını (Milli Ant) çizen tarihi belgedir." },
    { terim: "Mandater Sistem", anlam: "I. Dünya Savaşı'ndan sonra sömürgeciliğin isim değiştirmiş halidir. 'Kendini yönetemeyecek devletleri bir süre yönetme' kılıfı altındaki işgal sistemidir." },
    { terim: "Tekalif-i Milliye Emirleri", anlam: "Kütahya-Eskişehir Savaşları'ndan sonra ordunun acil ihtiyaçlarını (yiyecek, giyecek, silah) karşılamak için Mustafa Kemal tarafından çıkarılan milli yükümlülük emirleridir." },
    { terim: "Müdafaa-i Hukuk Cemiyetleri", anlam: "Anadolu'nun işgalini engellemek için halk tarafından kurulan, milli direnişi organize eden yerel cemiyetlerin genel adıdır." },
    { terim: "Temsil Heyeti", anlam: "Erzurum Kongresi'nde kurulan ve TBMM açılana kadar Milli Mücadele'nin yürütme organı (hükümet) gibi çalışan kuruldur." },
    { terim: "Teşkilat-ı Esasiye", anlam: "Yeni Türk Devleti'nin TBMM tarafından kabul edilen (1921) ve egemenliğin kayıtsız şartsız millete ait olduğunu vurgulayan ilk anayasasıdır." }
];

// --- 2. DERS MATERYALLERİ (AKORDİYON MENÜ) ---
const dersMateryalleri = [
    {baslik: "📂 1. Ünite (20. Yüzyıl Başlarında Osmanlı) Ders Notları", link: "#"},
    {baslik: "📂 2. Ünite (Milli Mücadele Dönemi) Ders Notları", link: "#"},
    {baslik: "🗺️ Sevr Antlaşması ve İşgal Haritası", link: "#"},
    {baslik: "🧠 Atatürk İlkeleri Kavram Haritası", link: "#"}
];

// --- 3. KLASİK (AÇIK UÇLU) SORULAR ---
const klasikSorular = [
    { 
        soru: "Mustafa Kemal'in 'Geldikleri gibi giderler' sözü hangi olay üzerine söylenmiştir ve onun hangi kişilik özelliğini yansıtmaktadır?", 
        cevap: "Bu söz, Mondros Ateşkes Antlaşması'ndan sonra İtilaf Devletleri donanmasının İstanbul Boğazı'na demirlemesi üzerine söylenmiştir. Mustafa Kemal'in ileri görüşlülüğünü, ümitsizliğe yer vermemesini, kararlılığını ve vatanseverliğini yansıtır." 
    },
    { 
        soru: "Amasya Genelgesi'nde yer alan 'Milletin bağımsızlığını, yine milletin azim ve kararı kurtaracaktır.' maddesinin Milli Mücadele açısından önemini açıklayınız.", 
        cevap: "Bu madde ile Milli Mücadele'nin 'yöntemi' (milletin azim ve kararı) belirlenmiştir. Aynı zamanda üstü kapalı da olsa ilk kez milli egemenliğe (halk yönetimine/cumhuriyete) geçileceğinin ilk işaretidir." 
    },
    { 
        soru: "I. Dünya Savaşı'nın çıkmasında etkili olan iki temel genel nedeni (Fransız İhtilali ve Sanayi İnkılabı bağlamında) yazınız.", 
        cevap: "1) Sanayi İnkılabı'nın getirdiği hammadde ve pazar arayışına bağlı olarak devletler arası sömürgecilik yarışı (ekonomik rekabet). 2) Fransız İhtilali'nin yaydığı 'Milliyetçilik' akımının çok uluslu imparatorlukları parçalama etkisi." 
    }
];

// --- 4. ÇOKTAN SEÇMELİ TEST HAVUZU ---
const allTests = {
    test1: [
        {soru: "Aşağıdakilerden hangisi Trablusgarp Savaşı'nın nedenlerinden biridir?", secenekler: ["A) İtalya'nın siyasi birliğini geç tamamlayıp sömürge arayışına girmesi", "B) Rusya'nın sıcak denizlere inme politikası", "C) Balkan milletlerinin isyan etmesi", "D) Fransız İhtilali'nin etkileri", "E) İngiltere'nin Mısır'ı işgal etmesi"], cevap: "A) İtalya'nın siyasi birliğini geç tamamlayıp sömürge arayışına girmesi", aciklama: "İtalya sanayisine hammadde bulmak için kendisine en yakın ve savunmasız Osmanlı toprağı olan Trablusgarp'a saldırmıştır."},
        {soru: "Milli Mücadele'nin gerekçesi, amacı ve yöntemi ilk kez hangi belgede açıkça belirtilmiştir?", secenekler: ["A) Havza Genelgesi", "B) Erzurum Kongresi", "C) Sivas Kongresi", "D) Amasya Genelgesi", "E) Misak-ı Milli"], cevap: "D) Amasya Genelgesi", aciklama: "Amasya Genelgesi, Kurtuluş Savaşı'nın bir nevi ihtilal beyannamesi ve rotasıdır."},
        {soru: "Aşağıdaki cemiyetlerden hangisi Milli Mücadele'ye destek veren yararlı (milli) cemiyetlerden biri DEĞİLDİR?", secenekler: ["A) Kilikyalılar Cemiyeti", "B) Trakya Paşaeli Müdafaa-i Hukuk Cemiyeti", "C) İngiliz Muhipleri Cemiyeti", "D) İzmir Müdafaa-i Hukuk Cemiyeti", "E) Trabzon Müdafaa-i Hukuk Cemiyeti"], cevap: "C) İngiliz Muhipleri Cemiyeti", aciklama: "İngiliz Muhipleri Cemiyeti, kurtuluşu İngiliz mandasına girmekte arayan zararlı bir cemiyettir."},
        {soru: "Mustafa Kemal'in 'Siz orada yalnız düşmanı değil, milletin makus (ters dönmüş) talihini de yendiniz' sözü hangi savaşın sonucunda söylenmiştir?", secenekler: ["A) I. İnönü Savaşı", "B) II. İnönü Savaşı", "C) Sakarya Savaşı", "D) Büyük Taarruz", "E) Çanakkale Savaşı"], cevap: "B) II. İnönü Savaşı", aciklama: "II. İnönü zaferinden sonra İsmet Paşa'ya çektiği telgrafta söylemiştir."},
        {soru: "Osmanlı Devleti'nin fiilen (eylemsel olarak) sona ermesine neden olan antlaşma aşağıdakilerden hangisidir?", secenekler: ["A) Mondros Ateşkes Antlaşması", "B) Sevr Antlaşması", "C) Lozan Antlaşması", "D) Uşi Antlaşması", "E) Berlin Antlaşması"], cevap: "A) Mondros Ateşkes Antlaşması", aciklama: "Mondros ile Osmanlı ordusu terhis edilmiş ve toprakları işgale açık hale getirilerek fiilen bitmiştir."}
    ],
    test2: [
        {soru: "TBMM'yi tanıyan ilk Müslüman devlet aşağıdakilerden hangisidir?", secenekler: ["A) İran", "B) Mısır", "C) Pakistan", "D) Afganistan", "E) Suudi Arabistan"], cevap: "D) Afganistan", aciklama: "1 Mart 1921'de yapılan Türk-Afgan Dostluk Antlaşması ile Afganistan, TBMM'yi tanıyan ilk Müslüman devlet olmuştur."},
        {soru: "Erzurum Kongresi'nin toplanış amacı bölgesel olmasına rağmen, aldığı kararlar açısından ulusal bir kongre olmasını sağlayan temel etken nedir?", secenekler: ["A) Doğu illerinden gelen delegelerle toplanması", "B) Mustafa Kemal'in kongre başkanı seçilmesi", "C) 'Milli sınırlar içinde vatan bir bütündür, parçalanamaz' kararının alınması", "D) Kazım Karabekir'in destek vermesi", "E) İstanbul Hükümeti'nin kongreyi engellemeye çalışması"], cevap: "C) 'Milli sınırlar içinde vatan bir bütündür, parçalanamaz' kararının alınması", aciklama: "Sadece Doğu'yu değil, tüm vatanı ilgilendiren bağımsızlık kararları alındığı için ulusal bir nitelik kazanmıştır."},
        {soru: "Tekalif-i Milliye Emirleri'nin asıl amacı aşağıdakilerden hangisidir?", secenekler: ["A) Yeni vergiler ihdas etmek", "B) Ordunun silah, cephane ve yiyecek ihtiyacını halkın desteğiyle karşılamak", "C) İstanbul Hükümeti ile anlaşmak", "D) Düzenli orduyu dağıtmak", "E) Meclisi Ankara'dan Kayseri'ye taşımak"], cevap: "B) Ordunun silah, cephane ve yiyecek ihtiyacını halkın desteğiyle karşılamak", aciklama: "Sakarya Savaşı öncesi ordunun eksiklerini gidermek için çıkarılan milli yükümlülük emirleridir."},
        {soru: "Aşağıdakilerden hangisi Lozan Barış Antlaşması'nda Türkiye'nin kesinlikle taviz vermediği (kırmızı çizgisi olan) iki konudan biridir?", secenekler: ["A) Boğazlar ve Dış Borçlar", "B) Ermeni Yurdu ve Kapitülasyonlar", "C) Nüfus Mübadelesi ve Patrikhane", "D) Hatay Sınırı ve Musul Meselesi", "E) Azınlıklar ve Savaş Tazminatı"], cevap: "B) Ermeni Yurdu ve Kapitülasyonlar", aciklama: "Mustafa Kemal, Lozan'a giden heyetten Kapitülasyonların kaldırılması ve Doğu'da bir Ermeni devleti kurulmaması konusunda kesinlikle taviz verilmemesini istemiştir."},
        {soru: "Sevr Antlaşması'nın hukuken geçersiz sayılmasının (ölü doğan bir antlaşma olmasının) temel nedeni nedir?", secenekler: ["A) İtilaf Devletleri'nin kendi aralarında anlaşamaması", "B) Padişahın antlaşmayı imzalamaması", "C) Osmanlı Mebusan Meclisi'nin onayından geçmemesi", "D) Yunanlıların Anadolu'dan çekilmesi", "E) Amerika'nın antlaşmayı reddetmesi"], cevap: "C) Osmanlı Mebusan Meclisi'nin onayından geçmemesi", aciklama: "Kanun-i Esasi'ye göre bir uluslararası antlaşmanın geçerli olabilmesi için Meclis tarafından onaylanması gerekir. Ancak o sırada Mebusan Meclisi kapalıydı."}
    ],
    test3: [
        {soru: "Mudanya Ateşkes Antlaşması ile savaşılmadan, diplomatik yollarla kurtarılan bölgelerimiz aşağıdakilerin hangisinde doğru verilmiştir?", secenekler: ["A) İzmir - Manisa - Aydın", "B) Doğu Trakya - İstanbul - Boğazlar", "C) Kars - Ardahan - Batum", "D) Antalya - Adana - Muğla", "E) Urfa - Antep - Maraş"], cevap: "B) Doğu Trakya - İstanbul - Boğazlar", aciklama: "Mudanya Ateşkesi ile Türk ordusu tek kurşun atmadan Doğu Trakya, İstanbul ve Boğazların idaresini devralmıştır."},
        {soru: "Yeni Türk Devleti'nin ekonomik bağımsızlığını sağlamak ve kalkınma planlarını belirlemek amacıyla 1923'te toplanan kongre aşağıdakilerden hangisidir?", secenekler: ["A) Erzurum Kongresi", "B) Sivas Kongresi", "C) İzmir İktisat Kongresi", "D) Alaşehir Kongresi", "E) Pozantı Kongresi"], cevap: "C) İzmir İktisat Kongresi", aciklama: "17 Şubat 1923'te Kazım Karabekir başkanlığında toplanan ve 'Misak-ı İktisadi' (Ekonomik And) kararlarının alındığı kongredir."},
        {soru: "I. TBMM'nin çıkardığı ilk kanun aşağıdakilerden hangisidir?", secenekler: ["A) Hıyanet-i Vataniye Kanunu", "B) Ağnam (Hayvan) Vergisinin Artırılması Hakkında Kanun", "C) Teşkilat-ı Esasiye Kanunu", "D) Firariler Kanunu", "E) İstiklal Mahkemeleri Kanunu"], cevap: "B) Ağnam (Hayvan) Vergisinin Artırılması Hakkında Kanun", aciklama: "TBMM, ilk açıldığında acil nakit ihtiyacını karşılamak için küçükbaş hayvan vergisini artırmıştır."},
        {soru: "Güney Cephesi'nde Fransız ve Ermenilere karşı verilen mücadelede öne çıkan kahramanlarımızdan 'Sütçü İmam' hangi ilimizin sembol ismi olmuştur?", secenekler: ["A) Şanlıurfa", "B) Gaziantep", "C) Kahramanmaraş", "D) Adana", "E) Hatay"], cevap: "C) Kahramanmaraş", aciklama: "Sütçü İmam, Maraş savunmasının kıvılcımını yakan ve direnişi başlatan önemli bir kahramandır."},
        {soru: "Moskova Antlaşması ile Batum'un Gürcistan'a (Sovyet Rusya'ya) bırakılması, aşağıdaki hangi karardan verilen İLK tavizdir?", secenekler: ["A) Amasya Genelgesi", "B) Misak-ı Milli", "C) Teşkilat-ı Esasiye", "D) Sevr Antlaşması", "E) İstiklal Marşı"], cevap: "B) Misak-ı Milli", aciklama: "Misak-ı Milli sınırlarından verilen ilk taviz, I. İnönü Savaşı sonrasında Moskova Antlaşması ile Batum'un bırakılmasıdır."}
    ]
};