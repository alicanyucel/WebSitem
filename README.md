# 🌟 Ali Can Yücel - Kişisel Website

Modern ve profesyonel bir kişisel portfolio website projesi. .NET ve Angular teknolojileri konusunda uzmanlaşmış bir full-stack developer olan Ali Can Yücel'in yeteneklerini, projelerini ve deneyimlerini sergileyen responsive web uygulaması.

## 🚀 Özellikler

- ✨ Modern ve responsive tasarım
- 🎨 Gradient renkler ve smooth animasyonlar
- 📱 Mobile-first yaklaşım
- 🔗 Tıklanabilir iletişim linkleri
- ⚡ Fast loading ve optimized performance
- 🎯 SEO dostu yapı
- 🌐 Türkçe içerik

## 🛠️ Teknolojiler

- **Frontend Framework:** Angular 16.2.12
- **Styling:** CSS3 (Custom styles, Flexbox, Grid)
- **TypeScript:** 5.1.6
- **Build Tool:** Angular CLI 16.2.16
- **Package Manager:** npm
- **Development Server:** Angular Live Development Server

## 📋 Gereksinimler

- Node.js (v16 veya üzeri önerilir)
- npm (v6 veya üzeri)
- Angular CLI (isteğe bağlı, npx kullanılabilir)

## 🏗️ Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/alicanyucel/personal-website.git
   cd personal-website
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Development server'ı başlatın:**
   ```bash
   npm start
   # veya
   ng serve
   ```

4. **Tarayıcıda açın:**
   ```
   http://localhost:4200
   ```

## 📂 Proje Yapısı

```
src/
├── app/
│   ├── app.component.html      # Ana HTML template
│   ├── app.component.css       # Component stilleri
│   ├── app.component.ts        # Component logic
│   └── app.module.ts           # Ana modül
├── assets/                     # Statik dosyalar
├── styles.css                  # Global stiller
└── index.html                  # Ana HTML dosyası
```

## 🎨 Website Bölümleri

### 🏠 Hero Section
- Kişisel tanıtım
- Profesyonel başlık
- Call-to-action butonları

### 👨‍💻 Hakkımda
- Kişisel hikaye
- Teknoloji tutkusu
- Profesyonel deneyim

### 🛠️ Teknik Yetenekler
- **Backend:** C#, .NET Core, ASP.NET MVC, Web API, Entity Framework
- **Frontend:** Angular, TypeScript, HTML5, CSS3, JavaScript, RxJS
- **Diğer:** SQL Server, Git, Azure, REST API, LINQ, Dependency Injection

### 🚀 Projeler
- E-Ticaret Platformu
- CRM Sistemi
- API Management Tool

### 📞 İletişim
- Email bağlantısı
- LinkedIn profili
- GitHub hesabı

## 🔨 Development

### Yeni component oluşturma:
```bash
ng generate component component-name
```

### Build alma:
```bash
ng build
```

### Production build:
```bash
ng build --prod
```

### Testleri çalıştırma:
```bash
ng test
```

## 🎨 Customization

### Renkler
Ana renk paleti `app.component.css` dosyasında tanımlanmıştır:
- Primary: `#667eea`
- Secondary: `#764ba2`
- Accent: `#ff6b6b`

### Fonts
Google Fonts'tan Inter font ailesi kullanılmaktadır.

### Responsive Breakpoints
- Mobile: `< 480px`
- Tablet: `480px - 768px`
- Desktop: `> 768px`

## 📱 Browser Desteği

- ✅ Chrome (son 2 versiyon)
- ✅ Firefox (son 2 versiyon)
- ✅ Safari (son 2 versiyon)
- ✅ Edge (son 2 versiyon)

## 🚀 Deployment

### GitHub Pages
```bash
ng build --prod --base-href="https://alicanyucel.github.io/personal-website/"
npx angular-cli-ghpages --dir=dist/personal-website
```

### Netlify
```bash
ng build --prod
# dist/ klasörünü Netlify'a yükleyin
```

### Vercel
```bash
ng build --prod
# Vercel CLI ile deploy edin
```

## 📞 İletişim

**Ali Can Yücel**
- 📧 Email: [yucelalicandan@hotmail.com](mailto:yucelalicandan@hotmail.com)
- 💼 LinkedIn: [Ali Can Yücel](https://www.linkedin.com/in/ali-can-y%C3%BCcel-062b6517a/)
- 🐱 GitHub: [github.com/alicanyucel](https://github.com/alicanyucel)

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📈 Versiyon Geçmişi

- **v1.0.0** - İlk release
  - Temel website yapısı
  - Responsive tasarım
  - İletişim formları
  - SEO optimizasyonu

---

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

*Bu website Ali Can Yücel tarafından Angular framework'ü kullanılarak geliştirilmiştir.*

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
