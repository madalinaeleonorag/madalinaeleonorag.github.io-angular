import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { BannerComponent } from './components/banner/banner.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { ArticleComponent } from './components/article/article.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SocialLinksComponent } from './components/social-links/social-links.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    BannerComponent,
    SummaryComponent,
    TestimonialComponent,
    SkillsComponent,
    WorkExperienceComponent,
    CertificateComponent,
    ArticleComponent,
    CopyrightComponent,
    ContactComponent,
    SocialLinksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
