import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ShortListComponent} from './creative-selector/short-list/short-list.component';
import {CreativeSelectorComponent} from './creative-selector/creative-selector.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {ShortListService} from "./creative-selector/short-list/short-list.service";
import {CreativeSelectorService} from "./creative-selector/shared/creative-selector.service";
import {AppModule} from "./app.module";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CreativeSelectorComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [ShortListService, CreativeSelectorService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
