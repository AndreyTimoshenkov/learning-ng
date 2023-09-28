import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { CardModule } from './pages/product-list/card/card.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule, CardModule],
	providers: [],
	bootstrap: [AppComponent],
	exports: [],
})
export class AppModule {}
