import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ali Can Yücel - Kişisel Website';
  showScrollButton = false;
  isMobileMenuOpen = false;
  
  ngOnInit(): void {
    // Sayfa yüklendiğinde scroll pozisyonunu kontrol et
    this.checkScrollPosition();
  }
  
  // Scroll event listener
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScrollPosition();
    // Scroll yaparken mobil menüyü kapat
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
  
  // Mobil menü toggle
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  // Mobil menüyü kapat
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
  
  // Scroll pozisyonunu kontrol et
  private checkScrollPosition(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollButton = scrollPosition > 300; // 300px sonra butonu göster
  }
  
  // Scroll to top fonksiyonu
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Scroll fonksiyonu (mevcut)
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
