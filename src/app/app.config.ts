import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyC1BPhvKTu6Ai6GiT080GlQHwIemlRBd5U",
  authDomain: "angular-a94fc.firebaseapp.com",
  projectId: "angular-a94fc",
  storageBucket: "angular-a94fc.firebasestorage.app",
  messagingSenderId: "305128178236",
  appId: "1:305128178236:web:da16677c4e9f3c11b03939",
  measurementId: "G-0X0QHTC33V"
};

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),provideHttpClient(), provideAnimationsAsync()]
};

