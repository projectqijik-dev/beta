// ==========================================
// 11. SINIF İÇERİK VE SORU HAVUZU (ÖRNEK VERİLER)
// ==========================================

// --- 1. KAVRAMLAR SÖZLÜĞÜ (11. SINIF MÜFREDATI) ---
const KAVRAMLAR = [
    { terim: "Denge Politikası", anlam: "Osmanlı Devleti'nin 19. yüzyıldan itibaren toprak bütünlüğünü korumak için Avrupalı büyük devletler arasındaki çıkar çatışmalarından yararlanma stratejisi." },
    { terim: "Makyavelizm", anlam: "Amaca ulaşmak için ahlaki veya yasal kuralları hiçe sayarak her türlü aracı meşru gören, devleti güçlendirmeyi tek hedef sayan siyasi düşünce (Niccolò Machiavelli)." },
    { terim: "Merkantilizm", anlam: "Bir devletin zenginliğini ve gücünü, sahip olduğu altın ve gümüş gibi değerli madenlerin miktarına bağlayan ekonomik doktrin." },
    { terim: "Nizam-ı Cedit", anlam: "III. Selim döneminde Avrupa örnek alınarak yapılan askeri, idari ve mali yeniliklerin tamamı ve aynı isimle kurulan yeni ordunun adı." },
    { terim: "Rönesans", anlam: "15. ve 16. yüzyıllarda İtalya'da başlayıp Avrupa'ya yayılan, edebiyat, sanat ve bilim alanlarındaki 'Yeniden Doğuş' hareketi." },
    { terim: "Sanayi İnkılabı", anlam: "18. yüzyılda İngiltere'de insan ve hayvan gücünün yerini, buhar gücüyle çalışan makinelerin almasıyla üretimde yaşanan köklü değişim." },
    { terim: "Şark Meselesi (Doğu Sorunu)", anlam: "19. yüzyılda Avrupalı devletlerin Osmanlı Devleti'nin topraklarını paylaşma ve Türkleri Avrupa'dan, hatta Anadolu'dan çıkarma projesine verdikleri genel ad." },
    { terim: "Viyana Kongresi (1815)", anlam: "Napolyon Savaşları sonrası Avrupa'nın bozulan siyasi dengesini yeniden kurmak ve mutlak krallıkları korumak (Restorasyon Dönemi) amacıyla toplanan kongre." }
];

// --- 2. DERS MATERYALLERİ (AKORDİYON MENÜ) ---
const dersMateryalleri = [
    {baslik: "📂 1. Ünite Ders Notları (PDF)", link: "#"},
    {baslik: "📂 2. Ünite Ders Notları (PDF)", link: "#"},
    {baslik: "🗺️ 19. Yüzyıl Avrupa Haritası", link: "#"},
    {baslik: "🧠 I. Dünya Savaşı Cepheler Şeması", link: "#"}
];

// --- 3. KLASİK (AÇIK UÇLU) SORULAR ---
const klasikSorular = [
    { 
        soru: "Osmanlı Devleti, 19. yüzyılda ayakta kalabilmek için 'Denge Politikası' izlemiştir. Bu politikanın temel mantığını ve Osmanlı'nın Mısır'ı işgal eden Fransa'ya karşı hangi devleti neden yanına çektiğini açıklayınız.", 
        cevap: "Denge politikası, büyük devletlerin kendi aralarındaki çıkar çatışmalarını kullanarak Osmanlı'nın varlığını sürdürme çabasıdır. Napolyon Mısır'ı işgal ettiğinde (1798), sömürge yollarının (Hindistan yolu) tehlikeye girdiğini gören İngiltere ve sıcak denizlere inmek isteyen Rusya, Fransa'ya karşı Osmanlı'yı desteklemiştir." 
    },
    { 
        soru: "Avrupa'da gerçekleşen Sanayi İnkılabı'nın (Endüstri Devrimi), el tezgahlarına ve tarıma dayalı ekonomisi olan Osmanlı Devleti üzerindeki olumsuz ekonomik ve siyasi etkilerini yazınız.", 
        cevap: "Sanayi İnkılabı ile Avrupa'da seri ve ucuz üretim başlamış, Osmanlı pazarları Avrupa'nın ucuz mallarıyla dolmuştur (Açık pazar haline gelmiştir). Lonca teşkilatı ve el tezgahları çökmüş, işsizlik artmıştır. Ayrıca Avrupalıların hammadde ve pazar arayışı (Sömürgecilik), Osmanlı topraklarının işgal edilmesine (Cezayir, Mısır vb.) neden olmuştur." 
    },
    { 
        soru: "Fransız İhtilali'nin yaydığı 'Milliyetçilik' (Her millete bir devlet) akımı, Osmanlı Devleti gibi imparatorlukları nasıl etkilemiştir? Örneklendirerek açıklayınız.", 
        cevap: "Milliyetçilik akımı, bünyesinde birçok farklı milleti (Sırp, Yunan, Bulgar vb.) barındıran Osmanlı Devleti gibi çok uluslu imparatorlukların parçalanmasına neden olmuştur. Avrupalı devletlerin kışkırtmasıyla azınlıklar bağımsızlık için isyan etmişlerdir. Örnek: Yunanistan'ın veya Sırbistan'ın Osmanlı'ya isyan ederek bağımsız olması." 
    }
];

