import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit, OnDestroy {
  images = [
    {
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&h=600&fit=crop',
      title: 'Engineering Collaboration',
      subtitle: 'Innovative teams building scalable solutions.'
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&h=600&fit=crop',
      title: 'Innovation at Scale',
      subtitle: 'Delivering secure and modern engineering.'
    },
    {
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=600&fit=crop',
      title: 'Engineering Excellence',
      subtitle: 'Clean code, best practices, continuous improvement.'
    },
    {
      src: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1400&h=600&fit=crop',
      title: 'Cloud & Scalability',
      subtitle: 'Robust cloud architectures for modern apps.'
    },
    {
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&h=600&fit=crop',
      title: 'Client Success',
      subtitle: 'Outcomes-driven engineering and partnership.'
    }
  ];

  currentIndex = 0;
  private intervalId: any;
  autoplayInterval = 4000; // ms
  autoplay = false; // disabled by default

  ngOnInit() {
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    if (!this.autoplay || !this.autoplayInterval || this.autoplayInterval <= 0) return;
    this.stopAutoplay();
    this.intervalId = setInterval(() => this.next(), this.autoplayInterval);
  }

  stopAutoplay() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}  