// --- 4. ÇOKTAN SEÇMELİ TEST HAVUZU ---
const allTests = {
    test1: [
        {soru: "Aşağıdakilerden hangisi Fransız İhtilali'nin sonuçlarından biri DEĞİLDİR?", secenekler: ["A) Milliyetçilik akımının yayılması", "B) İnsan Hakları Bildirgesi'nin yayınlanması", "C) Mutlak monarşilerin güç kazanması", "D) Eşitlik, adalet ve hürriyet kavramlarının önem kazanması", "E) İmparatorlukların parçalanma sürecine girmesi"], cevap: "C) Mutlak monarşilerin güç kazanması", aciklama: "Fransız İhtilali, krallıkların (mutlak monarşi) yıkılıp cumhuriyet veya meşruti rejimlerin kurulmasına zemin hazırlamıştır."},
        {soru: "1815 Viyana Kongresi'nde Avrupalı devletlerin aldığı 'Milliyetçilik isyanları nerede çıkarsa çıksın birlikte bastırılacaktır' kararına ne ad verilir?", secenekler: ["A) Rönesans", "B) Reform", "C) Restorasyon Dönemi", "D) Makyavelizm", "E) Aydınlanma Çağı"], cevap: "C) Restorasyon Dönemi", aciklama: "Viyana Kongresi ile başlayan ve eski düzeni (krallıkları) geri getirmeyi amaçlayan döneme Restorasyon (Yeniden Kurma) dönemi denir."},
        {soru: "Bir devletin gücünün ve zenginliğinin kaynağının değerli madenler (altın ve gümüş) olduğunu savunan, bu nedenle ihracatı artırıp ithalatı kısmayı hedefleyen ekonomik anlayış aşağıdakilerden hangisidir?", secenekler: ["A) Sosyalizm", "B) Kapitalizm", "C) Liberalizm", "D) Feodalite", "E) Merkantilizm"], cevap: "E) Merkantilizm", aciklama: "Coğrafi Keşifler sonrasında Avrupa'da zenginliğin ölçüsü toprak olmaktan çıkıp maden olmuştur. Bu sisteme Merkantilizm denir."},
        {soru: "Osmanlı Devleti'nin 19. yüzyılda izlediği 'Denge Politikası' ilk kez hangi olay sırasında uygulanmıştır?", secenekler: ["A) Kırım Savaşı", "B) Fransa'nın Mısır'ı İşgali (1798)", "C) 93 Harbi", "D) Viyana Kuşatması", "E) Balkan Savaşları"], cevap: "B) Fransa'nın Mısır'ı İşgali (1798)", aciklama: "Napolyon Mısır'a saldırdığında Osmanlı, İngiltere ve Rusya'dan yardım isteyerek ilk kez denge politikasını uygulamıştır."},
        {soru: "Avrupa'da Rönesans ve Reform hareketlerinin yaşanması, aşağıdaki kurumlardan hangisinin siyasi ve bilimsel gücünü doğrudan sarsmıştır?", secenekler: ["A) Krallık", "B) Papalık (Katolik Kilisesi)", "C) Burjuvazi", "D) Lonca Teşkilatı", "E) Derebeylik"], cevap: "B) Papalık (Katolik Kilisesi)", aciklama: "Rönesans ile dogmatik (skolastik) düşünce yıkılmış, Reform ile kilisenin gücü kırılmıştır."}
    ],
    test2: [
        {soru: "Osmanlı Devleti'nde askeri, idari ve mali alanda köklü yenilikler yapmayı hedefleyen ve III. Selim dönemi ıslahatlarına verilen genel ad aşağıdakilerden hangisidir?", secenekler: ["A) Lale Devri", "B) Tanzimat", "C) Meşrutiyet", "D) Nizam-ı Cedit", "E) İstibdat"], cevap: "D) Nizam-ı Cedit", aciklama: "III. Selim'in kurduğu yeni orduya ve yaptığı tüm yeniliklere Nizam-ı Cedit (Yeni Düzen) adı verilir."},
        {soru: "Sanayi İnkılabı'nın Osmanlı Devleti üzerindeki en belirgin yıkıcı etkisi hangi alanda olmuştur?", secenekler: ["A) Askeri teşkilat", "B) Dini inanışlar", "C) Eğitim sistemi", "D) Ekonomi ve yerli el tezgahları", "E) Hukuk sistemi"], cevap: "D) Ekonomi ve yerli el tezgahları", aciklama: "Sanayileşmiş Avrupa'nın ucuz fabrika ürünleri karşısında, el emeğine dayanan Osmanlı loncaları (esnafı) rekabet edememiş ve batmıştır."},
        {soru: "Rusya'nın sıcak denizlere (Akdeniz) inebilmek için Balkanlardaki Slav ve Ortodoks milletleri kışkırtarak Osmanlı'yı parçalamayı hedeflediği politikasının adı nedir?", secenekler: ["A) Panslavizm", "B) Turancılık", "C) Pantürkizm", "D) Makyavelizm", "E) Sömürgecilik"], cevap: "A) Panslavizm", aciklama: "Slavları tek çatı altında birleştirme idealine Panslavizm denir."},
        {soru: "1838 Balta Limanı Ticaret Antlaşması'nın Osmanlı ekonomisi açısından en önemli sonucu nedir?", secenekler: ["A) Ekonominin güçlenmesi", "B) Osmanlı'nın Avrupa'nın yarı sömürgesi (açık pazarı) haline gelmesi", "C) Yerli üretimin teşvik edilmesi", "D) Dış borçların ödenmesi", "E) Gümrük gelirlerinin artması"], cevap: "B) Osmanlı'nın Avrupa'nın yarı sömürgesi (açık pazarı) haline gelmesi", aciklama: "Bu antlaşmayla İngiliz tüccarlara büyük ayrıcalıklar verilmiş, yerli esnaf rekabet edemeyerek çökmüştür."},
        {soru: "Avrupalı devletlerin 19. yüzyılda Osmanlı Devleti'nin zayıflığından yararlanarak onu parçalama ve bölüşme planlarına verdikleri siyasi isim hangisidir?", secenekler: ["A) Haçlı Seferleri", "B) Monroe Doktrini", "C) Şark Meselesi (Doğu Sorunu)", "D) Magma Carta", "E) Rönesans"], cevap: "C) Şark Meselesi (Doğu Sorunu)", aciklama: "Şark Meselesi, Türkleri önce Balkanlardan, sonra Anadolu'dan atma projesidir."}
    ],
    test3: [
        {soru: "Osmanlı Devleti'nin ilk dış borcunu hangi savaş sırasında ve hangi devletten aldığı bilinmektedir?", secenekler: ["A) 93 Harbi - Fransa", "B) Kırım Savaşı (1854) - İngiltere", "C) I. Dünya Savaşı - Almanya", "D) Balkan Savaşları - Rusya", "E) Trablusgarp Savaşı - İtalya"], cevap: "B) Kırım Savaşı (1854) - İngiltere", aciklama: "Osmanlı Devleti ilk dış borcunu Sultan Abdülmecid döneminde Kırım Savaşı'nın masraflarını karşılamak için İngiltere'den almıştır."},
        {soru: "Makyavelizm düşüncesinin devlet yönetimine getirdiği anlayış aşağıdakilerden hangisidir?", secenekler: ["A) Amaca ulaşmak için her yol mubahtır.", "B) Devlet adalete dayanmalıdır.", "C) Yöneticiler halk tarafından seçilmelidir.", "D) Hukuk her şeyin üstündedir.", "E) Savaş kesinlikle yasaklanmalıdır."], cevap: "A) Amaca ulaşmak için her yol mubahtır.", aciklama: "Makyavelli'ye göre devletin gücünü artırmak için ahlaki veya yasal sınır tanımaksızın her türlü araç kullanılabilir."},
        {soru: "Sırpların, Yunanlıların ve Bulgarların 19. yüzyılda Osmanlı'ya karşı bağımsızlık isyanı başlatmalarındaki en önemli dış etken aşağıdakilerden hangisidir?", secenekler: ["A) Rönesans hareketleri", "B) Sanayi İnkılabı", "C) Fransız İhtilali'nin yaydığı Milliyetçilik fikri", "D) Coğrafi Keşifler", "E) Kavimler Göçü"], cevap: "C) Fransız İhtilali'nin yaydığı Milliyetçilik fikri", aciklama: "Milliyetçilik akımı her millete kendi devletini kurma hakkı tanıdığı için imparatorluklarda isyanlara yol açmıştır."},
        {soru: "Avrupa'da bilimin, sanatın ve edebiyatın dinin (skolastik düşüncenin) baskısından kurtulup 'akıl ve deneye' dayandığı, 18. yüzyıla verilen isim hangisidir?", secenekler: ["A) Orta Çağ", "B) Karanlık Çağ", "C) Aydınlanma Çağı", "D) Restorasyon", "E) Feodalite"], cevap: "C) Aydınlanma Çağı", aciklama: "Aydınlanma Çağı, akıl, deney ve bilimin ön plana çıktığı dönemdir."},
        {soru: "Osmanlı Devleti'nin 19. yüzyılda iç işlerine karışılmasını engellemek ve azınlık isyanlarını durdurmak için padişah fermanıyla ilan ettiği ve hukukun üstünlüğünü tanıdığı belge hangisidir?", secenekler: ["A) Sened-i İttifak", "B) Tanzimat Fermanı", "C) Kanun-i Esasi", "D) Mecelle", "E) Teşkilat-ı Esasiye"], cevap: "B) Tanzimat Fermanı", aciklama: "Tanzimat Fermanı ile padişah ilk kez kendi gücünün üstünde kanun gücünü tanımış, herkese eşit haklar vermiştir."}
    ]
};